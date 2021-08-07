<template>
  <div>
    <!-- NavigationBar -->
    <v-app-bar app dark>
      <v-app-bar-nav-icon
        @click="toggleLeftMenu = !toggleLeftMenu"
        v-if="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="inspire">
        <router-link to="/" style="text-decoration: none"
          >BRAND</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/login" text fab plain >
        <v-icon fab> mdi-account </v-icon>
      </v-btn>
      <v-btn text fab @click="toggleCart = !toggleCart">
        <v-badge right overlap color="pink">
          <span slot="badge">{{ cart.length }}</span>
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
            <span class="px-2 py-2">Shopping Cart</span>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="product in cart" :key="product.id">
          <v-badge overlap color="blue">
            <span slot="badge">{{ product.quantity }}</span>
            <v-avatar class="pt-3" rounded width="70" height="60">
              <v-img :src="product.img" width="70" height="60"></v-img>
            </v-avatar>
          </v-badge>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title> {{ product.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ product.price }}</v-list-item-subtitle>
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
      
      <v-row align="center" class="pt-2 px-3">
        <v-col v-if="cart.length==0" cols="12" class="justify-center d-flex">
          <span>no item in cart</span>
        </v-col>
        <v-col class="d-flex justify-center" cols="12">
          <v-btn class="theme--light v-size--large">
            Check out: {{totalPrice}} $ | items: ({{ totalProduct }})
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
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
    ...mapState(["cart"]),
    ...mapGetters(["totalProduct", 'totalPrice']),
  },
  methods: {
   ...mapActions(['deleteItem'])
  },
};
</script>
<style lang="scss">
</style>
