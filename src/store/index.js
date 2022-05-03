import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    test: 'test data'
  },
  mutations: {
		TEST(state, status) {      //status -> payload （載荷）
			state.test = status;
		}
	},
  actions: {
		updateTest(context, status) {
			context.commit('TEST', status)     // mutation 中定義方法
		}
	},
  modules: {
  }
})
