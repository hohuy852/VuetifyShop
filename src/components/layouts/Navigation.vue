<template>
  <div>
    <!-- NavigationBar -->
    <v-system-bar
      app
      dark
      style="
        height: 50px;
        background-color: rgb(7, 146, 5);
        border-color: rgb(7, 146, 5);
      "
    >
      <v-container
        class="
          font-weight-black
          text-body-2 text-md-h6 text-center
          white--text
          w-full
        "
      >
        🧨 UI Lib themes 40% off for a limited time
      </v-container>
    </v-system-bar>
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
        v-model="model"
        :items="entries"
        :loading="isLoading"
        :search-input.sync="search"
        dense
        single-line
        hide-details
        hide-selected
        item-text="title"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        append-icon=""
        clearable
        rounded
        return-object
        style="max-width: 450px"
        solo-inverted
        class="mr-7"
      >
        <template slot="no-data">
          <v-list-item>
            <v-list-item-title>
              <strong class="font-weigth-bold"
                >Search for products you like</strong
              >
            </v-list-item-title>
          </v-list-item>
        </template>
        <template slot="item" slot-scope="data">
          <template>
            <v-avatar class="mr-3" rounded width="50" height="40">
              <v-img width="50" height="40" :src="data.item.img"></v-img>
            </v-avatar>
            <router-link
              style="text-decoration: none"
              :to="{ name: 'Product', params: { slug: data.item.title } }"
            >
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

      <!-- <template v-slot:badge>
          <span v-if="!!count">{{ count }}</span>
        </template> -->
      <v-btn to="/login" text fab plain>
        <v-badge right dot color="green" :content="loggedIn" :value="loggedIn">
          <v-icon> mdi-account </v-icon>
        </v-badge>
      </v-btn>

      <Notification />
      <v-btn text fab @click="toggleCart = !toggleCart">
        <v-badge right overlap color="pink">
          <span slot="badge">{{ totalProduct }}</span>
          <v-icon> mdi-cart </v-icon></v-badge
        >
      </v-btn>
      <template v-slot:extension class="justify-space-around layout-menu">
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
            <router-link
              :to="item.route"
              class="white--text font-weight-bold"
              style="text-decoration: none"
              v-for="item in buttons"
              :key="item.route"
              >{{ item.title }}</router-link
            >
          </div>
        </v-container>
      </template>
    </v-app-bar>
    <!-- LeftNav -->
    <v-navigation-drawer v-model="toggleLeftMenu" fixed>
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
    </v-navigation-drawer>
    <!-- Cart -->
    <v-navigation-drawer v-model="toggleCart" temporary right :width="360" app>
      <v-list nav dense class="mb-3">
        <v-list-item>
          <v-list-item-content>
            <span class="px-2 py-2 text-h6 black--text">Shopping Cart</span>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="item, i in cart" :key="item._id">
          <v-badge overlap color="pink">
            <span slot="badge"> {{ item.quantity }}</span>
            <v-avatar class="pt-3" rounded width="70" height="60">
              <v-img :src="item.idProduct.img" width="70" height="60"></v-img>
            </v-avatar>
          </v-badge>

          <v-list-item two-line>
            <v-list-item-content>
              <div class="min-w-0 flex-grow-1">
                <v-list-item-title class="mb-1 font-weight-bold wrap-text">
                  {{ item.idProduct.title }}</v-list-item-title
                >
                <v-list-item-subtitle
                  v-if="item.idProduct.price == 0"
                  class="red--text text--darken-4 font-weight-black mb-1"
                  >Free</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  v-else
                  class="red--text text--darken-4 font-weight-black mb-1"
                  >${{
                    parseFloat(item.idProduct.price).toFixed(2)
                  }}</v-list-item-subtitle
                >
              </div>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                text
                fab
                :loading ="isLoading && i == index"
                @click="deleteItem(item.idProduct._id, getUser.access_token);
                    loader = 'isLoading'; index = i"
                ><v-icon>mdi-delete </v-icon></v-btn
              >
            </v-list-item-action>
          </v-list-item>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <div v-if="cart && cart.length > 0" class="row px-3 pt-5 align-center">
        <v-col cols="12" class="pb-0 text-right">
          <v-responsive style="max-width: 230px" class="ml-auto">
            <v-text-field
              dense
              single-line
              flat
              placeholder="Discount Code"
              rounded
              filled
            ></v-text-field>
          </v-responsive>
        </v-col>
      </div>
      <v-col
        v-if="cart && cart.length > 0"
        cols="12"
        class="text-right pt-5 d-flex align-center justify-end"
      >
        <span class="text-body-2 grey--text text--darken-1 pr-2"
          >Subtotal: ( {{ totalProduct }} item):
        </span>
        <v-responsive
          class="
            red--text
            headline
            text--darken-4
            font-weight-medium
            shrink
            d-inline-flex
            justify-end
          "
          style="max-width: 100px"
          >$ {{ totalPrice }}</v-responsive
        >
      </v-col>
      <div class="ma-2 mt-6" v-if="cart && cart.length === 0">
        <div class="text-center">
          <v-icon> mdi-block-helper </v-icon>
        </div>
        <div class="text-center mt-7">
          <span>Shopping Cart Empty</span>
        </div>
      </div>
      <v-row class="pt-2 mt-3 px-5" align="center">
        <v-col cols="12">
          <v-btn
            v-if="cart && cart.length == 0"
            @click="toggleCart = !toggleCart"
            class="theme--light v-size--large pink white--text font-weight-bold"
            block
            large
          >
            Continue shopping
          </v-btn>
          <v-btn
            v-else
            class="theme--light v-size--large pink white--text font-weight-bold"
            to="/checkout"
            block
            large
          >
            Checkout
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-snackbar v-model="snackBar" timeout="1500">
      {{message}}
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Notification from "../app/Notification.vue";
export default {
  components: {
    Notification,
  },
  data: () => ({
    snackBar: false,
    entries: [],
    isLoading: false,
    model: [{}],
    search: null,
    toggleLeftMenu: false,
    message: '',
    index: -1,
    loader:null,
    buttons: [
      {
        title: "HOME",
        route: "/",
      },
      {
        title: "THEMES",
        route: "/themes",
      },
      {
        title: "UI KITS",
        route: "/uikits",
      },
      {
        title: "FREEBIES",
        route: "/freebies",
      },
    ],
  }),
  computed: {
    ...mapState([]),
    ...mapGetters(["cart", "totalProduct", "totalPrice", "addCartState"]),
    toggleCart: {
      get() {
        return this.$store.state.cart.toggleCart;
      },
      set(value) {
        this.$store.commit("TOGGLE_CART", value);
      },
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    getUser() {
      if (this.loggedIn) {
        return "user", JSON.parse(localStorage.getItem("user"));
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapActions(["getCartItems"]),
    // deleteItem(productId){
    //   console.log(productId)
    // }
    deleteItem(productId, access_token) {
      if (this.loggedIn) {
        this.isLoading = true
        this.$store.dispatch("deleteItem", { productId, access_token })
        .then(
          () =>{
            this.isLoading = false
            this.message = "Removed from cart!"
            this.snackBar = true
            this.getCartItems(this.getUser.access_token);
          },
          (error) =>{
            console.log(error.response.data)
            this.isLoading = false
            this.message ="Remove failed !",
            this.snackBar = true
          }
        )
      } else {
        this.$store.dispatch("deleteLocalCart", productId);
        this.message = "Removed from cart!"
        this.snackBar = true;
      }
    },
  },

  watch: {
    search() {
      // Items have already been loaded
      if (this.entries.length > 0) return;
      // console.log(this.entries);
      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;
      // Lazily load input items
      fetch("https://web-demo.online/product")
        .then((res) => res.json())
        .then((res) => {
          const { count, entries } = res;
          this.count = count;
          this.entries = entries;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.getCartItems(this.getUser.access_token);
    }
  },
};
</script>
<style scoped lang="scss" >
.theme--dark.v-sheet {
  background-color: #05090c;
  border-color: #1e1e1e;
  color: #ffffff;
}
.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: #05090c;
}
.wrap-text {
  white-space: normal;
}
$text-field-rounded-border-radius: 7px;
</style>
