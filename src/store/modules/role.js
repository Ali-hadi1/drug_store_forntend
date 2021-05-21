import ApiServices from '../Services/ApiServices'

export const state = {
  roles: null
}

export const mutations = {
  SET_ROLES_DATA (state, data) {
    state.roles = data
  }
}

export const actions = {
  getroles ({ commit }) {
    ApiServices.get('/roles').then(
      async response => {
        await commit('SET_ROLES_DATA', response.data)
      }
    )
  }
}
