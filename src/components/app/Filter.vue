<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      expand: false,
    };
  },
};
</script>

<style>
</style>