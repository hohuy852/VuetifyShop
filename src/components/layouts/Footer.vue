<template>
  <v-footer :color="bg" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        color="white"
        text
        rounded
        class="my-2"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
      <v-col class="text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-github"],
    bg: "#05090c"
  }),
};
</script>