<template>
  <div>
    <app-navbar>

    </app-navbar>
    <div>
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue'
export default {
  components: { AppNavbar }

}
</script>
