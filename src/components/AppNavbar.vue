<template>
  <div class="sticky top-0 z-40">
    <div
      class="w-full h-12 px-6 bg-purple-500 flex items-center justify-between"
    >
      <div class="flex justify-between w-full items-center mr-3 h-full">
        <div class="inline-block sm:hidden items-center mr-4">
          <button
            class="hover:text-blue-500 text-white focus:outline-none h-8 w-8"
          >
            <font-awesome-icon icon="bars"/>
          </button>
        </div>
        <div class="hidden sm:block">
          <ul class="flex gap-1">
            <app-sidebar-link
              title="Home"
              routeName="Home"
              paddingClass="py-2"
              textHoverClass="hover:text-blue-400"
              fontWeight="font-semibold"
              activeClass="bg-purple-800"
            >
            </app-sidebar-link>
            <span v-if="loggedIn">
              <app-sidebar-link
                title="Dashboard"
                routeName="Dashboard"
                paddingClass="py-2"
                textHoverClass="hover:text-blue-400"
                fontWeight="font-semibold"
                activeClass="bg-purple-800"
              >
              </app-sidebar-link>
            </span>
            <app-sidebar-link
              title="About"
              routeName="About"
              paddingClass="py-2"
              textHoverClass="hover:text-blue-400"
              fontWeight="font-semibold"
              activeClass="bg-purple-800"
            >
            </app-sidebar-link>
          </ul>
        </div>

        <div class="relative text-gray-600 float-right">
          <input
            type="search"
            name="serch"
            placeholder="Search..."
            class="bg-purple-400 text-white h-8 w-full xl:w-72 px-5 rounded-lg text-sm focus:outline-none"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 text-gray-700 text-lg mr-2"
          >
            <font-awesome-icon icon="search" />
          </button>
        </div>
      </div>
      <div>
        <div v-if="loggedIn">
          <app-avatar> </app-avatar>
        </div>
        <div v-else>
          <ul class="flex">
            <app-sidebar-link
              icon="sign-in-alt"
              title="login"
              routeName="Login"
              paddingClass="py-2"
              textHoverClass="hover:text-blue-400"
              fontWeight="font-semibold"
              activeClass="text-white"
            >
            </app-sidebar-link>

            <app-sidebar-link
              icon="user-plus"
              title="register"
              routeName="Register"
              paddingClass="py-2"
              textHoverClass="hover:text-blue-400"
              fontWeight="font-semibold"
              activeClass="text-white"
            >
            </app-sidebar-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebarLink from './AppSidebarLink.vue'
import { mapGetters } from 'vuex'
import AppAvatar from './AppAvatar.vue'
export default {
  components: { AppSidebarLink, AppAvatar },
  name: 'Navbar',
  data () {
    return {
      dropDownOpen: false
    }
  },
  computed: {
    ...mapGetters(['loggedIn'])
  }
}
</script>

<style scoped>
</style>
