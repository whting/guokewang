import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import { Pagination } from 'element-ui'
// Vue.component(Pagination.name, Pagination)

Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
