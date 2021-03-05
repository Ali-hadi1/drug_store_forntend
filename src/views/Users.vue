<template>
    <app>
        <div slot:content>
            <base-button
                @click.prevent="showAuthenticatedUsers"
            >
                user
            </base-button>
        </div>
    </app>
</template>
<script>
import App from './../components/layouts/App.vue'
export default {
  components: { App },
  methods: {
    showAuthenticatedUsers () {
      // axios.get('/csrf-cookie').then((response) => {
      //   axios.get('/find').then(response => {
      //     console.log(response.data)
      //   }).catch(errors => {
      //     console.log(errors.response.data.error)
      //   })
      // }).catch((err) => {

      // })
    }
  }
}
</script>
