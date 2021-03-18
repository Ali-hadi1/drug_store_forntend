<template>
    <div>
        <app-larg-center-card>
            <template v-slot:title>
              <div class="flex justify-center items-center">
                  <p class=" text-xl font-blod text-black">Create Accout</p>
              </div>
            </template>
            <template v-slot:content>
                <form class="w-full">
                    <div class="flex flex-wrap w-full">
                         <div class="w-full sm:w-1/2 md:pr-2">
                            <base-input
                                label="Name"
                                tabindex='1'
                                widthClass="w-full"
                                placeholder="Enter your name"
                                v-model:modelValue="form.name"
                                autocomplete="name"
                                autofocus
                            >
                            </base-input>
                         </div>
                         <div class="w-full sm:w-1/2 md:pr-2">
                            <base-input
                                label="Lastname"
                                tabindex='2'
                                widthClass="w-full"
                                placeholder="Enter your lastname"
                                v-model:modelValue="form.lastname"
                                autocomplete="lastname"
                            >
                            </base-input>
                         </div>
                    </div>
                    <div class="flex flex-wrap w-full">
                         <div class="w-full sm:w-1/2 md:pr-2">
                            <base-input
                                label="Email"
                                tabindex='3'
                                type="email"
                                widthClass="w-full"
                                placeholder="Enter your Email"
                                v-model:modelValue="form.email"
                                autocomplete="email"
                            >
                            </base-input>
                         </div>
                         <div class="w-full sm:w-1/2 md:pr-2">
                            <base-input
                                label="Phone"
                                tabindex='4'
                                widthClass="w-full"
                                placeholder="Your phone..."
                                v-model:modelValue="form.phone"
                                autocomplete="phone"
                            >
                            </base-input>
                         </div>
                    </div>
                    <div class="flex flex-wrap w-full">
                         <div class="w-full sm:w-1/2 md:pr-2">
                            <base-input
                            label="password"
                            tabindex='6'
                            widthClass="w-full"
                            placeholder="Your password"
                            type="password"
                            v-model:modelValue="form.password"
                          >
                          </base-input>
                         </div>
                         <div class="w-full sm:w-1/2 md:pr-2">
                            <base-input
                                label="Confirm Password"
                                tabindex='7'
                                widthClass="w-full"
                                placeholder="Confirm your Password"
                                type="password"
                                v-model:modelValue="form.password_confirmation"
                            >
                            </base-input>
                         </div>
                    </div>
                    <div class="flex flex-wrap w-full justify-end pr-2">
                        <base-button @click.prevent="Register">Register</base-button>
                    </div>
                </form>
            </template>
        </app-larg-center-card>
    </div>
</template>
<script>
import AppLargCenterCard from '../components/AppLargCenterCard.vue'
export default {
  components: {
    AppLargCenterCard
  },
  data () {
    return {
      form: {
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: null
    }
  },
  methods: {
    Register () {
      this.$store.dispatch('register', this.form).then(
        () => {
          this.$router.push({ name: 'Login' })
        })
        .catch(
          err => {
            this.errors = err.response.data.errors
          }
        )
    }
  }
}
</script>
