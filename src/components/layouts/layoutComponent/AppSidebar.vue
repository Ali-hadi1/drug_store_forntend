<template>
    <div class="fixed h-screen sm:w-48 bg-sidebar hidden md:block" v-if="sideBarDisplay">
        <ul class="m-2">
            <app-sidbar-link
                title="Dashboard"
                routeName="Dashboard"
                textHoverClass="hover:text-blue-400"
                paddingClass="py-2"
                fontWeight="font-bold"
                titleTextSize="12px"
            >

            </app-sidbar-link>
            <app-sidbar-link-group title="User">
              <template v-slot:links>
                <transition name="animate">
                    <div>
                        <app-sidbar-link
                            title="Users List"
                            routeName="Users"
                            icon="users"
                            paddingClass="py-1"
                            textHoverClass="hover:text-blue-400"
                            fontWeight="font-semibold"
                            activeClass="text-indigo-400"
                            iconAndTitlePadding="pl-2"
                            titleTextSize="12px"
                        >

                        </app-sidbar-link>
                        <app-sidbar-link
                            title="Add User"
                            icon="user-plus"
                            routeName="AddUser"
                            paddingClass="py-1"
                            textHoverClass="hover:text-blue-400"
                            fontWeight="font-semibold"
                            activeClass="text-indigo-400"
                            iconAndTitlePadding="pl-2"
                            titleTextSize="12px"
                        >

                        </app-sidbar-link>
                    </div>
                </transition>
              </template>
            </app-sidbar-link-group>
            <app-sidbar-link-group title="Porducts">
              <template v-slot:links>
                <transition name="animate">
                    <div>
                        <app-sidbar-link
                            title="Product List"
                            routeName="products"
                            icon="users"
                            paddingClass="py-1"
                            textHoverClass="hover:text-blue-400"
                            fontWeight="font-semibold"
                            activeClass="text-indigo-400"
                            iconAndTitlePadding="pl-2"
                            titleTextSize="12px"
                        >

                        </app-sidbar-link>
                    </div>
                </transition>
              </template>
            </app-sidbar-link-group>
        </ul>
    </div>
</template>

<script>
import AppSidbarLink from '../../AppSidebarLink.vue'
import AppSidbarLinkGroup from '../../AppSidebarGroupLinks.vue'
import { mapState } from 'vuex'
export default {
  components: { AppSidbarLink, AppSidbarLinkGroup },
  data: function () {
    return {
    }
  },
  methods: {

  },
  computed: mapState({
    sideBarDisplay: state => state.sidebarState
  })
}
</script>

<style scoped>

</style>
