<template>
  <div>
    <div class="row">
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
              v-for="n in 4"
              :key="n"
              ><v-skeleton-loader
                type="image"
                dark
                height="48"
              ></v-skeleton-loader
            ></v-tab>
          </div>
          <div>
            <v-skeleton-loader type="image" height="467"> </v-skeleton-loader>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="4" xl="3">
        <div class="product-content white--text">
          <!-- <h1 class="text-h5 text-lg-h4 mb-1">{{}}</h1> -->
          <v-skeleton-loader type="heading"></v-skeleton-loader>
          <div class="mb-2">
            <div class="product-price d-flex">
              <div class="d-flex success--text">
              
                <!-- <span
                  class="product-price body-1"
                  style="margin-left: 2px; margin-top: 3px"
                  >{{ product.price }}</span
                > -->
              </div>
             
            </div>
            <div class="body-1 mt-3">
              
            </div>
            <v-skeleton-loader
              type="paragraph"
              class="mt-3"
            ></v-skeleton-loader>
            <v-skeleton-loader
              type="paragraph"
              class="mt-3"
            ></v-skeleton-loader>
            <v-skeleton-loader
              type="image"
              class="mt-3"
              width="70"
              height="48"
            ></v-skeleton-loader>
          </div>
        </div>
      </v-col>
    </div>

    <div class="row">
      <v-col class="mx-auto" cols="12">
        <v-card class="pa-3" color="#111b27">
          <v-sheet class="py-2 body-1 white--text" color="#111b27">
            <p style="text-align: left">
              <v-skeleton-loader type="heading"></v-skeleton-loader>
            </p>
            <v-skeleton-loader
              type="heading"
              width="408"
            ></v-skeleton-loader>
            <br />
            <ul>
              <v-skeleton-loader type="paragraph"></v-skeleton-loader>
              <v-skeleton-loader type="paragraph"></v-skeleton-loader>
            </ul>
          </v-sheet>
        </v-card>
      </v-col>
    </div>
    <div class="row">
      <v-col cols="12">
        <v-divider class="mt-7"></v-divider>
        <div
          class="
            font-weight-black
            text-uppercase
            mb-2
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
            v-for="(item, i) in 4"
            :key="i"
            sm="6"
            lg="4"
            xl="3"
            cols="12"
          >
            <div class="position-relative">
              <v-skeleton-loader
                type="card, card-heading, actions"
                :types="{ actions: 'button@1' }"
                dark
              >
              </v-skeleton-loader>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "SkeletonProduct",
    };
  },
};
</script>

<style>
</style>