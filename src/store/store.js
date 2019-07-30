import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import category from './modules/category'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  modules:{
    home,
    category,
    search
  },
  actions: {

  }
})
