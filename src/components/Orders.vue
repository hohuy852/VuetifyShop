<template>
      <v-window  >
          <v-window-item class="dark"  >
              <v-card class="my-2" dark > 
                  <v-card-title>
                      Orders history
                      <v-spacer></v-spacer>
                      <v-btn depressed dark outlined text>
                          Refresh
                      </v-btn>
                  </v-card-title>
                  <v-card-text>
                      No orders yet
                  </v-card-text>
              </v-card>
          </v-window-item>
      </v-window>
</template>
<script>
export default {

}
</script>

<style scoped>
.theme--dark.v-card {
    background-color: #05090c;
    color: #edf0f2;
}
.dark{
     
}

</style>