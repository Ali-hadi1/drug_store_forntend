<template>
  <div class="relative ">
    <div
      class="h-5 w-5 rounded-full overflow-hidden bg-indigo-600"
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

    <div v-if="isVisible" class="absolute -right-1 bg-gray-100 w-44 rounded py-2 mt-2">
      <ul class="w-full">
        <li class="dropdown-items">
          <font-awesome-icon icon="user-circle"/>
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleVisibility () {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style scoped>

</style>
