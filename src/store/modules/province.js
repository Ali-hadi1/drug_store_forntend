import ApiServices from '../Services/ApiServices'

export const state = {
  provinces: null
}

export const mutations = {
  SET_RPOVINCE_DATA (state, data) {
    state.provinces = data
  }
}

export const actions = {
  getProvinces ({ commit }) {
    ApiServices.get('/provinces').then(
      async response => {
        await commit('SET_RPOVINCE_DATA', response.data)
      }
    )
  }
}
