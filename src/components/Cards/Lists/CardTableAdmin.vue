<template>
  <div
    style="border-radius: 1rem; max-height: 31.7rem"
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-blueGray-50 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            Liste des utilisateurs
          </h3>
        </div>
        <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <button
            class="icon-sidebar-click"
            type="button"
            style="padding-right: 0.7rem; padding-left: 0.7rem"
          >
          <router-link
              to="/form/AjoutAdmin"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                 style="font-family: inherit,serif;font-size: 15px;"
                :href="href"
                @click="navigate"
                class=""
                :class="[
                  isActive
                    ? 'box-sidebar hover:text-red-600 '
                    : 'hover:text-blueGray-500',
                ]">
            <i class="fas fa-plus mr-2"></i> Ajouter Admin
            </a>
      </router-link>
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
              Email
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Rôle
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Date de création
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody v-if="admins && admins.length">
          <!--admin instance in table admins with key admin_id-->
          <tr v-for="admin in this.admins" :key="admin.id">
            <td
              class="px-7  border-solid border-blueGray-50 align-middle py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap p-4 text-center flex items-center"
            >
              <img
                :src="bootstrap"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <!--prendre le nom et le prenom du BD -->
              <span class="ml-3"> {{ admin.prenom +" "+admin .nom }} </span>
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              {{ admin.email }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-pink-400 text-xss text-center p-4"
            >
              {{ admin.role || "Should MySQL LEFT JOIN the role" }}
            </td>
            <td
              class="px-6 bg-white align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              {{ admin.telephone }}
            </td>
            <td
              class="border-t-0  border-solid border-blueGray-50 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
              <button
                class="bg-check-500 text-c active:bg-green-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <i class="fas fa-pen"></i>
              </button>
              <button
                class="bg-check-500 text-red-600 active:bg-red-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import bootstrap from "@/assets/img/bootstrap.jpg";
import axios from "axios";
export default {
    props:{
<<<<<<< HEAD
      // admins: {
      //   type: [],
      // }
=======
      // admins: [],
      type: [],
>>>>>>> b960a95a30f777f07d576f29ae954a2c799bf1d4
    },
    data() {
      return{
      bootstrap,
<<<<<<< HEAD
      admins : []
=======
      admins: [],
>>>>>>> b960a95a30f777f07d576f29ae954a2c799bf1d4
    }},

    mounted() {
    this.getUsers();
  },

  methods: {
<<<<<<< HEAD
    async getUsers() {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/users",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.admins = response.data.data;
      })
=======
    getUsers() {
      let token = localStorage.getItem("userToken");
      axios.get("http://127.0.0.1:8000/api/users",{headers: {
          'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.admins = response.data.data;
      })
      console.log(this.admins);
>>>>>>> b960a95a30f777f07d576f29ae954a2c799bf1d4
    }
  }
};
</script>
