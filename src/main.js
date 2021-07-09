// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './../node_modules/vue-select/dist/vue-select.css';
import './css/bootstrap.min.css'


import VueCarousel from '@chenfengyuan/vue-carousel';
Vue.component(VueCarousel.name, VueCarousel);



import './css/style.css'



import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

Vue.component('pageHeader', {
  data: () => {
    return {
      title: 'header'
    }
  },
  template: '<header class="header">{{title}}</header>'
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})