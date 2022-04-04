import Buefy from 'buefy'
import Vue from 'vue'
import VueMeta from 'vue-meta'

import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'
import './globals.scss'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
