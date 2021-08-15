<template>
  <v-container>
    <v-btn text @click="expand = !expand">
      <v-icon>mdi-menu-filter</v-icon> Filter
    </v-btn>
    <v-expand-transition v-model="expand">
      <v-card
        flat
        v-show="expand"
        height="300"
        width="600"
        class="mx-auto secondary"
      ></v-card>
    </v-expand-transition>
  </v-container>
</template>

<script>
export default {
  props: {
    expand: Boolean,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>