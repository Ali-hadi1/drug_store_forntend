import ApiServices from '../Services/ApiServices'

export const state = {
  usersList: null
}

export const mutations = {
  SET_USERS_LIST_DATA (state, data) {
    state.usersList = data
    console.log(data)
  }
}

export const actions = {
  getUserList ({ commit }) {
    ApiServices.get('/users').then(
      async response => {
        await this.commit('SET_USERS_LIST_DATA', response.data)
      })
  }
}
