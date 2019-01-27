import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import axios  from 'axios'
import douban  from './config/douban.api.js'

Vue.config.productionTip = false
// Vue.prototype.$axios = axios
Vue.prototype.$douban = douban
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
