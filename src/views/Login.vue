<template>
  <v-container dark>
    <div class="text-center white--text">
      <h1>Vuetify Store Account</h1>
      <div class="text-h7 text-md-h5 mt-2 mb-4">
        Receive fantastic promotions with the store account and have access to your order history.
      </div>
    </div>
    <v-responsive class="mx-auto text-center" style="max-width: 500px">
      <v-card >
        <h2 class="py-4">Login</h2>
        <v-divider aria-orientation="horizontal"></v-divider>
        <v-form ref="form" class="pa-7">
          <v-text-field
            v-model="email"
            label="Email"
            required
            outlined
            
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            outlined
          ></v-text-field>
          <span v-if="USER_LOGIN(this.email, this.password)" style="color: red"
            >Invalid email or password</span
          >
          <v-btn class="primary mb-3" x-large block>Log in</v-btn>

          <router-link to="/" style="text-decoration: none"
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
export default {
  data() {
    return {
      password: "",
      email: "",
      checkbox: false,
      //text: '***',

      rules: {},
    };
  },
  methods: {
    ...mapMutations(["USER_LOGIN"]),
  },
};
</script>

<style>

</style>