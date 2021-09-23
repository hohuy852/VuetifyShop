<template>
  <v-window>
    <v-window-item class="dark">
      <v-card class="my-2" dark>
        <v-card-title>
          Orders history
          <v-spacer></v-spacer>
          <v-btn
            depressed
            dark
            outlined
            text
            class="font-weight-bold"
            :loading="isLoading"
            @click="refresh"
          >
            Refresh
          </v-btn>
        </v-card-title>
        <v-card-text v-if="orders.length == 0"> No orders yet </v-card-text>
        <v-card-text>
          <v-expansion-panels>
            <v-expansion-panel v-for="order in orders" :key="order._id">
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <div class="d-flex">
                  <div
                    class="d-flex justify-space-between mr-2"
                    style="min-width: 96px"
                  >
                    <span>Order:</span>
                    <span class="pl-3" v-text="order._id"></span>
                  </div>
                  <div class="d-flex flex-grow-1">
                    <v-spacer></v-spacer>
                    <div class="font-weight-bold mx-1">Fulfilled/Paid</div>
                    <div class="mx-2 font-weight-bold">{{order.total}} $</div>
                  </div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-data-table
                  :headers="headers"
                  hide-default-footer
                  :items="order.OrderItems"
                  style="background-color: #000000"
                  :disable-sort="true"
                >
                </v-data-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-window-item>
  </v-window>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Orders",
  data() {
    return {
      sortBy: "",
      sortDesc: false,
      data: [],
      isLoading: false,
      headers: [
        {
          text: "Product",
          value: "name",
          align: "start",
        },
        {
          text: "Quantity",
          value: "quantity",
          align: "right",
        },
        {
          text: "Price",
          value: "price",
          align: "right",
        },
      ],
    };
  },
  watch: {},
  methods: {
    ...mapActions(["getOrders"]),
    refresh() {
      this.isLoading = true;
        this.getOrders(this.getUser.access_token)
        .then(
          ()=>{
            this.isLoading = false
          },
          (err) =>{
            console.log(err.response.data)
          }
        )
    },
  },
  computed: {
    ...mapGetters(["orders"]),
    getUser(){
     return ('user', JSON.parse(localStorage.getItem('user')))
    }

  },
  mounted() {
     this.getOrders(this.getUser.access_token)
  },
};
</script>

<style scoped>
.theme--dark.v-card {
  background-color: #05090c;
  color: #edf0f2;
}
.theme--dark.v-btn.v-btn--outlined.v-btn--text {
  border-color: rgba(255, 255, 255, 0.62);
}
.theme--dark.v-expansion-panels .v-expansion-panel {
  background-color: #000000;
}
</style>