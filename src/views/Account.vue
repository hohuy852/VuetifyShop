<template>
  <v-container style="margin-top: 50px">
    <h1 class="text-h4 mt-4 d-flex white--text">
      Account
      <v-spacer></v-spacer>
      <v-btn depressed text outlined class="white--text">Log out</v-btn>
    </h1>
    <v-divider class="white my-2"></v-divider>

    <table class="text-left white--text">
      <tbody>
        <tr>
          Name:
          <td>Ho huy</td>
        </tr>
        <tr>
          Email:
          <td>Ho huy</td>
        </tr>
      </tbody>
    </table>
    <v-tabs class="mt-3" background-color="transparent" center-active dark>
      <v-tab v-for="tab in tabs" :key="tab.slug">{{tab.name}}</v-tab>
      <v-tab-item>
        <router-view :key="$route.path"></router-view>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  components: {
    
  },
  props: {
   slug: { type: String, require: true },
  },
  data() {
    return {
      // slug: this.$route.params.slug
      tabs:[
        {
          name: 'Order',
          slug: 'orders',
        },
         {
          name: 'Info',
          slug: 'info',
        }
      ]
    };
  },
};
</script>

<style scoped>
.theme--light.v-btn.v-btn--outlined.v-btn--text {
  border-color: rgb(255 255 255 / 62%);
}
</style>
