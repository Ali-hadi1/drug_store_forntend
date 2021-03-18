import { createStore } from 'vuex'
import * as UserAuth from '@/store/modules/UserAuthentication'

export default createStore({
  modules: {
    UserAuth

  },
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

  }
})
