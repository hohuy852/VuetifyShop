<template>
    <v-carousel class="my-10" hide-delimiters cycle height="335">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet tile rounded="15">
          <v-img :src="slide.src"> </v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          src: "https://cdn.cosmicjs.com/77b56900-a5ea-11eb-9598-a34ff049cb1e-Frame-10.png",
        },
        {
          src: "https://cdn.cosmicjs.com/18c71e80-59fe-11eb-9e0f-fd6e504bde0d-banner-new.png",
        },
        {
          src: "https://cdn.cosmicjs.com/368b6380-4b9f-11eb-a440-555e8f32186c-banner.png",
        },
        {
          src: "https://cdn.cosmicjs.com/80945780-4a95-11eb-9a9d-d5c3c7dfd7b3-banner-big.png",
        },
        {
          src: "https://cdn.cosmicjs.com/e326a970-2c36-11eb-80e6-1f21697c35d5-banner.jpg",
        },
        {
          src: "https://cdn.cosmicjs.com/ab4a10e0-1535-11eb-8475-61495c6b59c5-adminpro-banner.jpg",
        },
        {
          src: "https://cdn.cosmicjs.com/6c9ff770-f968-11eb-b4a3-718f0637ba8e-materio-carousel-banner.png",
        },
        {
          src: "https://cdn.cosmicjs.com/904f0f60-e8e4-11eb-9b29-139cf7d5891a-homebanner1.png",
        },
        {
          src: "https://cdn.cosmicjs.com/b9937d90-f9e5-11eb-b4a3-718f0637ba8e-Banner-MD---v2.0.png",
        },
      ],
    };
  },
};
</script>
    
<style>
</style>