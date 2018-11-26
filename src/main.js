import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

import VueAutoscroll from '../lib/index'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueAutoscroll)

new Vue({
  render: h => h(App),
}).$mount('#app')
