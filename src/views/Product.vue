<template>
  <v-container style="margin-top: 50px">
    <SkeletonProduct v-if="loadingDetails"/>
    <div class="row" v-if="!loadingDetails">
      <v-col cols="12" md="8" xl="6" offset-xl="1">
        <div class="d-flex flex-column-reverse flex-md-row">
          <div class="d-flex d-md-block justify-center">
            <v-tab
              class="
                d-inline-block d-md-block
                mb-md-3
                ma-1 ma-md-0
                overflow-hidden
                v-card v-card--flat v-card--link
                v-sheet
                rounded
                transparent
              "
              
              v-for="(img) in product.previewImage"
              :key="img._id"
              ><v-img
                @click="handleChangeImage(img)"
                :src="img.src"
                style="height: 48px; max-width: 48px"
              ></v-img
            ></v-tab>
            <!-- <v-tab
              class="
                d-inline-block d-md-block
                mb-md-3
                ma-1 ma-md-0
                overflow-hidden
                v-card v-card--flat v-card--link
                v-sheet
                rounded
                transparent
              "
              ><v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                style="height: 48px; max-width: 48px"
              ></v-img
            ></v-tab>
            <v-tab
              class="
                d-inline-block d-md-block
                mb-md-3
                ma-1 ma-md-0
                overflow-hidden
                v-card v-card--flat v-card--link
                v-sheet
                rounded
                transparent
              "
              ><v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                style="height: 48px; max-width: 48px"
              ></v-img
            ></v-tab>
            <v-tab
              class="
                d-inline-block d-md-block
                mb-md-3
                ma-1 ma-md-0
                overflow-hidden
                v-card v-card--flat v-card--link
                v-sheet
                rounded
                transparent
              "
              ><v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                style="height: 48px; max-width: 48px"
              ></v-img
            ></v-tab> -->
          </div>
          <div class="mb-1 min-w-0 mx-md-auto">
            <div class="" style="position: relative">
              <img
                :src="product.img"
                width="auto"
                height="auto"
                style="max-width: 100%; max-height: 474px; border-radius: 10px"
              />
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="4" xl="3">
        <div class="product-content white--text">
          <div class="text-h5 text-lg-h4 mb-1">{{ product.title }}</div>
          <div class="mb-2">
            <div class="product-price d-flex">
              <div class="d-flex success--text">
                <div
                  v-if="product.price == 0"
                  class="product-price font-weight-bold text-h4"
                >
                  Free
                </div>
                <span
                  v-else
                  class="product-price body-2"
                  style="margin-top: 5px; margin-right: 1px"
                  >$</span
                >
                <div
                  v-if="product.price != 0"
                  class="product-price font-weight-bold text-h4"
                >
                  {{ parseFloat(product.price).toFixed(2) }}
                </div>
                <!-- <span
                  class="product-price body-1"
                  style="margin-left: 2px; margin-top: 3px"
                  >{{ product.price }}</span
                > -->
              </div>
              <del
                v-if="product.price != 0"
                class="text-h6 mx-2"
                style="margin-top: 3px"
                >{{ product.oldPrice }}</del
              >
            </div>
            <div class="body-1 mt-3">
              <div>
                Availability:
                <span style="color: #45f542">Available</span>
              </div>
              <div>
                Vendor:
                <span>Vuetify</span>
              </div>
            </div>

            <v-btn
              x-large
              block
              class="mt-10 black--text font-weight-bold"
              style="
                background-color: rgb(243, 205, 112);
                border-color: rgb(243, 205, 112);
              "
              @click="addProductToCart(product);  toggleCart = !toggleCart"
              ><v-icon>mdi-basket-plus</v-icon
              ><span class="flex-grow-1"
                >Add to cart</span
              ></v-btn 
            >
            <v-btn
              x-large
              block
              class="mt-3 black--text font-weight-bold"
              style="
                background-color: rgb(243, 205, 112);
                border-color: rgb(243, 205, 112);

              "
              @click="buy(product)"
              ><v-icon>mdi-send</v-icon><span class="flex-grow-1">Buy now</span>
            </v-btn>
          </div>
        </div>
      </v-col>
    </div>
    <div class="row" v-if="!loadingDetails">
      <v-col class="mx-auto" cols="12">
        <v-card class="pa-3" color="#05090c">
          <v-sheet class="py-2 body-1 white--text" color="#05090c">
            <p style="text-align: left">
              <strong>Failor</strong>
              is an all-in-one Vuetify theme designed to create pixel perfect
              websites, fast & easy. It comes with 8 detailed page examples
              filled with beautifully crafted Vuetify components to save you
              time and help you get inspired.
            </p>
            <h2>Quick Facts</h2>
            <br />
            <ul>
              <li>
                Reliable & regular updates. This theme is maintained by the
                author of Vuetify, John Leider.
              </li>
              <li>
                Reliable & regular updates. This theme is maintained by the
                author of Vuetify, John Leider.
              </li>
              <li>
                Reliable & regular updates. This theme is maintained by the
                author of Vuetify, John Leider.
              </li>
              <li>
                Reliable & regular updates. This theme is maintained by the
                author of Vuetify, John Leider.
              </li>
            </ul>
          </v-sheet>
        </v-card>
      </v-col>
    </div>

    <div class="row" v-if="!loadingDetails">
      <v-col cols="12">
        <v-divider class="mt-7"></v-divider>
        <div
          class="
            font-weight-black
            text-uppercase
            mb-4
            headline
            text-center
            mt-6
            white--text
          "
        >
          Others also bought
        </div>
        <v-row class="justify-center">
          <v-col
            v-for="(item, i) in filteredProduct"
            :key="i"
            sm="6"
            lg="4"
            xl="3"
            cols="12"
          >
            <div class="position-relative">
              <v-card class="rounded-card" style="border-radius: 10px" dark>
                <v-sheet>
                  <router-link
                    :to="{ name: 'Product', params: { slug: item.title } }"
                  >
                    <v-img
                      style="height: 250px"
                      :src="item.img"
                      class="rounded-card"
                    >
                    </v-img>
                  </router-link>
                  <v-card-title class="pb-0">
                    {{ item.title }}
                  </v-card-title>
                  <v-card-text class="pb-1">
                    by {{ item.ventor }} in
                    <router-link
                      to="/"
                      style="text-decoration: none; color: #03c6fc"
                      >{{ item.category }}</router-link
                    >
                  </v-card-text>
                  <v-card-actions>
                    <div class="product-price d-flex pl-1">
                      <div class="d-flex align-start">
                        <span
                          v-if="item.price == 0"
                          class="product-price font-weight-bold text-h5"
                          >Free</span
                        >
                        <span
                          v-else
                          class="product-price body-2"
                          style="margin-top: 5px; margin-right: 1px"
                        >
                          $
                        </span>
                        <span
                          v-if="item.price != 0"
                          class="product-price font-weight-bold text-h5"
                          >{{ parseFloat(item.price).toFixed(2) }}</span
                        >
                        <!-- <span
                          class="product-price body-2"
                          style="margin-left: 2px; margin-top: 5px"
                          >98</span
                        > -->
                      </div>
                    </div>
                    <del
                      v-if="item.price != 0"
                      class="body-1 mx-1"
                      style="margin-top: 3px"
                      >{{ item.oldPrice }}</del
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      rounded
                      outlined
                      large
                      class="accent--text"
                      depressed
                      @click="addProductToCart(item); toggleCart = !toggleCart"
                    >
                      <v-icon>mdi-basket-plus</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-sheet>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import SkeletonProduct from "../components/app/SkeletonProduct.vue";
export default {
  name: "Product",
  components: {
    SkeletonProduct,
  },
  data() {
    return {
      slug: this.$route.params.slug,
      selectedImg: 0,
      imgSelected: '',
    };
  },
  props: {},
  methods: {
    ...mapActions(["getSingleProduct", "addProductToCart"]),
    buy(p){
      this.$router.push('/checkout')
      this.$store.dispatch('addProductToCart', p)
    },
    handleChangeImage(img){
      console.log(img)

      this.imgSelected = img.src
    }
  },
  computed: {
    ...mapGetters(["products","loadingDetails"]),
    filteredProduct() {
      const array = this.products
      const shuffled = array.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    },
    product() {
      const productList =this.products
      return productList.find((product) => product.title === this.slug);
    },
    toggleCart: {
      get() {
        return this.$store.state.cart.toggleCart;
      },
      set(value) {
        this.$store.commit("TOGGLE_CART", value);
      },
    },
  },
  created() {
    this.getSingleProduct();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>



<style scoped>
.theme--light.v-divider {
  border-color: rgb(248 247 247 / 22%);
}
.rounded-card {
  border-radius: 10px;
}
.v-application .accent--text.text--lighten-2 {
  color: #e65d5d !important;
}
</style>