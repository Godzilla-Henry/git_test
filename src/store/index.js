import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    api: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
  },
  mutations: {
	},
  actions: {
		Get ({ commit }) {
      return new axios.get(state.api)
    }
	},
  modules: {
  }
})
