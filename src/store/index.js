import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    api: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
  },
  actions: {
		Get(context, url) {
			context.commit('GetApi', url)
		}
	},
	mutations: {
		GetApi(state, url) {
			return axios.get(state.api)
		}
	},
  modules: {
  }
})
