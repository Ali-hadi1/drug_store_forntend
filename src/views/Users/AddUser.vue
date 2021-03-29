<template>
  <app>
    <template v-slot:content>
      <div class="w-full bg-gray-300 rounded-lg p-2 my-2">
        <div class="w-full bg-white rounded-md p-2">
          <div class="max-w-5xl flex flex-col rounded mx-auto">
            <div class="w-full flex justify-center">
              <span class="text-xl text-gray-400 font-bold">Register User</span>
            </div>
            <div class="w-full flex flex-row gap-2">
              <div class="w-1/2 items-center">
                <base-input
                  label="Name"
                  tabindex="1"
                  widthClass="w-full"
                  placeholder="Enter your name"
                  v-model:modelValue="form.name"
                  autocomplete="name"
                  labelStyle="text-gray-400 text-xs"
                  autofocus
                >
                </base-input>
              </div>
              <div class="w-1/2 items-center">
                <base-input
                  label="Lastname"
                  tabindex="1"
                  widthClass="w-full"
                  placeholder="Enter your lastname"
                  v-model:modelValue="form.lastname"
                  labelStyle="text-gray-400 text-xs"
                  aria-autocomplete="lastname"
                >
                </base-input>
              </div>
            </div>
            <div class="w-full flex flex-row gap-2">
              <div class="w-1/2 items-center">
                <base-input
                  label="Email"
                  tabindex="1"
                  widthClass="w-full"
                  placeholder="Enter your email"
                  v-model:modelValue="form.email"
                  autocomplete="email"
                  labelStyle="text-gray-400 text-xs"
                >
                </base-input>
              </div>
              <div class="w-1/2 items-center">
                <base-input
                  label="Phone"
                  tabindex="1"
                  widthClass="w-full"
                  placeholder="Enter your phone"
                  v-model:modelValue="form.phone"
                  labelStyle="text-gray-400 text-xs"
                  aria-autocomplete="phone"
                >
                </base-input>
              </div>
            </div>
            <div class="w-full flex flex-row gap-2">
              <div class="w-1/2 items-center">
                <base-input
                  label="Password"
                  tabindex="1"
                  widthClass="w-full"
                  placeholder="Enter your password"
                  v-model:modelValue="form.password"
                  autocomplete="password"
                  labelStyle="text-gray-400 text-xs"
                  autofocus
                >
                </base-input>
              </div>
              <div class="w-1/2 items-center">
                <base-input
                  label="Confirm Password"
                  tabindex="1"
                  widthClass="w-full"
                  placeholder="Confirm your password"
                  v-model:modelValue="form.confirm_password"
                  labelStyle="text-gray-400 text-xs"
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
        </div>
      </div>
    </template>
  </app>
</template>

<script>
import App from '@/components/layouts/App.vue'
export default {
  components: { App },
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
    next () {}
  }
}
</script>

<style lang="scss" s
Appcoped>
</style>
