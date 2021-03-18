import ApiServices from '../Services/ApiServices'

export const state = {
  user: null
}

export const mutations = {
  SET_USER_DATA (state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    ApiServices.defaults.headers.common['Authorization'] = `Bearer ${
      userData.token
    }`
    console.log(ApiServices.defaults.headers.common['Authorization'] = `Bearer ${
      userData.token
    }`)
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
  }
}
