<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Infomation </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2"> Payment </v-stepper-step>
      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-container>
          <div class="row justify-center">
            <v-col cols="12" sm="6" md="4" class="mr-5">
              <div class="text-h6 mb-4">Billing Address</div>
              <v-divider class="mb-4"></v-divider>
              <v-row>
                <v-col>
                  <v-text-field :rules="[rules.required]" label="First name" outlined></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field  :rules="[rules.required]" label="Last name" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Company(Optional)"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field :rules="[rules.required]" label="Address" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Apartment,suite,etc... "
                    outlined
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field :rules="[rules.required]" label="City" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field :rules="[rules.required]" label="Country/Region" outlined></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field :rules="[rules.required]" label="Postal Code" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field :rules="[rules.required]" label="Phone" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-btn color="primary" large @click="e1 = 2"> Continue </v-btn>
            </v-col>

            <v-col cols="12" md="6" sm="4" class="ml-5">
              <div class="text-h6 mb-4">Items in cart</div>
              <v-divider class="mb-4"></v-divider>
              <v-row class="ml-5" justify="center">             
                <v-list-item
                  v-for="product in cart"
                  :key="product.id"
                  class="my-3"
                >
                  <v-badge overlap color="pink">
                    <span slot="badge"> {{ product.quantity }}</span>
                    <v-avatar class="pt-3" rounded width="70" height="60">
                      <v-img
                        :src="product.product.img"
                        width="70"
                        height="60"
                      ></v-img>
                    </v-avatar>
                  </v-badge>

                  <v-list-item two-line>
                    <v-list-item-content>
                      <div class="min-w-0 flex-grow-1">
                        <v-list-item-title
                          class="mb-1 font-weight-bold truncate"
                        >
                          {{ product.product.title }}</v-list-item-title
                        >
                        <v-list-item-subtitle
                          v-if="product.product.price == 0"
                          class="
                            red--text
                            text--darken-4
                            font-weight-black
                            mb-1
                          "
                          >Free</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          v-else
                          class="
                            red--text
                            text--darken-4
                            font-weight-black
                            mb-1
                          "
                          >${{
                            parseFloat(product.product.price).toFixed(2)
                          }}</v-list-item-subtitle
                        >
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item>
              </v-row>
              <v-divider class="my-4" v-if="cart.length > 0"></v-divider>
              <v-row justify="center" v-if="cart.length > 0">
                <div class="text-h5 font-weight-bold" v-html="`Total: ${totalPrice} $`"></div>
              </v-row>
            </v-col>
          </div>

          <v-divider vertical dark></v-divider>
        </v-container>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-btn color="primary"> Complete Payment </v-btn>

        <v-btn text @click="e1 = 1"> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "Checkout",
      e1: 1,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  computed: {
    ...mapGetters(["cart","totalPrice"]),
  },
};
</script>