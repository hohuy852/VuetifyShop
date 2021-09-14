<template>
  <v-container style="margin-top: 50px">
    <div class="text-h4 mt-4 d-flex white--text">
      Account
      <v-spacer></v-spacer>
      <v-btn
        depressed
        text
        outlined
        class="white--text font-weight-bold"
        @click="logOut"
        >Log out</v-btn
      >
    </div>
    <v-divider class="white my-2"></v-divider>

    <table class="text-left white--text">
      <tbody>
        <tr>
          Name:
          <td class="px-2">
            {{ getUser.user.firstName + " " + getUser.user.lastName }}
          </td>
        </tr>
        <tr>
          Email:
          <td class="px-2">{{ getUser.user.email }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <v-tabs
      class="mt-3"
      background-color="transparent"
      center-active
      dark
      v-model="activeTab"
    >
      <v-tab v-for="tab in tabs" :key="tab.id" :id="tab.id" :to="tab.route">{{
        tab.name
      }}</v-tab>
      <v-tabs-items v-model="activeTab" @change="updateRouter($event)">
        <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route">
     
          <router-view
            v-if="tab.route === $route.path && tab.route === activeTab"
          />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs> -->
    <v-tabs  class="mt-3"
      background-color="transparent"
      center-active
      dark
      >
      <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.name }}
      </v-tab>

      <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route" style="background:#111B27">
        <router-view></router-view>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
//import Orders from "../components/Orders.vue"
export default {
  name: 'Account',
  components: {
    //  Orders
  },
  data() {
    return {
      users: {
        firstName: "Ho",
        lastName: "Huy",
        email: "hohuy@gmail.com",
      },
      // slug: this.$route.params.slug
      tabs: [
        {
          id: 1,
          name: "orders",
          route: `/profile/`,
        },
        {
          id: 2,
          name: "infomation",
          route: `/profile/infomation`,
        },
      ],
      tt:{
        
      }
    };
  },
  methods: {
    updateRouter(tab) {
      this.$router.push(tab);
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
  computed: {
    getUser() {
      return "user", JSON.parse(localStorage.getItem("user"));
    },
  },
};
</script>

<style scoped>
.theme--light.v-btn.v-btn--outlined.v-btn--text {
  border-color: rgb(255 255 255 / 62%);
}
.theme--light.v-tabs-items {
  background-color: transparent;
}
tab {
  color: white;
}
</style>
