<template>
  <v-container dark>
    <div class="text-center white--text">
      <h1>Vuetify Store Account</h1>
      <div class="text-h7 text-md-h5 mt-2 mb-4">
        Receive fantastic promotions with the store account and have access to
        your order history.
      </div>
    </div>
    <v-responsive class="mx-auto text-center" style="max-width: 500px">
      <v-card>
        <h2 class="py-4">Login</h2>
        <v-divider aria-orientation="horizontal"></v-divider>
        <v-form ref="form" class="pa-7" type="submit">
          <v-text-field
            v-model="user.email"
            label="Email"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            label="Password"
            outlined
            type="password"
          ></v-text-field>
          <div v-html="message" style="color:red"></div>
          <v-btn class="primary mb-3" x-large block @click="handleLogin(user)"  :loading="isLoading"
            >Log in</v-btn
          >

          <router-link
            to="/"
            style="text-decoration: none"
            class="font-weight-bold"
            >Forgorten Password?</router-link
          >
          <v-divider aria-orientation="horizontal" class="ma-5"></v-divider>
          <v-btn to="/register" class="success" x-large
            >Create new account</v-btn
          >
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
//import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },

      checkbox: false,
      //text: '***',
      show: false,
      rules: {},
      isLoading: false,
      message: "",
    };
  },
  computed: {
    //...mapState([""]),
  },
  methods: {
    ...mapMutations([""]),
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    handleLogin(user) {
      this.isLoading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          console.log(error.response)
          this.message = error.response.data.msg
            this.isLoading = false;
        }
      );
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
};
</script>

<style>
</style>