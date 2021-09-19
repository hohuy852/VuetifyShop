<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" lg="4" xl="3">
        <v-select dense rounded outlined label="One"> </v-select>
      </v-col>
    </v-row>
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