<template>
    <app>
        <template v-slot:content>
            <div class="w-full bg-gray-300 my-2 p-2 rounded">
              <div class="w-80 h-8">
                <div class="h-full relative rounded-md shadow-sm">
                  <div class="absolute inset-y-0 left-0 flex items-center justify-center">
                    <select class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                      <option :selected="columns[0]" v-for="column in columns" :key="column">{{column}}</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    class="h-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-24 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search... "
                  />
                </div>
              </div>
              <table class="w-full rounded mt-1">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="py-3 px-2 rounded-tl-md">
                    </th>
                    <th class="thead-cols">
                      Name
                    </th>
                    <th class="thead-cols">
                      Lastname
                    </th>
                    <th class="thead-cols">
                      Email
                    </th>
                    <th class="thead-cols">
                      Phone
                    </th>
                    <th class="thead-cols">
                      Role
                    </th>
                    <th class="thead-cols rounded-tr-md">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr v-for="user in userList" :key="user"
                    class="border border-b-2 border-gray-100"
                  >
                    <td class="py-2 px-2">
                        <input type="checkbox">
                    </td>
                    <td class="px-2 py-2">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-6 w-6">
                          <img v-if="null" class="h-6 w-6 rounded-full" src="null" alt="">
                          <span class="h-full w-full rounded-full flex justify-center items-center uppercase bg-green-400">
                            {{user.name[0]}}
                          </span>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{user.name}}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-2 py-2">
                      <div class="text-sm text-gray-500">{{user.lastname}}</div>
                    </td>
                    <td class="px-2 py-2">
                      <div class="text-sm text-gray-500">{{user.email}}</div>
                    </td>
                    <td class="px-2 py-2">
                      <div class="text-sm text-gray-500">
                      {{user.phone}}
                      </div>
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                      <span class="green-label" v-if="user.profile.role_id > 1">
                        {{user.profile.role_id === 2 ? 'Author' : 'User' }}
                      </span>
                      <span class="red-label" v-else>
                        Admin
                      </span>
                    </td>
                    <td class="px-2 py-2 flex justify-center items-center whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" class="text-lg px-1 text-gray-800 hover:text-gray-900">
                        <font-awesome-icon icon="user-circle"/>
                      </a>
                      <a href="#" class="px-1 text-green-500 text-sm hover:text-green-700">
                        <font-awesome-icon icon="edit"/>
                      </a>
                      <a href="#" class="px-1 text-red-500 text-sm hover:text-red-700">
                        <font-awesome-icon icon="trash"/>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </template>
    </app>
</template>
<script>
import { mapGetters } from 'vuex'
import App from './../components/layouts/App.vue'
export default {
  components: {
    App
  },
  data () {
    return {
      columns: ['genral', 'name', 'lastname', 'email', 'phone', 'role']
    }
  },
  created () {
    this.$store.dispatch('getUserList')
  },
  computed: {
    ...mapGetters(['userList'])
  }
}
</script>
