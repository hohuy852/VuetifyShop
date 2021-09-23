<template>
  <v-window>
    <v-window-item>
      <v-card class="my-2" dark>
        <v-card-title> Change Password </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              outlined
              label="New password"
              v-model="password"
              type="password"
              :rules="[
                passwordRules.required,
                passwordRules.min,
                passwordRules.max,
              ]"
            ></v-text-field>
            <v-text-field
              outlined
              label="Confirm new password"
              v-model="confirm"
              type="password"
              :rules="[
                passwordRules.required,
                passwordRules.min,
                passwordRules.max,
                passwordConfirmationRule,
              ]"
            ></v-text-field>
          </v-form>

          <v-btn
            class="cyan font-weight-bold"
            @click="
              sendPassword(confirm, access_token);
              validate;
            "
            :disabled="!valid"
            :loading="loading"
          >
            Change
          </v-btn>
        </v-card-text>
      </v-card>
    </v-window-item>
    <v-snackbar v-model="snackBar" timeout="1500"> {{ message }} </v-snackbar>
  </v-window>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      confirm: "",
      message: "",
      snackBar: false,
      valid: true,
      loading: false,
      passwordRules: {
        required: (v) => !!v || "Required",
        max: (v) =>
          (v && v.length <= 16) || "Password must be less than 16 characters",
        min: (v) => (v && v.length) >= 6 || "Password at least 6 characters",
      },
    };
  },
  computed: {
    passwordConfirmationRule() {
      return () => this.password === this.confirm || "Password must match";
    },
    access_token() {
      return this.$store.state.auth.user.access_token;
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    sendPassword(confirm, access_token) {
      this.loading = true;
      this.$store.dispatch("changePassword", { confirm, access_token }).then(
        () => {
          this.loading = false;
          this.message = "Password change succesful!"
          this.snackBar = true
        },
        (err) => {
          (this.loading = false), console.log(err.response.data);
          this.message = "Password change failed"
          this.snackBar = true
        }
      );
    },
  },
};
</script>

<style>
.theme--dark.v-card {
  background-color: #05090c;
  color: #ffffff;
}
.theme--dark.v-btn.v-btn--outlined.v-btn--text {
  border-color: rgb(255 255 255 / 62%);
}
</style>