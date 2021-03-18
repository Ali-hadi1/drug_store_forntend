<template>
  <div class="relative ">
    <div class="h-5 w-5 rounded-full overflow-hidden bg-indigo-600">
      <img v-bind:src="null" alt="Avatar" class="h-8 w-auto object-cover"/>
    </div>

    <div class="absolute -right-1 bg-gray-100 w-44 rounded py-2 mt-2">
      <ul class="w-full">
        <li class="dropdown-items">
          <font-awesome-icon icon="home"/>
        </li>
        <li class="dropdown-items">
          hadi
        </li>
        <li class="py-1 pl-4 text-sm">
          hadi
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
