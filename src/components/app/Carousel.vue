<template>
  <!-- <v-container class="black">
    <div class="row">
      <v-col lg="3" xl="2" cols="12" class="pt-0 d-none d-lg-block">
        <div class="ecom-dropdownmenu pt-0 d-none d-lg-block">
          <ul class="py-3 mb-0">
            <li>
              <a href="">THEME</a>
            </li>
            <li>
              <a href="">THEME</a>
            </li>
            <li>
              <a href="">THEME</a>
            </li>
            <li>
              <a href="">THEME</a>
            </li>
          </ul>
        </div>
      </v-col>
      <v-col lg="9" xl="10" cols="12"> -->
        <v-carousel height="400" class="my-10" hide-delimiters cycle>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%" tile>
              <v-img :src="slide.src"> </v-img>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      <!-- </v-col>
    </div>  
  </v-container> -->
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          src: "",
        },
      ],
    };
  },
};
</script>
    
<style>
</style>