
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import './mock/index'
import router from './router'
import store from './Vuex/index'
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
