<template>
  <v-menu transition="scroll-y-transition" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="white" class="ma-2" v-bind="attrs" v-on="on" text fab plain>
        <v-icon fab>mdi-bell</v-icon>
      </v-btn>
    </template>
    <v-card class="mx-auto" max-width="300">
      <v-list two-line>
        <v-list-item-group
         
          active-class="pink--text"
          multiple
        >
          <template v-for="(item, index) in items">
            <v-list-item :key="item.title">
              <template v-slot:default="{ active }">
                <v-list-item-content>
                  <v-list-item-title style="color: red" v-text="item.title"></v-list-item-title>

                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.headline"
                  ></v-list-item-subtitle>

                  <v-list-item-subtitle
                    v-text="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text
                    v-text="item.action"
                  ></v-list-item-action-text>

                  <v-icon v-if="!active" color="grey lighten-1">
                    mdi-star-outline
                  </v-icon>

                  <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
       items: [
        {
          action: '15 min',
          headline: 'Discount Code',
          subtitle: `Thank you so much for supporting us!`,
          title: 'Admin',
        },
       ]
    };
  },
};
</script>

<style>
</style>