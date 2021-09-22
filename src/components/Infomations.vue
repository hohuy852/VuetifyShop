<template>
  <v-window>
    <v-window-item>
      <v-card class="my-2" dark>
        <v-card-title>
          User Infomation
          <v-spacer></v-spacer>
          <v-btn depressed dark outlined text class="font-weight-bold" @click="refresh">
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

          <v-btn
            class="cyan font-weight-bold"
            @click="updateProfile(first, last, getUser.access_token)"
            :loading= "updateStatus"
          >
            Update
          </v-btn>
        </v-card-text>
      </v-card>
    </v-window-item>
     <v-snackbar v-model="snackBar" timeout="1500"> {{message}} </v-snackbar>
  </v-window>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      first: '',
      last: '',
      updateStatus: false,
      snackBar:false,
      message: ''
    };
  },
  name: "Info",
  computed: {
    ...mapGetters([])
    ,
    getUser() {
      return "user", JSON.parse(localStorage.getItem("user"));
    },
    firstName: {
      get(){
        return this.$store.state.auth.user.user.firstName
      },
      set(value){
        this.first = value
      }
    },
    lastName: {
      get(){
        return this.$store.state.auth.user.user.lastName
      },
      set(value){
        this.last = value
      }
    }
  },
  methods: {
    updateProfile(firstName, lastName, access_token) {
        this.updateStatus = true
       this.$store.dispatch("updateProfile", {firstName, lastName, access_token })
       .then(
         () =>{
           this.updateStatus = false
           this.message = "Update successful!"
           this.snackBar = true
         } ,
         (error) =>{
           console.log(error.response.data)
           this.updateStatus = false,
           this.message = "Update failed!",
           this.snackBar = true
         }
       )
    },
    refresh(){

    }
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