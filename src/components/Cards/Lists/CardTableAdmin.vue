<template>
  <div
    style="border-radius: 1rem; max-height: 31.7rem"
    class="relative bg-white flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative  w-full px-4 max-w-full flex-grow flex-1">
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
                style="font-family: inherit, serif; font-size: 15px"
                :href="href"
                @click="navigate"
                class=""
                :class="[
                  isActive
                    ? 'box-sidebar hover:text-red-600 '
                    : 'hover:text-blueGray-500',
                ]"
              >
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
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center "
            >
              Nom
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
             Rôle
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Nom Equipe
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Nom Ste
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
            Email
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Téléphone
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
              class="px-77 bg-white border-solid border-blueGray-50 align-middle py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap flex items-center"
            >
              <img v-if="admin.role[0].name === 'Admin Federation'"
                :src="bootstrap"
                class="h-12 w-12 bg-white rounded-full border"
                alt="Image"
              />
              <img v-if="admin.role[0].name === 'Admin Equipe'"
                :src="admin.imageUrl"
                class="h-12 w-12 bg-white rounded-full border"
                alt="Image"
              />
              <img v-if="admin.role[0].name === 'Admin Ste'"
                :src="admin.imageUrl1"
                class="h-12 w-12 bg-white rounded-full border"
                alt="Image"
              />
              <!--prendre le nom et le prenom du BD -->
              <span class="ml-3"> {{ admin.prenom + " " + admin.nom }} </span>
            </td>
            <td
              class="px-6 bg-white align-middle border border-solid border-blueGray-50 py-3 font-semibold text-pink-400 text-xss text-center p-4"
            >
              {{ admin.role[0].name || "Should MySQL LEFT JOIN the role" }}
            </td>
            <td
              class="px-6 bg-white align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700  text-center p-4"
            >
              {{  admin.role[0].name === 'Admin Equipe' ? admin.nom_equipe :'N/A' }}
            </td>
            <td
              class="px-6 bg-white align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700  text-center p-4"
            >
              {{ admin.role[0].name === 'Admin Ste' ? admin.nom_ste:'N/A' }}
            </td>
            <td
              class="px-6 bg-white align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700  text-center p-4"
            >
              {{ admin.email }}
            </td>
            <td
              class="px-6 bg-white align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              {{ admin.telephone }}
            </td>
            <td
              class="border-t-0 bg-white border-solid border-blueGray-50 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
              <router-link to="/form/AjoutAdmin" v-slot="{ href, navigate }">
                <button
                  :href="href"
                  @click="navigate"
                  class="bg-check-500 text-c active:bg-green-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i class="fas fa-pen"></i>
                </button>
              </router-link>
              <button
                class="bg-check-500 text-red-600 active:bg-red-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="this.deleteUser(admin.id)"
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
import bootstrap from "@/assets/img/1200px-Logo_federation_tunisienne_de_football.svg.png";
import axios from "axios";
export default {
  props: {
    type: []
  },
  data() {
    return {
      bootstrap,
      admins: [],
      imageUrl: '',
      imageUrl1: '',
      nom:'',
      nom2:'',
    };
  },

  methods: {
    async getUsers() {
      let token = localStorage.getItem("userToken");
      await axios
        .get("http://127.0.0.1:8000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.admins = response.data.data;
        });
    },
    async deleteUser(id) {
      let token = localStorage.getItem("userToken");
      await axios
        .delete(`http://127.0.0.1:8000/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          this.$swal({
            icon: "succes",
            title: " Admin Supprimé ",
            showConfirmButton: false,
            timer: 1000,
          });
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "Impossible de supprimer Admin",
            showConfirmButton: false,
            timer: 1000,
          });
        });
    },
    async getEquipes(nom) {
      try {
        let token = localStorage.getItem("userToken");
        const response = await axios.get(`http://127.0.0.1:8000/api/equipeimage/${nom}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const image = response.data.data;
        
        // Trouver l'admin correspondant dans la liste et définir l'URL de l'image
        const admin = this.admins.find((admin) => admin.nom_equipe === nom);
        if (admin) {
          admin.imageUrl = image.logo;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getStes(nom) {
      try {
        let token = localStorage.getItem("userToken");
        const response = await axios.get(`http://127.0.0.1:8000/api/societeMaintenanceimage/${nom}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const image1 = response.data.data;
        
        // Trouver l'admin correspondant dans la liste et définir l'URL de l'image
        const admin = this.admins.find((admin) => admin.nom_ste === nom);
        if (admin) {
          admin.imageUrl1 = image1.logo;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    await this.getUsers();
    for (const admin of this.admins) {
      await this.getEquipes(admin.nom_equipe);
    }
    for (const admin of this.admins) {
      await this.getStes(admin.nom_ste);
    }
  },
};
</script>
