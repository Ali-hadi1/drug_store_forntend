<template>
  <div class="bg-blue-500">
    <h1>Home page</h1>
    <base-card></base-card>
  </div>
</template>

<script>
import BaseCard from '../components/BaseCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    BaseCard

  },
  computed: mapState({

  })
}
</script>
