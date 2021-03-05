<template>
  <li class="w-full my-1 box-border">
    <router-link
        v-bind="$attrs"
        :to="{name:routeName}"
        exact
        class="w-full block px-3 list-none hover:bg-link-hover rounded text-sm cursor-pointer text-gray-300"
        :class="[paddingClass,textHoverClass , fontWeight]"
        :active-class="activeClass"
    >
        {{title}}
    </router-link>
  </li>
</template>
<script>
export default {
  inheritAttrs: true,
  props: {
    title: {
      type: String,
      required: true
    },
    routeName: {
      type: String,
      required: true
    },
    paddingClass: {
      type: String,
      default: 'py-2'
    },
    textHoverClass: {
      type: String,
      default: ''
    },
    fontWeight: {
      type: String,
      default: 'font-bold'
    },
    activeClass: {
      type: String,
      default: 'bg-link-active'
    }
  },
  data: function () {
    return {

    }
  }

}
</script>
<style scoped>

</style>
