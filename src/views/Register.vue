<template>
  <v-container>
    <div class="text-center white--text">
      <h1>Create Vuetify Store Account</h1>
      <div class="text-h7 text-md-h5 mt-2 mb-4">
        Receive fantastic promotions with the store account and have access to
        your order history.
      </div>
    </div>
    <v-responsive class="mx-auto text-center" style="max-width: 500px">
      <v-card>
        <h2 class="py-4">Create Account</h2>
        <v-divider aria-orientation="horizontal"></v-divider>
        <v-form ref="form" class="pa-7" v-model="valid" lazy-validation>
          <v-text-field
            :rules="[rules.required]"
            v-model="user.firstName"
            label="First Name"
            outlined
          ></v-text-field>
          <v-text-field
            :rules="[rules.required]"
            v-model="user.lastName"
            label="Last Name"
            outlined
          ></v-text-field>
          <v-text-field
            :rules="emailRules"
            v-model="user.email"
            label="Email"
            outlined
          ></v-text-field>
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="user.password"
            :rules="[rules.required, rules.min, rules.max]"
            label="Password"
            :type="show ? 'text' : 'password'"
            outlined
            @click:append="show = !show"
          ></v-text-field>

          <v-btn
          :disabled="!valid"
            class="success"
            x-large
            block
            @click="
              handleRegister(user);
            "
            :loading="loading"
            >Register</v-btn
          >
          <div v-html="message" style="color: #f542a1" class="py-2"></div>
          <!-- <v-checkbox v-model="checkbox"
            ><template v-slot:label>
              <div class="black--text font-weight-bold">I agree</div>
            </template></v-checkbox
          > -->
          <v-divider aria-orientation="horizontal" class="mb-5"></v-divider>
          <router-link
            to="/login"
            style="text-decoration: none"
            class="font-weight-bold"
            >Already have an account? Click here.</router-link
          >
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      valid: true,
      //text: '***',
      checkbox: false,
      show: false,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      rules: {
        required: (value) => !!value || "Required.",
        max: (v) =>(v && v.length <= 16) || "Password must be less than 16 characters",
        min: (v) => (v && v.length) >= 6 || "Password at least 6 characters",
      },
      message: "",
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["ADD_USER"]),
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.msg;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message = error.response.data.msg;
          //   error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
    validate() {
      this.$refs.form.validate();
    },
  },
  computed: {},
};
</script>

<style>
</style>