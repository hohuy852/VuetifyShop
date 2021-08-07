<template>
  <v-carousel  height="400" class="my-10" hide-delimiters cycle>
    <v-carousel-item v-for="(slide, i) in 4" :key="i">
      <v-sheet height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">Slide {{ i + 1 }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      slides: [],
    };
  },
};
</script>
    
<style>
</style>