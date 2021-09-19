<template>
  <v-window>
    <v-window-item>
      <v-card class="my-2" dark>
        <v-data-table disable-sort :headers="headers" :items="items">
          <template v-slot:[`item.product`] ="{item}">
              <v-list-item>
                <v-avatar :src = "item.src">
                   <v-img  width="60" height="60"></v-img>
                </v-avatar>
                <v-list-item>
                  <v-list-item-title>A</v-list-item-title>
                </v-list-item>
              </v-list-item>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-window-item>
  </v-window>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Product",
          value: "product",
          align: "left",
        },
        {
          text: "Price",
          value: "price",
          align: "center",
        },
        {
          text: "",
          value: "actions",
          align: "center",
        },
      ],
      items: [
        {
          product: "A",
          price: "33.3$",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.theme--dark.v-data-table 
    background-color: #000000
</style>