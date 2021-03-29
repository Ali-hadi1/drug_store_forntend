<template>
  <app>
    <template v-slot:content>
      <div class=" w-full mt-2 rounded flex gap-1">
        <div class="w-80 bg-gray-300 rounded p-2">
          <div class="w-full h-full bg-white flex justify-center flex-col py-2 rounded-t-lg">
            <div class="h-36 w-36 bg-green-400 rounded-full relative mx-auto border-8 border-green-200">
              <div class="h-full w-full flex justify-center items-center">
                 <!-- <span v-if="$route.params.id" class="text-9xl mb-4 text-gray-500"> {{ authUser ? authUser.name[0] : ''}} </span> -->
                 <span class="text-9xl mb-4 text-gray-100"> {{ authUser ? authUser.name[0] : ''}} </span>
              </div>
              <button
                class="absolute right-2 h-8 w-8 bottom-0 text-gray-700 rounded-full focus:outline-none"
              >
                <font-awesome-icon icon="camera"/>
              </button>
            </div>
            <div class="w-full flex flex-col my-2">
              <div class="flex justify-center text-xl font-serif font-semibold text-gray-500 capitalize">
                {{authUser ? authUser.name : ''}} {{authUser ? authUser.lastname : ''}}

              </div>
              <span class="text-sm text-gray-300 text-center">
                {{authUser ? authUser.email : ''}}
              </span>
            </div>
            <div class="w-full">
              <ul class="">
                <li class="py-2 px-3 text-sm text-gray-500 cursor-pointer border-l-4 border-red-400">
                  <font-awesome-icon icon="user"/>
                  Profile
                </li>
                <li class="py-2 px-3 text-sm text-gray-500 cursor-pointer">
                  <font-awesome-icon icon="edit"/>
                  Edit profile
                </li>
                <li class="py-2 px-3 text-sm text-gray-500 cursor-pointer">
                  <font-awesome-icon icon="calendar"/>
                  Recent Activite
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full bg-gray-300 rounded p-2 fit-content">
          <profile-info>
          </profile-info>
        </div>
      </div>
    </template>
  </app>
</template>

<script>
import App from '@/components/layouts/App.vue'
import { mapGetters } from 'vuex'
import ProfileInfo from './Profile_info.vue'
export default {
  components: {
    App,
    ProfileInfo
  },
  computed: {
    ...mapGetters(['authUser'])
  },
  created () {
    if (this.authUser === null) {
      this.$store.dispatch('userAuthenticated')
    }
  }
}
</script>

<style scoped>

</style>
