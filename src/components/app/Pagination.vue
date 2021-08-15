<template>
  <div><v-pagination v-model="page" :length="4" circle></v-pagination></div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style>
</style>