<template>
  <div class="pt-2">
    <label
      v-if="label"
      :class="[labelStyle]"
    >{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue' ,$event.target.value)"
      v-bind="$attrs"
      class="px-2 py-1 text-xs rounded-sm focus:outline-none focus:border-purple-300 border border-gray-400"
      :class="[widthClass]"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      defualt: ''
    },
    type: {
      type: String,
      defualt: 'text'
    },
    modelValue: {
      type: [String, Number],
      defualt: ''
    },
    widthClass: {
      type: String
    },
    labelStyle: {
      type: String,
      defualt: ''
    }
  },
  data: function () {
    return {}
  }
}
</script>
