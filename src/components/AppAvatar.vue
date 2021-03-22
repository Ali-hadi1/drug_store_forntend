<template>
  <div class="relative ">
    <div
      class="h-6 w-6 rounded-full overflow-hidden bg-indigo-600"
      @click="toggleVisibility"
      @keydown.exact.space.prevent="toggleVisibility"
    >
    <a href="#">
      <img
      v-bind:src="null"
      alt="Avatar"
      class="h-8 w-auto object-cover"
      />
    </a>
    </div>

    <div v-if="isVisible" class="absolute -right-1 top-8 bg-gray-100 w-44 rounded">
      <ul class="w-full">
        <li class="dropdown-items">
          <app-sidebar-link
            icon="user-circle"
            title="Profile"
            routeName="Profile"
            fontWeight="font-thin"
            textHoverClass="hover:text-blue-400"
            activeClass="text-gray-700"
            textColor="text-gray-700"
          >

          </app-sidebar-link>
        </li>
        <li class="dropdown-items">
          <button
            @click.prevent="logout"
            class="focus:outline-none w-full h-full flex gap-1 items-center justify-start px-3 py-2 font-thin text-gray-700 hover:text-blue-400"
          >
            <font-awesome-icon icon="sign-out-alt"/>
            logout
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppSidebarLink from './AppSidebarLink.vue'
export default {
  components: { AppSidebarLink },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleVisibility () {
      this.isVisible = !this.isVisible
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>

</style>
