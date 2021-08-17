<template>
  <v-container style="margin-top: 50px" >
    <h1 class="text-h4 mt-4 d-flex white--text">
      Account
      <v-spacer></v-spacer>
      <v-btn depressed text outlined class="white--text">Log out</v-btn>
    </h1>
    <v-divider class="white my-2"></v-divider>

    <table class="text-left white--text">
      <tbody>
        <tr>
          Name:
          <td>Ho huy</td>
        </tr>
        <tr>
          Email:
          <td>Ho huy</td>
        </tr>
      </tbody>
    </table>
    <v-tabs class="mt-3" background-color="transparent" center-active dark v-model="activeTab"  > 
         <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" >
        {{ tab.name }}
      </v-tab>
        <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route"  class="primary">
          <router-view ></router-view>
        </v-tab-item>
    </v-tabs>
   
  </v-container>
</template>

<script>
export default {
  components: {
   
  },
  props: ["id"],
  data(){
    return{
      activeTab: `/user/${this.id}`,
      tabs:[
        {
          id:1,
          name: "Orders",
          route: `/profile/${this.id}`
        },
        {
          id:2,
          name: "Infomation",
          route: `/profile/${this.id}/Info`
        }
      ]
    }
  }
};
</script>

<style scoped>
</style>
