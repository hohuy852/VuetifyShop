<template>
  <div>
    <v-menu
      transition="scroll-y-transition"
      offset-y
      :close-on-content-click="false"
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
          <v-badge color="pink" overlap >
            <v-icon fab>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-card class="mx-auto" width="350" max-width="400">
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in notifyItem" :key="i">
            <v-expansion-panel-header disable-icon-rotate>
              <v-list two-line>
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title" dense>
                    <template>
                      <v-list-item-content>
                        <v-list-item-title
                          style="color: red"
                          v-text="item.title"
                        ></v-list-item-title>

                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.headline"
                        ></v-list-item-subtitle>

                        <v-list-item-subtitle
                          v-text="item.subtitle"
                        ></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text
                          v-text="item.action"
                        ></v-list-item-action-text>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index < items.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list>
              <!-- <span style="color: red">Admin</span>  -->
              <template v-slot:actions>
                <v-icon color="orange"> mdi-star </v-icon>
              </template></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              {{ item.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- <v-list two-line>
          <v-list-item-group  multiple>
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title"  @click="toggleNotify">
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title
                      style="color: red"
                      v-text="item.title"
                    ></v-list-item-title>

                    <v-list-item-subtitle
                      class="text--primary"
                      v-text="item.headline"
                    ></v-list-item-subtitle>

                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text
                      v-text="item.action"
                    ></v-list-item-action-text>
                    <v-icon v-if="!active" color="grey lighten-1">
                      mdi-star-outline
                    </v-icon>

                    <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list> -->
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