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
            :loading="updateStatus"
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
            v-model="cPhonenumber"
            type="number"
          ></v-text-field>
          <v-row>
            <v-col cols="12" lg="6">
              <v-select
                v-model="cGender"
                :items="genders"
                label="Gender"
                outlined
              ></v-select>
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
                    v-model="cDate"
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
            @click="
              updateProfile(first, last, phoneNumber, gender, date, getToken)
            "
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
      gender: "",
      phoneNumber: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      genders: ["Male", "Female"],
    };
  },
  name: "Info",
  computed: {
    ...mapGetters([]),
    getToken() {
      return this.$store.state.auth.user.access_token;
    },
    firstName: {
      get() {
        return this.$store.state.profile.info.firstName;
      },
      set(value) {
        this.first = value;
      },
    },
    lastName: {
      get() {
        return this.$store.state.profile.info.lastName;
      },
      set(value) {
        this.last = value;
      },
    },
    cGender: {
      get() {
        return this.$store.state.profile.info.gender;
      },
      set(value) {
        this.gender = value;
      },
    },
    cPhonenumber: {
      get() {
        return this.$store.state.profile.info.phonenumber;
      },
      set(value) {
        this.phoneNumber = value;
      },
    },
    cDate: {
      get() {
        return this.$store.state.profile.info.DOB;
      },
      set(value) {
        this.date = value;
      },
    },
  },
  methods: {
    updateProfile(
      firstName,
      lastName,
      phoneNumber,
      gender,
      date,
      access_token
    ) {
      this.updateStatus = true;
      this.$store
        .dispatch("updateProfile", {
          firstName,
          lastName,
          phoneNumber,
          gender,
          date,
          access_token,
        })
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
    refresh() {
      this.updateStatus = true
      this.$store.dispatch("getProfile", this.getToken).then(
        () => {
          this.updateStatus = false;
          this.message = "Refreshed!";
          this.snackBar = true;
        },
        (error) => {
          console.log(error.response.data);
          (this.updateStatus = false),
            (this.message = "An error occur!"),
            (this.snackBar = true);
        }
      );
    },
  },
  mounted() {
    this.$store.dispatch("getProfile", this.getToken);
    // this.first = this.$store.state.auth.user.user.firstName;
    // this.last = this.$store.state.auth.user.user.lastName;
    // this.date = this.$store.state.auth.user.user.DOB;
    // this.gender = this.$store.state.auth.user.user.gender;
    // this.phoneNumber = this.date = this.$store.state.auth.user.user.phoneNumber;
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