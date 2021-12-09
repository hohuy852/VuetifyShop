<template>
  <v-window>
    <v-window-item>
      <v-card class="my-2" dark>
        <v-data-table disable-sort hide-default-footer :headers="headers" :items="wishlist.wishlist">
          <template v-slot:[`item.product`] ="{item}">
              <v-list-item>
                <v-avatar :src = "item.src">
                   <v-img  width="60" height="60"></v-img>
                </v-avatar>
                <v-list-item>
                  <v-list-item-title>A</v-list-item-title>
                </v-list-item>
              </v-list-item>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon  small class="mr-2" @click="deleteItem(item._id, getToken)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-window-item>
  </v-window>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      headers: [
        {
          text: "Product",
          value: "title",
          align: "left",
        },

        {
          text: "Action",
          value: "actions",
          align: "center",
        },
      ],
    };
  },
  computed:{
    getToken() {
        return ("user", JSON.parse(localStorage.getItem("user"))).access_token;   
    },
    wishlist(){
     return this.$store.getters.wishlist
    }
  },
  methods:{
    ...mapActions(['getWishlist']),
    deleteItem(idProduct, access_token){
       this.$store.dispatch('deleteWishlistItem', {idProduct, access_token})
       .then(
         () =>{
            this.getWishlist(this.getToken)
           //console.log('success')
         },
         (err) =>{
           console.log(err.response.data)
         }
       )
    }
  },
  mounted(){
    this.getWishlist(this.getToken)
  }
};
</script>

<style lang="sass" scoped>
.theme--dark.v-data-table 
    background-color: #000000
</style>