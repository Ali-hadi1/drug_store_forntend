<template>
  <app>
    <template v-slot:content>
      <div class="w-full bg-gray-300 my-2 p-2 rounded">
        <div class="w-80 h-8">
          <div class="h-full relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 flex items-center justify-center"
            >
              <select
                class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
              >
                <option
                  :selected="columns[0]"
                  v-for="column in columns"
                  :key="column"
                >
                  {{ column }}
                </option>
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
              <th class="py-3 px-2 rounded-tl-md"></th>
              <th class="thead-cols">en_name
              </th>
              <th class="thead-cols">نام فارسی </th>
              <th class="thead-cols">Pirce amount</th>
              <th class="thead-cols">price currency</th>
              <th class="thead-cols">selling pirce</th>
              <th class="thead-cols">selling currency</th>
              <th class="thead-cols">company</th>
              <th class="thead-cols">production date</th>
              <th class="thead-cols">expiry date</th>
              <th class="thead-cols">discount amount</th>
              <th class="thead-cols">discount currency</th>
              <th class="thead-cols rounded-tr-md">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr
              class="border border-b-2 border-gray-100"
            >
              <td class="py-2 px-2 text-center">
                <input type="checkbox" />
              </td>
              <td class="px-2 py-2 text-center">
                  <div class="text-sm text-gray-500"> Paracetamol </div>
              </td>
              <td class="px-2 py-2 text-center">
                <div class="text-sm text-gray-500"> پرستامول</div>
              </td>
              <td class="px-2 py-2 text-center">
                <div class="text-sm text-gray-500">10</div>
              </td>
              <td class="px-2 py-2 text-center">
                <div class="text-sm text-gray-500">10</div>
              </td>
              <td class="px-2 py-2 text-center">
                <div class="text-sm text-gray-500">20</div>
              </td>
              <td class="px-2 py-2 text-center">
                <div class="text-sm text-gray-500">20</div>
              </td>
              <td class="px-2 py-2 text-center">
                <div class="text-sm text-gray-500">hoeloow</div>
              </td>
              <td class="px-2 py-2 text-center">
                <div class="text-sm text-gray-500">2021-4-23</div>
              </td>
              <td class="px-2 py-2 text-center">
                <div class="text-sm text-gray-500">2021-4-23</div>
              </td>
              <td class="px-2 py-2 text-center">
                <div class="text-sm text-gray-500">0</div>
              </td>
              <td class="px-2 py-2 text-center">
                <div class="text-sm text-gray-500">0</div>
              </td>
              <td
                class="px-2 py-2 flex justify-center items-center whitespace-nowrap text-right text-sm font-medium"
              >
                <a
                  href="#"
                  class="px-1 text-green-500 text-sm hover:text-green-700"
                >
                  <font-awesome-icon icon="edit" />
                </a>
                <a
                  href="#"
                  class="px-1 text-red-500 text-sm hover:text-red-700"
                >
                  <font-awesome-icon icon="trash" />
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
import App from '@/components/layouts/App.vue'
export default {
  components: { App },
  data: function () {
    return {}
  }
}
</script>
