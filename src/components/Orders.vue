<template>
    <v-window>
      <v-window-item class="dark">
        <v-card class="my-2" dark>
          <v-card-title>
            Orders history
            <v-spacer></v-spacer>
            <v-btn depressed dark outlined text class="font-weight-bold">
              Refresh
            </v-btn>
          </v-card-title>
          <v-card-text> No orders yet </v-card-text>
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
  color: #edf0f2;
}
.theme--dark.v-btn.v-btn--outlined.v-btn--text {
  border-color: rgba(255, 255, 255, 0.62);
}
</style>