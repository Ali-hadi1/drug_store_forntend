<template>
  <div>
    <app-navbar>

    </app-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppNavbar from '../components/AppNavbar.vue'

export default {
  components: {
    AppNavbar

  },
  computed: mapState({

  })
}
</script>
