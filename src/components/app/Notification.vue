<template>
  <div>
    <v-menu
      transition="scroll-y-transition"
      offset-y
      :close-on-content-click="false"
      open-on-click
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
          <v-badge color="pink" dot >
            <v-icon fab>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-card width="320" dark height="300">
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in notifyItem" :key="i">
            <v-expansion-panel-header disable-icon-rotate>
              <template v-slot:actions>
                <v-icon> mdi-email </v-icon>
              </template>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1">{{
                  item.content
                }}</v-list-item-title>
              </v-list-item-content>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
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
  },
  mounted() {
    this.$store.dispatch("getProfile", this.getToken);
  },
};
</script>

<style>
</style>