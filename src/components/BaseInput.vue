<template>
  <div class="pt-2">
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      class="px-2 py-1 rounded-sm focus:outline-none focus:border-purple-300 border border-gray-400"
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
    value: [String, Number],
    widthClass: {
      type: String
    }
  },
  data: function () {
    return {}
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
