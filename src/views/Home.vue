<template>
  <v-container>
    <section class="my-2 mb-md-12">
      <Carousel />
    </section>
    <!-- <v-row>
      <v-col cols="12" sm="6" lg="4" xl="3">
        <v-select dense rounded outlined label="One"> </v-select>
      </v-col>
      <v-col cols="12" sm="6" lg="4" xl="3">
        <v-select dense rounded outlined label="One"> </v-select>
      </v-col>
      <v-col cols="12" sm="6" lg="4" xl="3">
        <v-select dense rounded outlined label="One"> </v-select>
      </v-col>
      <v-col cols="12" sm="6" lg="4" xl="3">
        <v-select dense rounded outlined label="One"> </v-select>
      </v-col>
    </v-row> -->
    <section class="mb-3">
      <skeleton v-if="loading" />
      <div v-else class="row" v-for="category in categories" :key="category.id">
        <v-col cols="12" class="mt-2 mb-5">
          <strong style="color: white">{{ category.name }}</strong>
          <v-divider class="my-6 white"></v-divider>ss
        </v-col>

        <v-col
          v-for="product in category.products"
          :key="`${product.id}${category.id}`"
          cols="12"
          sm="6"
          xl="3"
          lg="4"
        >
          <!-- <v-skeleton-loader v-if="show==true"
            type="card, card-heading, actions"
            :types="{ actions: 'button@1' }"
            dark
          ></v-skeleton-loader> -->
          <div class="position-relative">
            <v-card class="rounded-card" style="border-radius: 10px" dark>
              <router-link
                :to="{ name: 'Product', params: { slug: product.title } }"
              >
                <v-img
                  style="height: 250px"
                  :src="product.img"
                  class="rounded-card"
                >
                </v-img>
              </router-link>
              <v-card-title class="pb-0">
                {{ product.title }}
              </v-card-title>
              <v-card-text class="pb-1">
                by {{ product.ventor }} in
                <router-link
                  to="/"
                  style="text-decoration: none; color: #03c6fc"
                  >{{ product.category }}</router-link
                >
              </v-card-text>
              <v-card-actions>
                <div class="product-price d-flex pl-1">
                  <div class="d-flex align-start">
                    <span
                      v-if="product.price != 0"
                      class="product-price body-2"
                      style="margin-top: 5px; margin-right: 1px"
                    >
                      $
                    </span>
                    <span
                      v-if="product.price == 0"
                      class="product-price font-weight-bold text-h5"
                      >Free</span
                    >
                    <span
                      v-else
                      class="product-price font-weight-bold text-h5"
                      >{{ parseFloat(product.price).toFixed(2) }}</span
                    >

                    <!-- <span
                        class="product-price body-2"
                        style="margin-left: 2px; margin-top: 5px"
                        >98</span
                      > -->
                  </div>
                </div>
                <del
                  v-if="product.price != 0"
                  class="body-1 mx-1"
                  style="margin-top: 3px"
                  >{{ parseFloat(product.oldPrice).toFixed(2) }}</del
                >
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      rounded
                      outlined
                      large
                      class="accent--text"
                      depressed
                      v-bind="attrs"
                      v-on="on"
                      @click="addToWishlist(product)"
                    >
                      <v-icon>mdi-heart-plus</v-icon>
                    </v-btn>
                  </template>
                  <span>Add to wishlist</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      v-bind="attrs"
                      v-on="on"
                      @click="
                        addToCart(product._id, getToken);

                        snackBar = true;
                      "
                      rounded
                      outlined
                      large
                      class="accent--text"
                      depressed
                    >
                      <v-icon>mdi-basket-plus</v-icon>
                    </v-btn>
                  </template>
                  <span>Add to cart</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </div>
    </section>

    <v-btn
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-arrow-up-bold</v-icon>
    </v-btn>
    <!-- <Pagination /> -->
    <!-- <div class="text-center">
      <v-snackbar  v-model="snackbar" :timeout="2000">
        {{ text }}
      </v-snackbar>
    </div> -->
    <!-- //  <SnackBar/> -->
    <v-snackbar v-model="snackBar" timeout="1500"> Added to cart! </v-snackbar>
  </v-container>
</template>

<script>
import Carousel from "../components/app/Carousel.vue";
//import Pagination from "../components/app/Pagination.vue";
import skeleton from "../components/skeletonLoader.vue";
//import SnackBar from "../components/app/SnackBar.vue"
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Carousel,
    skeleton,
  },
  data() {
    return {
      expand: false,
      text: "Added to cart",
      snackBar: false,
      buttonLoading: false,
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    ...mapActions(["getProduct", "addProductToCart"]),
    addToCart(productId, access_token) {
      //console.log(productId, access_token)
      if(this.loggedIn)
        this.$store.dispatch("addProductToCart", { productId, access_token })
      else
        this.$router.push('/login')
    },
    addToWishlist(product) {
      if (this.loggedIn) {
        console.log("added " + product.title + " to wishlist");
      } else {
        this.$router.push("/login");
      }
    },
  },
  computed: {
    ...mapState(["categories", "loading"]),
    ...mapGetters(["loading", "categories", "cart"]),
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
    getToken() {
      if(this.loggedIn){
        return ("user", JSON.parse(localStorage.getItem("user"))).access_token;
      } 
      else{
        return null
      }
    },
  },
  created() {
    this.getProduct();
    //this.getSingleProduct();
  },
};
</script>
<style scoped>
.rounded-card {
  border-radius: 10px;
}
.v-application .accent--text.text--lighten-2 {
  color: #e65d5d !important;
}
.theme--dark.v-card {
  background-color: #05090c;
  color: #ffffff;
}
.theme--dark.v-btn.v-btn--outlined.v-btn--text {
  border-color: rgba(255, 255, 255, 0.22);
}
</style>
