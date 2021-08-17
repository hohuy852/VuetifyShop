<template>
  <v-container style="margin-top: 50px">
    <div class="text-h4 mt-4 d-flex white--text ">
      Account
      <v-spacer></v-spacer>
      <v-btn depressed text outlined class="white--text font-weight-bold" to="/">Log out</v-btn>
    </div>
    <v-divider class="white my-2"></v-divider>

    <table class="text-left white--text">
      <tbody>
        <tr>
          Name: 
          <td class="px-2"> ho huy</td>
        </tr>
        <tr>
          Email: 
          <td class="px-2"> hohuy@gmail.com</td>
        </tr>
      </tbody>
    </table>
    <v-tabs
      class="mt-3"
      background-color="transparent"
      center-active
      dark
      v-model="activeTab"
    >
      <v-tab v-for="tab in tabs" :key="tab.id" :id="tab.id" :to="tab.route">{{tab.name}}</v-tab>
      <v-tabs-items v-model="activeTab" @change="updateRouter($event)">
        <v-tab-item
          v-for="tab of tabs"
          :key="tab.id"
          :value="tab.route"
        >
         <!-- <Orders/> -->
         <router-view v-if="tab.route === $route.path && tab.route === activeTab" />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-container>
</template>

<script>
//import Orders from "../components/Orders.vue"
export default {
  components: {
  //  Orders
  },
  props: {
   
  },
  data() {
    return {
      activeTab: "",
      tab: String,
      // slug: this.$route.params.slug
      tabs: [
        {
          id: 1,
          name: "Orders",
          route: "/profile/orders",
        },
        {
          id: 2,
          name: "Infomation",
          route: "/profile/info",
        },
      ],
    };
  },
  methods: {
    updateRouter(tab) {
      this.$router.push(tab);
    },
  },
};
</script>

<style scoped>
.theme--light.v-btn.v-btn--outlined.v-btn--text {
  border-color: rgb(255 255 255 / 62%);
}
.theme--light.v-tabs-items {
    background-color:transparent;
}
.v-application .text-h3, .v-application .text-h4 {
    font-weight: 400;
    font-family: Quicksand,sans-serif!important;
}
</style>
