<template>
  <v-menu transition="scroll-y-transition" offset-y>
    <template v-slot:activator="{ on, attrs }">
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
          problem: "Order",
        },
         {
          problem: "Preview",
        },
         {
          problem: "Discount",
        },
         {
          problem: "Description",
        },
        
      ],
    };
  },
};
</script>

<style>
</style>