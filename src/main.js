import Vue from 'vue'
import store from './store'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import './sass/main.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
	store,
  render: h => h(App),
}).$mount('#assessment-component')
