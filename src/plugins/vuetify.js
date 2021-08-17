import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Carousel3d from 'vue-carousel-3d';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify, Carousel3d);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '111b27',
        secondary: '#05090c',
        accent: colors.shades.black,
        error: colors.red.accent3,
         
      },
      dark: {
        primary: '111b27',
      },
    },
  },
});
