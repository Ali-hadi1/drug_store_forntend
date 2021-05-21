<template>
  <div class="max-w-4xl flex flex-col rounded mx-auto">
    <div class="w-full flex justify-center">
      <span class="text-xl text-gray-400 font-bold">Register User</span>
    </div>
    <div class="w-full flex flex-row gap-2">
      <div class="w-full sm:w-1/2 items-center">
        <base-input
          label="Name"
          tabindex="1"
          widthClass="w-full"
          placeholder="Enter your name"
          v-model:modelValue="form.name"
          autocomplete="name"
          labelStyle="text-gray-400 text-sm"
          autofocus
        >
        </base-input>
      </div>
      <div class="w-full sm:w-1/2 items-center">
        <base-input
          label="Lastname"
          tabindex="1"
          widthClass="w-full"
          placeholder="Enter your lastname"
          v-model:modelValue="form.lastname"
          labelStyle="text-gray-400 text-sm"
          aria-autocomplete="lastname"
        >
        </base-input>
      </div>
    </div>
    <div class="w-full flex flex-row gap-2">
      <div class="w-full sm:w-1/2 items-center">
        <base-input
          label="Email"
          tabindex="1"
          widthClass="w-full"
          placeholder="Enter your email"
          v-model:modelValue="form.email"
          autocomplete="email"
          labelStyle="text-gray-400 text-sm"
        >
        </base-input>
      </div>
      <div class="w-full sm:w-1/2 items-center">
        <base-input
          label="Phone"
          tabindex="1"
          widthClass="w-full"
          placeholder="Enter your phone"
          v-model:modelValue="form.phone"
          labelStyle="text-gray-400 text-sm"
          aria-autocomplete="phone"
        >
        </base-input>
      </div>
    </div>
    <div class="w-full flex flex-row gap-2">
      <div class="w-full sm:w-1/2 items-center">
        <base-input
          label="Password"
          tabindex="1"
          widthClass="w-full"
          placeholder="Enter your password"
          v-model:modelValue="form.password"
          autocomplete="password"
          labelStyle="text-gray-400 text-sm"
          autofocus
        >
        </base-input>
      </div>
      <div class="w-full sm:w-1/2 items-center">
        <base-input
          label="Confirm Password"
          tabindex="1"
          widthClass="w-full"
          placeholder="Confirm your password"
          v-model:modelValue="form.confirm_password"
          labelStyle="text-gray-400 text-sm"
          aria-autocomplete="confirm_password"
        >
        </base-input>
      </div>
    </div>
    <div class="w-full flex justify-end">
      <base-button
        @click.prevent="next"
      >
        Next
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: ''
      }
    }
  },
  methods: {
    next () {
      this.$store.state.selectedComponent = 'AppProfileDataFrom'
    }
  }
}
</script>

<style scoped>

</style>
