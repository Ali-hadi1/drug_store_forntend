<template>
    <div class="flex flex-col flex-nowrap">
        <app-navbar>

        </app-navbar>
        <div class="flex flex-col">

            <app-sidebar>

            </app-sidebar>

            <app-section>
                <template v-slot:header>
                  <slot name="header"/>
                </template>
                <template v-slot:content>
                  <slot name="content"/>
                </template>m
            </app-section>
        </div>
    </div>
</template>
<script>
import AppNavbar from './layoutComponent/AppNavbar.vue'
import AppSection from './layoutComponent/AppSection.vue'
import AppSidebar from './layoutComponent/AppSidebar.vue'
export default {
  components: {
    AppNavbar,
    AppSidebar,
    AppSection
  }
}
</script>
