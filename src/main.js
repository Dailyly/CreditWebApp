import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Toast } from 'vant'

import smartFetch from 'smartfetch'
import fetchConfig from './config/apiConfig'

Vue.use(Toast)
Vue.use(smartFetch, fetchConfig)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
