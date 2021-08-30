<template>
  <v-window>
    <v-window-item>
      <v-card class="my-2" dark>
        <v-card-title>
          User Infomation
          <v-spacer></v-spacer>
          <v-btn depressed dark outlined text class="font-weight-bold">
            Refresh
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field outlined label="First Name"></v-text-field>
          <v-text-field outlined label="Last Name"></v-text-field>
          
          <v-btn class="cyan font-weight-bold"> Update </v-btn>
        </v-card-text>
      </v-card>
    </v-window-item>
  </v-window>
</template>

<script>
export default {};
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