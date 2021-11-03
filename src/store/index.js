import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    // 状态管理
    state: {
        language:{
            language:''
        }
      },
      getters: {
        language:state =>{
            return state.language
        }
      },
      mutations: {
        changement (state,payload) {
          // 变更状态
          state.language.language = payload
        }
      }
})