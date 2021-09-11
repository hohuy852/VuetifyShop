<template>
  <v-window>
    <v-window-item class="dark">
      <v-card class="my-2" dark>
        <v-card-title>
          Orders history
          <v-spacer></v-spacer>
          <v-btn depressed dark outlined text class="font-weight-bold">
            Refresh
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <div class="d-flex">
                  <div
                    class="d-flex justify-space-between mr-2"
                    style="min-width: 96px"
                  >
                    <span>Order:</span>
                    <span>#27428</span>
                  </div>
                  <div class="d-flex flex-grow-1">
                    <v-spacer></v-spacer>
                    <div class="font-weight-bold mx-1">Fulfilled/Paid</div>
                    <div class="mx-2 font-weight-bold">Free</div>
                  </div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-data-table :headers="headers" hide-default-footer :items="data" style="background-color: #000000" :disable-sort ="true" >
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
export default {
  data() {
    return {
      sortBy: '',
        sortDesc: false,
      data:[
        {
          Product: '33123',
          Quantity: '3',
          Total: '3'
        }

      ],

      headers: [
        {
          text: "Product",
          value:'Product',
          align: "start"
        },
        {
          text: "Quantity",
          value: "Quantity",
          align: 'right'
        },
        {
          text: "Total",
          value: "Total",
          align: 'right'
        },
      ],
    };
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