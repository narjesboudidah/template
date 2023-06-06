<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" style="border-radius: 1rem; max-height: 31.7rem">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            Liste des Travaux
          </h3>
        </div>
        <div class="relative w-full px-15 max-w-full flex-grow flex-1 text-right ">
        <admin-dropdown/>
        </div>
        <div
          class="text-right"
         >
          <button
            class="icon-sidebar-click"
            type="button"
            style="padding-right: 0.7rem; padding-left: 0.7rem;"
          >
            <router-link
              to="/form/AjoutMaintenance"
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
                <i class="fas fa-plus mr-2"></i> Ajouter Travaux
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
            <th v-if="userRole === 'Admin Federation'"
            class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Nom Ste Maintenance
            </th>
            <th class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Stade
            </th>
            <th class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Date Début
            </th>
            <th class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Date Fin
            </th>
            <th class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Heure Début
            </th>
            <th class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Heure Fin
            </th>
            <th class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Description
            </th>
            <th class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Etat
            </th>
            <th class="px-6 bg-blueGray-100 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
              Statut
            </th>
          </tr>
        </thead>
        <tbody>
          <tr 
          v-for="maintenance in maintenances" :key="maintenance.id">
            <td v-if="userRole === 'Admin Federation'"
            style="margin-right: 2rem" 
            class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap p-4 text-center flex items-center">
            <img
                :src="maintenance.imageUrl"
                class="h-12 w-12 bg-white rounded-full border"
                alt="Image"
              />
              <span class="ml-3">{{ maintenance.prenomuser || 'null' }}</span>
            </td>
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4">
              {{ maintenance.nomstade }}
            </td>
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center">
              {{ maintenance.date_debut }}
            </td>
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center">
              {{ maintenance.date_fin }}
            </td>
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center">
              {{ maintenance.heure_debut }}
            </td>
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center">
              {{ maintenance.heure_fin }}
            </td>
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4">
              {{ maintenance.description || 'decrire les traveaux' }}
            </td>
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-bold text-xss whitespace-nowrap text-center text-red-600">
              {{ maintenance.etat }}
            </td>
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-bold text-xss whitespace-nowrap text-center text-red-600">
              {{ maintenance.statut }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AdminDropdown from "@/components/Dropdowns/AdminDropdown.vue";
import axios from 'axios';

export default {
  data() {
    return {
      maintenances: [],
      userRole: "",
      prenomuser: "",
      nomstade: "",
      imageUrl: "",
      id: 1,
    };
  },

  components: {
    AdminDropdown,
  },
  methods: {
    async getMaintenances() {
      try {
        const token = localStorage.getItem('userToken');
        const response = await axios.get('http://127.0.0.1:8000/api/maintenances/filterstatut', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.maintenances = response.data.data;
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getUser() {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
      }).then((result) => {
        this.userRole = result.data.role;

      }).catch((err) => {
          console.log(err);
      })
    },
    async getUsername(id) {
      try {
        let token = localStorage.getItem("userToken");
        const response = await axios.get(`http://127.0.0.1:8000/api/usernom/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const nom = response.data.data;

        const maintenance = this.maintenances.find((maintenance) => maintenance.admin_ste_id === id);
        if (maintenance) {
          maintenance.prenomuser = nom;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getStadename(id) {
      try {
        let token = localStorage.getItem("userToken");
        const response = await axios.get(`http://127.0.0.1:8000/api/stadenom/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const nom_stade = response.data.data;

        const maintenance = this.maintenances.find((maintenance) => maintenance.stade_id === id);
        if (maintenance) {
          maintenance.nomstade = nom_stade;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getStes(id) {
      try {
        let token = localStorage.getItem("userToken");
        const response = await axios.get(`http://127.0.0.1:8000/api/Maintenancelogo/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const image1 = response.data.data;
          console.log(image1);

        // Trouver l'admin correspondant dans la liste et définir l'URL de l'image
        const maintenance = this.maintenances.find((maintenance) => maintenance.admin_ste_id === id);
        if (maintenance) {
          maintenance.imageUrl = image1;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    try {
      await this.getUser();
      await this.getMaintenances();
      for (const maintenance of this.maintenances) {
        await this.getUsername(maintenance.admin_ste_id);
      }
      for (const maintenance of this.maintenances) {
        await this.getStadename(maintenance.stade_id);
      }
      for (const maintenance of this.maintenances) {
        await this.getStes(maintenance.admin_ste_id);
      }
      console.log(this.userRole);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
