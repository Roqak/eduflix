import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      count: 10,
      loggedIn: false,
      user: '',
      token: ''
    },
    mutations: {
      increment (state) {
        state.count++
      },
      logIn(state,n){
        state.token = n
      }
    }
  })