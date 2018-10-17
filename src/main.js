import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import smartFetch from 'smartfetch'
import fetchConfig from './config/apiConfig'

Vue.use(smartFetch, fetchConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
