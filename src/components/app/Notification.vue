<template>
  <v-menu transition="scroll-y-transition" offset-y>
    <template v-slot:activator="{ on, attrs }">
       <v-badge>
        <v-btn
          color="white"
          class="ma-2"
          v-bind="attrs"
          v-on="on"
          text
          fab
          plain
        >
          <v-icon fab>mdi-bell</v-icon>
        </v-btn>
      </v-badge>
    </template>
    <v-list>
      <v-list-item v-for="(n, i) in list" :key="i" >
        <v-list-item-title>
          <span style="color: red">{{ n.problem }}</span> </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          problem: "Cart: lỗi số lượng !",
        },
        {
          problem: "Login chưa hoàn thành",
        },
        {
          problem: "Register chưa hoàn thành",
        },
         {
          problem: "Profile Page chưa hoàn thành",
        },
         {
          problem: "Preview Image chưa hoành thành",
        },
         {
          problem: "Lỗi categories",
        },
         {
          problem: "..................",
        },
        
      ],
    };
  },
};
</script>

<style>
</style>