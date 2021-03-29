<template>
  <li class="list-none w-full my-1 box-border">
    <router-link
        v-bind="$attrs"
        :to="{name:routeName}"
        exact
        class="w-full block px-3 hover:bg-link-hover rounded text-sm cursor-pointer"
        :class="[paddingClass,textHoverClass , fontWeight, textColor, bgColor]"
        :active-class="activeClass"
    >
      <span class="flex items-center gap-1">
        <font-awesome-icon v-if="icon.length > 1" :icon="icon"/>
        <span
          v-if="title.length > 1" :class="[iconAndTitlePadding]"
          :style="{fontSize:titleTextSize}"
        >
          {{title}}
        </span>
      </span>
    </router-link>
  </li>
</template>
<script>
export default {
  inheritAttrs: true,
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
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
    },
    textColor: {
      type: String,
      default: 'text-gray-300'
    },
    bgColor: {
      type: String,
      default: ''
    },
    iconAndTitlePadding: {
      type: String,
      default: ''
    },
    titleTextSize: {
      type: String,
      default: ''
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
