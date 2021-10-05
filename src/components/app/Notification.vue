<template>
  <div>
    <v-menu
      transition="scroll-y-transition"
      offset-y
      :close-on-content-click="false"
      open-on-hover
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="white"
          class="ma-2"
          v-bind="attrs"
          v-on="on"
          text
          fab
          plain
        >
          <v-badge color="pink" dot>
            <v-icon fab>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>
      
        <v-responsive style="max-height: 320px" width="320">
          <v-list v-for="(item, i) in notifyItem" :key="i">
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1">{{
                  item.content
                }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-email</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-responsive>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          action: "15 min",
          headline: "Discount Code",
          title: "Admin",
        },
      ],
    };
  },
  methods: {
    // toggleNotify() {
    //   this.$store.dispatch("toggleNotification");
    // },
  },
  computed: {
    notifyItem() {
      return this.$store.state.profile.info.notification;
    },
    getToken() {
      return this.$store.state.auth.user.access_token;
    },
    // content() {
    //   let length = this.notifyItem.length;
    //   if (this.notifyItem != null) {
    //     return length;
    //   }
    //   return length;
    // },
  },
  mounted() {
    this.$store.dispatch("getProfile", this.getToken);
  },
};
</script>

<style>
</style>