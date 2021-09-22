<template>
  <div>
    <div class="row" v-for="(category, i) in categories" :key="i">
      <v-col cols="12" class="mt-12 mb-5">
        <strong style="color: white">{{ category.name }}</strong>
      </v-col>

      <v-col v-for="(product, i) in 8" :key="i" cols="12" sm="6" xl="3" lg="4">
        <v-skeleton-loader
          type="card, card-heading, actions"
          :types="{ actions: 'button@2' }"
          dark
        >
        </v-skeleton-loader>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "FEATURED PRODUCT",
        },
        {
          name: "NEW AND POPULAR PRODUCTS",
        },
        {
          name: "FREE THEMES AND RESOURCES",
        },
        {
          name: "THEME",
        },
      ],
    };
  },
};
</script>

<style>
</style>