<template>
  <v-window>
    <v-window-item>
      <v-card class="my-2" dark>
        <v-card-title>
          User Infomation
          <v-spacer></v-spacer>
          <v-btn
            depressed
            dark
            outlined
            text
            class="font-weight-bold"
            @click="refresh"
          >
            Refresh
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            outlined
            label="First Name"
            v-model="firstName"
          ></v-text-field>
          <v-text-field
            outlined
            label="Last Name"
            v-model="lastName"
          ></v-text-field>
          <v-text-field
            outlined
            label="Phone number"
            v-model="phoneNumber"
            type="number"
          ></v-text-field>
          <v-row>
            <v-col cols="12" lg="6">
              <v-select :items="genders" label="Gender" outlined></v-select>
            </v-col>
            <v-col cols="12" lg="6">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Birthday"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    outlined
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>

          <v-btn
            class="cyan font-weight-bold"
            @click="updateProfile(first, last, getUser.access_token)"
            :loading="updateStatus"
          >
            Update
          </v-btn>
        </v-card-text>
      </v-card>
    </v-window-item>
    <v-snackbar v-model="snackBar" timeout="1500"> {{ message }} </v-snackbar>
  </v-window>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      first: "",
      last: "",
      updateStatus: false,
      snackBar: false,
      message: "",
      picker: "",
      phoneNumber: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      genders:[
        'Man', 'Woman'
      ]
    };
  },
  name: "Info",
  computed: {
    ...mapGetters([]),
    getUser() {
      return "user", JSON.parse(localStorage.getItem("user"));
    },
    firstName: {
      get() {
        return this.$store.state.auth.user.user.firstName;
      },
      set(value) {
        this.first = value;
      },
    },
    lastName: {
      get() {
        return this.$store.state.auth.user.user.lastName;
      },
      set(value) {
        this.last = value;
      },
    },
  },
  methods: {
    updateProfile(firstName, lastName, access_token) {
      this.updateStatus = true;
      this.$store
        .dispatch("updateProfile", { firstName, lastName, access_token })
        .then(
          () => {
            this.updateStatus = false;
            this.message = "Update successful!";
            this.snackBar = true;
          },
          (error) => {
            console.log(error.response.data);
            (this.updateStatus = false),
              (this.message = "Update failed!"),
              (this.snackBar = true);
          }
        );
    },
    refresh() {},
  },
};
</script>

<style scoped>
.theme--dark.v-card {
  background-color: #05090c;
  color: #ffffff;
}
.theme--dark.v-btn.v-btn--outlined.v-btn--text {
  border-color: rgb(255 255 255 / 62%);
}
</style>