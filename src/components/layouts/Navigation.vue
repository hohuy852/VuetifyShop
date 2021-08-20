<template>
  <div>
    <!-- NavigationBar -->
    <v-app-bar app dark>
      <v-app-bar-nav-icon
        @click="toggleLeftMenu = !toggleLeftMenu"
        v-if="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="inspire">
        <router-link
          to="/"
          style="text-decoration: none"
          class="font-weight-bold text-uppercase white--text"
          >VUETIFY STORE</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-autocomplete
        v-model="searchString"
        :items="products"
        class="mt-0 mr-10"
        dense
        solo-inverted
        single-line
        color="pink"
        placeholder="Search"
        hide-no-data
        rounded
        hide-details
        style="max-width: 450px"
        flat
        append-icon=""
        prepend-inner-icon="mdi-magnify"
        outlined
      >
        <template slot="no-data">
          <v-list-tile>
            <v-list-title>
              Search for your favorite
              <strong>Product</strong>
            </v-list-title>
          </v-list-tile>
        </template>
        <template slot="item" slot-scope="data">
          <template>
            <v-avatar class="mr-3" rounded width="50" height="40">
              <v-img width="50" height="40" :src="data.item.img"></v-img>
            </v-avatar>
            <router-link style="text-decoration: none; "  :to="{ name: 'Product', params: { slug: data.item.title } }" :key="$route.path">
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-bold"
                  v-html="data.item.title"
                ></v-list-item-title>
                <v-list-item-subtitle
                  class="font-weight-bold pink--text"
                  v-if="data.item.price == 0"
                  >Free</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  class="font-weight-bold pink--text"
                  v-else
                  v-html="parseFloat(data.item.price).toFixed(2) + '$'"
                ></v-list-item-subtitle> </v-list-item-content
            ></router-link>
          </template>
        </template>
      </v-autocomplete>

      <v-btn to="/login" text fab plain>
        <v-icon fab> mdi-account </v-icon>
      </v-btn>
      <Notification />
      <v-btn text fab @click="toggleCart = !toggleCart">
        <v-badge right overlap color="pink">
          <span slot="badge">{{ totalProduct }}</span>
          <v-icon> mdi-cart </v-icon></v-badge
        >
      </v-btn>

      <!-- <template
        v-slot:extension
        class="justify-space-around layout-menu"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <v-container class="py-0 d-none d-md-block fill-height">
          <div
            class="
              d-flex
              fill-height
              justify-space-between
              py-2
              text-body-2 text-lg-body-1
              layout-menu
            "
          >
            <v-btn text> HOME </v-btn>
          </div>
        </v-container>
      </template> -->
    </v-app-bar>
    <!-- LeftNav -->
    <!-- <v-navigation-drawer v-model="toggleLeftMenu" fixed>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item
            v-for="(item, index) in buttons"
            :key="index"
            :to="item.link"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
    <!-- Cart -->
    <v-navigation-drawer v-model="toggleCart" temporary right :width="360" app>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-content>
            <span class="px-2 py-2 text-h6 black--text">Shopping Cart</span>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="product in cart" :key="product.id">
          <v-badge overlap color="pink">
            <span slot="badge"> {{ product.quantity }}</span>
            <v-avatar class="pt-3" rounded width="70" height="60">
              <v-img :src="product.img" width="70" height="60"></v-img>
            </v-avatar>
          </v-badge>

          <v-list-item two-line>
            <v-list-item-content>
              <div class="min-w-0 flex-grow-1">
                <v-list-item-title class="mb-1 font-weight-bold truncate">
                  {{ product.title }}</v-list-item-title
                >
                <v-list-item-subtitle
                  v-if="product.price == 0"
                  class="red--text text--darken-4 font-weight-black mb-1"
                  >Free</v-list-item-subtitle
                >

                <v-list-item-subtitle
                  v-else
                  class="red--text text--darken-4 font-weight-black mb-1"
                  >${{ product.price }}</v-list-item-subtitle
                >
              </div>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn text fab @click="deleteItem(product.id)"
                ><v-icon>mdi-delete </v-icon></v-btn
              >
            </v-list-item-action>
          </v-list-item>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <div class="ma-2 mt-6" v-if="cart.length === 0">
        <div class="text-center">
          <v-icon> mdi-block-helper </v-icon>
        </div>
        <div class="text-center mt-7">
          <span>Shopping Cart Empty</span>
        </div>
      </div>
      <v-row align="center" class="pt-2 px-3 mt-3">
        <v-col class="d-flex justify-center" cols="12">
          <v-btn
            class="theme--light v-size--large pink white--text font-weight-bold"
          >
            Check out: {{ totalPrice }} $ | items: ({{ totalProduct }})
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Notification from "../app/Notification.vue";
export default {
  components: {
    Notification,
  },
  data: () => ({
    searchString: "",
    toggleLeftMenu: false,
    toggleCart: false,
    buttons: [
      {
        icon: "mdi-home",
        title: "HOME",
        link: "/",
      },
      {
        icon: "mdi-map",
        title: "THEME",
        link: "/map",
      },
      {
        icon: "mdi-infomation",
        title: "UI KITS",
        link: "/about",
      },
      {
        icon: "mdi-infomation",
        title: "FREEBIES",
        link: "/freebie",
      },
    ],
  }),
  computed: {
    ...mapState(["cart", "cartToggle", "products"]),
    ...mapGetters(["totalProduct", "totalPrice"]),
  },
  methods: {
    ...mapActions(["deleteItem", "getSingleProduct"]),
    // deleteItem(productId){
    //   console.log(productId)
    // }
  },
  created() {
    this.getSingleProduct();
  },
};
</script>
<style >
.theme--dark.v-sheet {
  background-color: #05090c;
  border-color: #1e1e1e;
  color: #ffffff;
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.v-application .text-h6 {
  font-family: "Quicksand", sans-serif !important;
}
</style>
