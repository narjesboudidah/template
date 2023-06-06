<template>
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      style="border-radius: 1rem; max-height: 54.5rem"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">
              Historique 
            </h3>
          </div>
          <div
            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
          >
            <button type="button" class="text-blueGray-700">
              <span class="material-symbols-outlined icon-sidebar">
                filter_alt
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                Nom
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                Action
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="historique in this.historiques" :key="historique.id">
             
              <td v-if ="historique.admin_fed_id===1 " class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4">
              Sirine
            </td>
              <td v-if ="historique.admin_fed_id===2 " class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4">
             Narjes
            </td>
              <td v-if ="historique.admin_fed_id===3 " class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4">
              Hamza
            </td>
              <td v-if ="historique.admin_fed_id===4 " class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4">
             Zied
            </td>
              <td v-if ="historique.admin_fed_id===5 " class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4">
              Jenayah
            </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
              >
              {{ historique.action }}
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
              >
              {{ historique.date }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script>
 import axios from "axios";
  export default {
    data() {
      return {
        historiques: [],
        permissions: [],
      };
    },
    methods: {
    async getHistoriques() {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/historiques",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.historiques = response.data.data;
        console.log(response.data.data);
      })
    },  
    async getUserPermission() {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.permissions = response.data.permissions;
      } catch (error) {
        console.log(error);
      }
    },
    hasPermission(permission) {
      return this.permissions.includes(permission);
    },
  },
  mounted() {
    this.getHistoriques();
   this.getUserPermission();
  }
  };
  </script>
  