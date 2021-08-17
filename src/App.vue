<template>
  <div id="app">
    <v-app class="myFont">
       <Navigation/>
      <v-main class="primary">
        <router-view :key="$route.path" />
      </v-main>
        <Footer/>
    </v-app>

  </div>
</template>

<script>
import Navigation from "./components/layouts/Navigation.vue"
import Footer from "./components/layouts/Footer.vue"

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
.myFont{
  font-family: 'Quicksand', sans-serif;
}


</style>