import ApiServices from '../Services/ApiServices'

export const state = {
  user: null,
  userAuth: null
}

export const mutations = {
  SET_USER_DATA (state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    ApiServices.defaults.headers.common['Authorization'] = `Bearer ${
      userData.token
    }`
  },
  SET_USER_AUTH (state, data) {
    state.userAuth = data
  },
  CLEAR_USER_DATA () {
    // (state)
    // state.user = null
    localStorage.removeItem('user')
    // ApiServices.defaults.headers.common['Authorization'] = null
    location.reload()
  }
}

export const actions = {
  register (state, credentials) {
    return ApiServices
      .post('/register', credentials)
  },
  login ({ commit }, credentials) {
    return ApiServices
      .post('/login', credentials).then(
        ({ data }) => {
          commit('SET_USER_DATA', data)
        }
      )
  },
  logout ({ commit }) {
    commit('CLEAR_USER_DATA')
  },
  userAuthenticated () {
    ApiServices.get('/userAuth').then(
      (response) => {
        this.commit('SET_USER_AUTH', response.data)
      }
    )
  }
}
