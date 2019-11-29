import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

var BASE_URL='http://106.13.236.138:3008'
Vue.prototype.BASE_URL=BASE_URL

const app = new Vue({
	store,
    ...App
})
app.$mount()
