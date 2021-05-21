<template>
  <div>
    <label
      v-if="label"
      :class="[labelStyle]"
    >{{ label }}</label>
    <select
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      class="px-2 py-1 text-xs rounded-sm focus:outline-none focus:border-purple-300 border border-gray-400"
      :class="[widthClass]"
    >
      <option
        v-for="option in options"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option[selectionCol] }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: [Array, Object],
      required: true
    },
    label: {
      type: String,
      defualt: ''
    },
    modelValue: {
      type: [String, Number],
      defualt: ''
    },
    widthClass: {
      type: String
    },
    selectionCol: {
      type: String,
      required: true
    },
    labelStyle: {
      type: String,
      defualt: ''
    }
  }
}
</script>

<style scoped>

</style>
