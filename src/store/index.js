import { createStore } from 'vuex'
import * as UserAuth from '@/store/modules/UserAuthentication'
import * as province from '@/store/modules/province'
import * as User from '@/store/modules/User'

export default createStore({
  modules: {
    UserAuth,
    province,
    User
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
