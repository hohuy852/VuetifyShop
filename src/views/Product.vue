<template>
  <v-container style="margin-top: 50px">
    <v-row style="margin-left: 27px">
      <v-col cols="12" md="8" xl="6">
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
          </div>
          <div class="mb-1 min-w-0 mx-md-auto">
            <div class="" style="position: relative">
              <img
                src="https://cdn.shopify.com/s/files/1/2695/0984/products/image3_7a06743a-b730-49f1-a636-a63fb43dafe7.png?v=1611181256"
                width="auto"
                height="auto"
                style="max-width: 100%; max-height: 474px"
              />
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="4" xl="3">
        <div class="product-content white--text" >
          <h1 class="text-h5 text-lg-h4 mb-1">Flairo Theme PRO</h1>
          <div class="mb-2">
            <div class="product-price d-flex">
              <div class="d-flex success--text">
                <span
                  class="product-price body-2"
                  style="margin-top: 5px; margin-right: 1px"
                  >$</span
                >
                <span class="product-price font-weight-bold text-h4">9</span>
                <span
                  class="product-price body-1"
                  style="margin-left: 2px; margin-top: 3px"
                  >50</span
                >
              </div>
              <del class="text-h5 mx-2" style="margin-top: 3px">38.00</del>
            </div>
            <div class="body-1 mt-3">
              <div>
                Availability:
                <span>Available</span>
              </div>
            </div>

            <v-btn x-large block class="mt-3 black--text">Buy Now</v-btn>
            <v-btn x-large block class="mt-3 black--text">Add to cart </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
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
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-divider class="mt-7"></v-divider>
        <div
          class="
            font-weight-black
            text-uppercase
            mb-2
            headline
            text-center
            mt-10
          "
        >
          Others also bought
        </div>
        <v-row class="justify-center">
          <v-col v-for="(product, i) in 4" :key="i" cols="6" md="3">
            <div class="position-relative">
             <v-card class="rounded-card " dark
                >
                <v-sheet>
                  <router-link to="/product">
                    <v-img style="height: 250px" :src="product.img" class="rounded-card"> </v-img>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.theme--light.v-divider {
  border-color: rgb(248 247 247 / 12%);
}
.rounded-card{
    border-radius:15px;
}
.v-application .accent--text.text--lighten-2{
    color: #e65d5d !important
}
</style>