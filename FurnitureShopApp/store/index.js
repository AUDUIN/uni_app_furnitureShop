import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		cartd:[],
		addressData:[],
		userinfo:{}
	},
    mutations: {
		addmut(state,obj){
			var bool = true;
			state.cartd.forEach((val)=>{
				if(val._id==obj._id){
					val.num++
					bool=false
				}
			})
			if(bool){
				Vue.set(obj,'num',1)
				state.cartd.push(obj)
			}
			
		},
		addressAddMut(state,obj){
			state.addressData[0]=obj
		},
		usermut(state,obj){
			state.userinfo.username=obj.username
		}
	},
    actions: {}
})
export default store