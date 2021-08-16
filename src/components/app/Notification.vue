<template>
  <v-menu transition="scroll-y-transition" offset-y>
    <template v-slot:activator="{ on, attrs }">
       <v-badge ri content="4">
        <v-btn
          color="secondary"
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
        
      ],
    };
  },
};
</script>

<style>
</style>