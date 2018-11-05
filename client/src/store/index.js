import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: localStorage.getItem('user'),
    isLoggedIn: !!localStorage.getItem('user')
  },
  getters: {
    // eslint-disable-next-line
    getUser: state => {
      return JSON.parse(state.user)
    }
  }
})

export default store
