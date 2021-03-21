<template>
    <app>
      <template v-slot:content>
        <div slot:content class="h-screen w-full bg-gray-200 my-2 p-2 rounded">
          <div class="grid md:grid-cols-4  grid-cols-2 h-24 w-full md:gap-1 sm:gap-x-8 sm:gap-y-1 gap-1">
            <div class="gird-span-1 h-full w-full bg-white rounded">
              <h4 class="flex justify-center text-lg text-gray-300 font-semibold">new Users</h4>
            </div>
            <div class="gird-span-1 h-full w-full bg-white rounded">

            </div>
            <div class="gird-span-1 h-full w-full bg-white rounded">

            </div>
            <div class="gird-span-1 h-full w-full bg-white rounded">

            </div>
          </div>
          <div>
              <h1>other content</h1>
          </div>
        </div>
      </template>
    </app>
</template>
<script>
import App from '../components/layouts/App.vue'
export default {
  components: { App },
  mounted () {
    this.$store.dispatch('userAuthenticated')
  }
}
</script>
