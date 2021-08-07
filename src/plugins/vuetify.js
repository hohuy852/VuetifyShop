import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Carousel3d from 'vue-carousel-3d';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify, Carousel3d);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            secondary: colors.grey.darken1,
            accent: colors.shades.black,
            error: colors.red.accent3,
            background: colors.indigo.lighten5, // Not automatically applied
           
          },
          dark: {
          
        },
       
        
      },
    }
});
