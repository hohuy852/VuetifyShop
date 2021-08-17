<template>
  <v-container>
    <v-card class="px-2">
      <Carousel />
    </v-card>
    <v-btn
      text
      @click="expand = !expand"
      class="font-weight-bold text-uppercase textbase--text white"
    >
      <v-icon>mdi-filter-menu-outline</v-icon> Filter
    </v-btn>
    <v-expand-transition v-model="expand"> </v-expand-transition>
    <section class="mt-6 mb-3" >
      <skeleton v-if="loading" />
      <div v-else class="row" v-for="category in categories" :key="category.id">
        <v-col cols="12" class="mt-12 mb-5">
          <strong style="color: white">{{ category.name }}</strong>
          <v-divider class="my-6 white"></v-divider>
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
                <router-link :to = "{name: 'Product', params: {slug:product.title}}" >
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
                  {{ product.description }}
                </v-card-text>
                <v-card-actions>
                  <div class="product-price d-flex pl-1">
                    <div class="d-flex align-start">
                      <span
                        class="product-price body-2"
                        style="margin-top: 5px; margin-right: 1px"
                      >
                        $ 
                      </span>
                      <span class="product-price font-weight-bold text-h5"
                        >{{product.price}}</span
                      >
                      <!-- <span  v-else class="product-price font-weight-bold text-h5"
                        >{{parseFloat(product.price).toFixed(2)}}</span
                      > -->
                      <!-- <span
                        class="product-price body-2"
                        style="margin-left: 2px; margin-top: 5px"
                        >98</span
                      > -->
                    </div>
                  </div>
                  <del class="body-1 mx-1" style="margin-top: 3px">{{parseFloat(product.oldPrice).toFixed(2)}}</del>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="addToCart(product.id, category.id)"
                    rounded
                    outlined
                    large
                    class="accent--text"
                    depressed
                    
                  >
                    <v-icon>mdi-basket-plus</v-icon>
                  </v-btn>
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
    <Pagination />
    <!-- <div class="text-center">
      <v-snackbar  v-model="snackbar" :timeout="2000">
        {{ text }}
      </v-snackbar>
    </div> -->
    <!-- //  <SnackBar/> -->
  </v-container>
</template>

<script>
import Carousel from "../components/app/Carousel.vue";
// import Filter from "../components/app/Filter.vue"
import Pagination from "../components/app/Pagination.vue";
import skeleton from "../components/skeletonLoader.vue";
//import SnackBar from "../components/app/SnackBar.vue"
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Home",

  components: {
    //    HelloWorld,
    Carousel,
    // Filter,
    Pagination,
    //  SnackBar,
    skeleton,
  },
  data() {
    return {
      expand: false,
      text: 'Added to cart',
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
    ...mapActions(['getProduct',]),
    // addToCart(productId, categoryId){
    //   console.log(productId)
    //   console.log(categoryId)
    // },
    addToCart(productId, categoryId){
      this.$store.commit('ADD_CART', {productId ,categoryId})
    }
  },
  computed: {
    ...mapState(['categories', 'loading', 'snackbar']),
    // ...mapActions(['addToCart']),
    ...mapGetters([]),
    getFree(){
      
      return true
    }
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
</style>
