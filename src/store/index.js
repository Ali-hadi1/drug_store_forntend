import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarState: true,
    dropDownState: false
  },
  mutations: {
    SET_SIDEBARSTATE (state) {
      state.sidebarState = !state.sidebarState
    },
    SET_DROPDOWNLINKSTATE (state) {
      state.dropDownState = !state.dropDownState
    }
  },
  actions: {
  },
  getters: {

  },
  modules: {
  }
})
