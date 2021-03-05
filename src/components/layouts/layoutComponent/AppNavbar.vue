<template>
    <div class="sticky top-0 w-full z-40 h-12 bg-gray-800 ">
        <div class="h-full w-full flex justify-between items-center border-b border-gray-200">
            <div class="w-auto h-full flex items-center pl-4">
                <span class="cursor-pointer text-gray-200" @click="sidebarState">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height='24' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </span>
                <span class="text-white uppercase font-bold pl-2">pharmacy</span>
            </div>

            <div class="hidden sm:block relative text-gray-200 sm:w-64 md:w-96">
                <input type="search" name="serch" placeholder="Search..." class="bg-gray-600 py-1 px-3 w-full  rounded-md border border-gray-500 text-sm focus:outline-none">
                <button type="submit" class="absolute right-0 top-2 mr-2 focus:outline-none">
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        </svg>
                </button>
            </div>

            <div class="w-auto h-full flex items-center pr-4">
                <div class="h-7 w-7 mr-2 relative mt-1 cursor-pointer">
                    <svg class="h-full w-full text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </div>
                <div class="h-8 w-8 rounded-full overflow-hidden bg-indigo-600">
                    <img v-bind:src="null" alt="Avatar" class="h-8 w-auto object-cover">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    sidebarState () {
      this.$store.commit('SET_SIDEBARSTATE')
      console.log('being run')
    }
  }
}
</script>

<style scoped>

</style>
