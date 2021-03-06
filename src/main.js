import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { Tabbar, TabbarItem, NavBar  } from 'vant';
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
