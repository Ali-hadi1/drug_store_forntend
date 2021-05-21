<template>
  <app>
    <template v-slot:content>
      <div class="w-full bg-gray-300 rounded-lg p-2 my-2">
        <div class="w-full bg-white rounded-md p-2">
          <div class="w-full flex justify-center my-4 gap-2">
            <div class="step-button" @click=" changeComponent('AppRegister')">
              Registeration form
            </div>
            <div class="step-button p-4" @click=" changeComponent('AppProfileDataFrom')">
              addtional info
            </div>
          </div>
          <component :is="selectedComponent">

          </component>
        </div>
      </div>
    </template>
  </app>
</template>

<script>
import App from '@/components/layouts/App.vue'
import AppRegister from '../../components/AppRegister.vue'
import AppProfileDataFrom from '../../components/AppProfileDataFrom.vue'
import { mapState } from 'vuex'
export default {
  components: { App, AppRegister, AppProfileDataFrom },
  computed: mapState({
    selectedComponent: state => state.selectedComponent
  }),
  methods: {
    changeComponent (componentName) {
      this.$store.state.selectedComponent = componentName
    }
  },
  created () {
    this.$store.state.selectedComponent = 'AppRegister'
  }
}
</script>

<style scoped >
</style>
