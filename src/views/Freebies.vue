<template>
  <v-container>
    <section class="mb-3">
      <skeleton v-if="loading" />
      <v-row>
        <v-col
          v-for="(product, i) in freebies"
          :key="product.id"
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
                        addToCart(product._id, getToken, product);
                        loader = 'buttonLoading';
                        index = i;
                      "
                      rounded
                      outlined
                      large
                      class="accent--text"
                      depressed
                      :loading="buttonLoading && i == index"
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
      </v-row>
    </section>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import skeleton from "../components/skeletonLoader.vue";
export default {
  name: "Theme",
  components: {
    skeleton,
  },
  data() {
    return {
      buttonLoading: false,
      index: -1,
      loading: false,
    };
  },
  methods: {
    ...mapActions(["getSingleProduct"]),
    addToCart(productId, access_token, product) {
      //console.log(productId, access_token)
      if (this.loggedIn) {
        this.buttonLoading = true;
        this.$store
          .dispatch("addProductToCart", { productId, access_token })
          .then(
            () => {
              this.buttonLoading = false;
              this.text = "Added to cart!";
              this.$store.state.cart.navId++;
              setTimeout(() => {
                this.toggleCart = !this.toggleCart;
              }, 300);
              this.snackBar = true;
            },
            (error) => {
              console.log(error.response.data);
              this.buttonLoading = false;
              this.text = "An error occur!";

              this.snackBar = true;
            }
          );
      } else {
        this.$store.dispatch("addLocalCart", product);
        this.text = "Added to cart!";
        this.toggleCart = !this.toggleCart;
        this.snackBar = true;
      }
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
    freebies() {
      let allProduct = this.$store.state.products.products;
      let theme = allProduct.filter((product) => product.category === "Free");
      return theme;
    },
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
      if (this.loggedIn) {
        return ("user", JSON.parse(localStorage.getItem("user"))).access_token;
      } else {
        return null;
      }
    },
  },
  created() {
    this.getSingleProduct();
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