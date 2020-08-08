import axios from 'axios'

export default {
  namespaced: true,
  state: {
    token: null,
    user: null
  },
  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    user(state) {
      return state.user
    }
  },
  mutations: {
    SET_TOKEN(state, data) {
      state.token = data
    },
    SET_USER(state, data) {
      state.user = data
    }
  },
  actions: {
    async signIn({ dispatch }, credentials) {
      let response = await axios.post('/login', credentials)
      return dispatch('attempt', response.data.token)
    },
    async attempt({ state, commit }, token) {
      if(token)
        commit('SET_TOKEN', token)

      if(!state.token)
        return

      try {
        let response = await axios.get('/me')
        commit('SET_USER', response.data.data)
      } catch(e) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      }
    },
    signOut({ commit }) {
      commit('SET_TOKEN', null)
      commit('SET_USER', null)
    },
  },
}