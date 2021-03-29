<template>
  <div class="w-full h-10 rounded-tl-lg rounded-tr-lg bg-gray-100 flex items-center pl-3 font-semibold text-sm">
      <span class="text-gray-400">
        Profile Info
      </span>
    </div>
    <div class="w-full bg-white p-3 text-gray-400 text-sm">
      <div class="w-full flex mb-2">
        <div class=" flex w-1/2">
          <span>Name: {{authUser ? authUser.name : ""}}</span>
        </div>
        <div class=" flex w-1/2">
          <span>Lastname: {{authUser ? authUser.lastname : ""}}</span>
        </div>
      </div>
      <div class="w-full flex mb-2">
        <div class=" flex w-1/2">
          <span>Email: {{authUser ? authUser.email : ""}}</span>
        </div>
        <div class=" flex w-1/2">
          <span>: {{authUser ? authUser.lastname : ""}}</span>
        </div>
      </div>
      <div class="w-full flex mb-2">
        <div class=" flex w-1/2">
          <span>Name: {{authUser ? authUser.name : ""}}</span>
        </div>
        <div class=" flex w-1/2">
          <span>Lastname: {{authUser ? authUser.lastname : ""}}</span>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['authUser'])
  }
}
</script>

<style scoped>

</style>
