import Buefy from 'buefy'
import Vue from 'vue'
import VueKatex from 'vue-katex'
import VueMeta from 'vue-meta'

import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'
import './globals.scss'
import 'katex/dist/katex.min.css'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueKatex)
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
