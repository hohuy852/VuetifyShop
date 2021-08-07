<template>
  <v-container>
    <v-card class="px-2">
      <Carousel />
    </v-card>
      <Filter/>
      
    <section class="mt-6 mb-3">
      <v-row>
        <v-col cols="12" class="mt-12">
          <strong style="color: white">NEW PRODUCT</strong>
        </v-col>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          xl="3"
          lg="4"
        >
          <div class="position-relative">
            <v-card class="rounded-card" dark>
              <v-sheet>
                <router-link to="/product">
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
                        >12</span
                      >
                      <span
                        class="product-price body-2"
                        style="margin-left: 2px; margin-top: 5px"
                        >98</span
                      >
                    </div>
                  </div>
                  <del class="body-1 mx-1" style="margin-top: 3px">14.94</del>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="addToCart(product.id)"
                    rounded
                    outlined
                    large
                    class="accent--text"
                    depressed
                  >
                    <v-icon>mdi-basket-plus</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-sheet>
            </v-card>
          </div>
        </v-col>
      </v-row>
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
  </v-container>
</template>

<script>
import Carousel from "../components/app/Carousel.vue"
import Filter from "../components/app/Filter.vue"
import { mapState, mapActions } from "vuex"
export default {
  name: "Home",
  
  components: {
    //    HelloWorld,
    Carousel,
    Filter,
  },
  data() {
    return {
      // expand: false,

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
    ...mapActions(["addToCart"]),
  },
  computed: {
    ...mapState(["products"]),
    // ...mapActions(['addToCart']),
    // ...mapGetters(['getProductCategory'])
  },
};
</script>
<style scoped>
.rounded-card {
  border-radius: 15px;
}
.v-application .accent--text.text--lighten-2 {
  color: #e65d5d !important;
}
</style>
