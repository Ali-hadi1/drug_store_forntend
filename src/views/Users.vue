<template>
    <app>
        <template v-slot:content>
            <div class="w-full bg-gray-200 my-2 p-2 rounded">

            </div>
        </template>
    </app>
</template>
<script>
import App from './../components/layouts/App.vue'
export default {
  components: { App },
  methods: {

  },
  created () {
    this.$store.dispatch('getUserList')
  }
}
</script>
