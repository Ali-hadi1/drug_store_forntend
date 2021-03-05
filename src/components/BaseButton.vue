<template>
  <div class="mt-2">
    <button
      :type="type"
      :class="[buttonClass, buttonFloat]"
      class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
    >
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      defualt: 'submit'
    },
    buttonClass: {
      type: String
    },
    buttonFloat: {
      type: String,
      defualt: 'float-left'
    }
  }
}
</script>
