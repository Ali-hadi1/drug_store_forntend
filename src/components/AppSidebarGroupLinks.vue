<template>
    <ul
        class="my-1 px-3 py-2 list-none flex flex-col  justify-between items-center hover:bg-link-hover rounded cursor-pointer text-white"
        :class="{'bg-link-active':dropDownState}"
    >
        <li class="w-full flex justify-between items-center text-sm font-bold text-gray-300" @click="dropDownLinks">
            {{title}}
            <span v-if="dropDownState">
              <font-awesome-icon icon="caret-down"/>
            </span>
            <span v-else>
              <font-awesome-icon icon="caret-right"/>
            </span>
        </li>
        <ul class="w-full" v-if="dropDownState">
            <slot name="links"></slot>
        </ul>
    </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    dropDownLinks () {
      this.$store.commit('SET_DROPDOWNLINKSTATE')
    }
  },
  computed: mapState({
    dropDownState: state => state.dropDownState
  })
}
</script>
<style scoped>

</style>
