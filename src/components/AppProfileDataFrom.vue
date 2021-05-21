<template>
  <div class="w-full flex flex-row gap-2 justify-center">
    <div class="w-1/2 items-center">
        <div class="w-full flex flex-row gap-2">
          <div class="w-full sm:w-1/2 items-center">
            <app-select
              label="Province"
              :options="provinces"
              widthClass="w-full"
              labelStyle="text-gray-400 text-sm"
              v-model:modelValue="prform.province"
              selectionCol="en_name"
            >

            </app-select>
          </div>
          <div class="w-full sm:w-1/2 items-center">
            <app-select
              label="Role"
              :options="roles"
              widthClass="w-full"
              labelStyle="text-gray-400 text-sm"
              v-model:modelValue="prform.role"
              selectionCol="name"
            >

            </app-select>
          </div>
        </div>
        <div class="w-full flex justify-end gap-2">
          <base-button
          @click.prevent="submitForm"
          >
            submit
          </base-button>
        </div>
    </div>
  </div>
</template>

<script>
import AppSelect from './AppSelect.vue'
export default {
  components: {
    AppSelect
  },
  data () {
    return {
      prform: {
        province: '',
        role: ''
      }
    }
  },
  computed: {
    provinces () {
      return this.$store.state.province.provinces
    },
    roles () {
      return this.$store.state.role.roles
    }
  },
  methods: {
    submitForm () {
      console.log('submitted')
    }
  },
  created () {
    this.$store.dispatch('getProvinces')
    this.$store.dispatch('getroles')
  }
}
</script>

<style scoped>

</style>
