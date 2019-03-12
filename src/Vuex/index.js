import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    data:null
  },
  getters: {

  },
  mutations: {
    getData (state) {
      axios.get('./wocao/shops').then(
        res => {
          if (res.data.code === 0) {
            console.log(res.data.data)
            state.data = res.data.data
          }
        }
      )
    }
  },
  actions: {
    asyncData (ctx) {
      ctx.commit('getData')
    }
  }
})
