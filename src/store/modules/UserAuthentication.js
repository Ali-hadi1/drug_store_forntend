import ApiServices from '../Services/ApiServices'

export const state = {

}

export const mutations = {
}

export const actions = {
  register (state, credentials) {
    return ApiServices
      .post('/register', credentials)
  }
}
