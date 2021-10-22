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
        <h2 class="py-4">Forgot Password</h2>
        <v-divider aria-orientation="horizontal"></v-divider>
        <v-form ref="form" class="pa-7" type="submit">
          <v-text-field
            v-model="email"
            label="Your account email"
            required
            outlined
          ></v-text-field>
          <div v-if="sendSuccess" style="color: #3dfc03">Please check your email inbox</div>
          <v-btn class="primary mb-3" x-large block @click="sendRequest"
            >Send Reset Password</v-btn 
          >
          <v-divider aria-orientation="horizontal" class="ma-5"></v-divider>
          <router-link
            to="/login"
            style="text-decoration: none"
            class="font-weight-bold"
          >
            Back to login
          </router-link>
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
//import { mapState } from 'vuex';
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    sendRequest() {
      this.$store.dispatch("sendRequest", this.email).then(
        () =>{

        },
        (err) =>{
          console.log(err.response.data)
        }

      )
    },
  },
  computed:{
     sendSuccess(){
         return this.$store.state.resetPassword.sendSuccess
     }
  }
};
</script>

<style>
</style>