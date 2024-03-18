import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI,axios)
axios.defaults.baseURL='http://localhost:8081/'

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
