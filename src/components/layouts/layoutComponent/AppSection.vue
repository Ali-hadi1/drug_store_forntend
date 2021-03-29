<template>
    <div class="p-2"
        :class="{'md:ml-48':sideBarDisplay, 'w-full':!sideBarDisplay, 'w-auto':sideBarDisplay }"
    >
      <div class=" w-full rounded-b-md h-auto mt-1">
          <div class="flex justify-between items-center border-b border-gray-300">
              <span class="text-gray-500 items-center h-8 flex justify-between font-semibold " v-if="$route">{{$route.name}}</span>
            <div>
              <slot name="header"/>
            </div>
          </div>
          <slot name="content"/>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: mapState({
    sideBarDisplay: state => state.sidebarState
  })

}
</script>
<style scoped>
</style>
