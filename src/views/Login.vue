<template>
    <div>
        <app-center-card>
          <template v-slot:title>
            <div class="flex justify-center items-center">
                  <p class=" text-xl font-blod text-black">Login</p>
              </div>
          </template>
          <template v-slot:content>
            <base-input
             label="Email"
             widthClass='w-full'
             placeholder="Enter your Email"
             v-model:modelValue="form.email"
             >
            </base-input>
            <base-input label="password"
             type="password"
             widthClass='w-full'
             placeholder="Enter your password"
             v-model:modelValue="form.password"
            >
            </base-input>
            <base-button
            buttonFloat="float-right"
            @click.prevent="login"
            >
                Login
            </base-button>
          </template>
        </app-center-card>
    </div>
</template>
<script>
import AppCenterCard from '../components/AppCenterCard.vue'
export default {
  components: {
    AppCenterCard
  },
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: null
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.form).then(
        () => {
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(
          (err) => {
            this.errors = err.response.data.errors
          }
        )
    }
  }
}
</script>
