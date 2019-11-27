import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

var BASE_URL='http://localhost:3008'
Vue.prototype.BASE_URL=BASE_URL

const app = new Vue({
    ...App
})
app.$mount()
