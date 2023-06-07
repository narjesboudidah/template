<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
    style="border-radius: 1rem; max-height: 31.7rem"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            Liste des demandes de maintenances
          </h3>
        </div>
        <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
        <admin-dropdown/>
        </div>
        <div v-if="this.userRole === 'Admin Ste'"
         class="text-right">
          <button class="icon-sidebar-click" type="button" style="padding-right: 0.7rem; padding-left: 0.7rem">
            <router-link
             to=/form/AjoutMaintenance 
             v-slot="{ href, navigate, isActive }">
              <a :href="href" @click="navigate" class="" :class="[
                  isActive ? 'box-sidebar hover:text-red-600 ' : 'hover:text-blueGray-500',
                ]" style="font-family: inherit,serif;font-size: 15px;">
                <i class="fas fa-plus mr-2"></i> Faire Maintenance
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
            <th v-if="this.userRole === 'Admin Federation'"
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Nom
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Stade
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Date Début
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Date Fin
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Heure Début
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
             Heure Fin
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Description
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Etat
            </th>
            <th 
             class="px-6 bg-blueGray-100 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
              Action
            </th>
            
          </tr>
        </thead>
        
        <tbody>
          <tr v-for="maintenance in this.maintenances" :key="maintenance.id" >
            <td v-if="this.userRole === 'Admin Federation'"
              class="border-t-0   border-solid border-blueGray-50 px-6 font-semibold align-middle border-l-0 border-r-0 text-blueGray-700 text-xss whitespace-nowrap p-4 text-center flex items-center"
            >
              <img
                :src="maintenance.imageUrl"
                class="h-12 w-12 bg-white rounded-full border"
                alt="Image"
              />
              <span class="ml-3" > {{ maintenance.prenomuser }} </span>
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              {{ maintenance.nomstade }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
            {{ maintenance.date_debut }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
            {{ maintenance.date_fin }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
            {{ maintenance.heure_debut }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
            {{ maintenance.heure_fin }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              {{maintenance.description || "decrire les traveaux"}}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-bold text-xss whitespace-nowrap text-center text-red-600"
            >
            {{ maintenance.etat }}
            </td>
            <td class="border-t-0 border-solid border-blueGray-50 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <button v-if="this.userRole === 'Admin Federation' && hasPermission('Confirmer Maintenance')" class="bg-check-500 text-c active:bg-green-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="accepter(maintenance.id)">
                <i class="fas fa-check"></i>
              </button>
              <button v-if="this.userRole === 'Admin Federation'&& hasPermission('Annuler Maintenance') " class="bg-check-500 text-red-600 active:bg-red-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="refuser(maintenance.id)">
                <i class="fa fa-ban"></i>
              </button>
              <button v-if="this.userRole === 'Admin Ste'" class="bg-check-500 text-c active:bg-green-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
              type="button" @click="update(maintenance.id)">
                <i class="fa fa-pen"></i>
              </button>
              <button v-if="this.userRole === 'Admin Ste'" class="bg-check-500 text-red-600 active:bg-red-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" 
              @click="annuler(maintenance.id)">
                <i class="fa fa-ban"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import AdminDropdown from "@/components/Dropdowns/AdminDropdown.vue";
import axios from "axios";

export default {
  data() {
    return {
      maintenances: [],
      userRole: "",
      prenomuser: "",
      nomstade: "",
      permissions: [],
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
        const token = localStorage.getItem("userToken");
        const response = await axios.get("http://127.0.0.1:8000/api/MaintenancesFS", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.maintenances = response.data.data;
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    },
    hasPermission(permission) {
      return this.permissions.includes(permission);
    },
    async accepter(id) {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get(`http://127.0.0.1:8000/api/maintenance/accepter/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.message);
      } catch (err) {
        console.log(err);
      }
      window.location.reload();
    },
    async refuser(id) {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get(`http://127.0.0.1:8000/api/maintenance/refuser/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.message);
      } catch (err) {
        console.log(err);
      }
      window.location.reload();
    },
    async annuler(id) {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.delete(`http://127.0.0.1:8000/api/maintenance/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.$swal({
          icon: "success",
          title: "Demande Supprimée",
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(response.data.message);
      } catch (err) {
        this.$swal({
          icon: "error",
          title: "Erreur",
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(err);
      }
      window.location.reload();
    },
    async update(id) {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.put(`http://127.0.0.1:8000/api/maintenance/${id}`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.message);
      this.updateData(); // Mettre à jour les données
      } catch (err) {
        console.log(err);
      }
    },
    async getUser() {
      try {
        const token = localStorage.getItem("userToken");
        const result = await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.permissions = result.data.permissions;
        this.userRole = result.data.role;
      } catch (err) {
        console.log(err);
      }
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

    const usernamePromises = this.maintenances.map((maintenance) => this.getUsername(maintenance.admin_ste_id));
    const stadenamePromises = this.maintenances.map((maintenance) => this.getStadename(maintenance.stade_id));
    const stesPromises = this.maintenances.map((maintenance) => this.getStes(maintenance.admin_ste_id));

    await Promise.all([...usernamePromises, ...stadenamePromises, ...stesPromises]);

    console.log(this.userRole);
  } catch (error) {
    console.error(error);
  }
},
};
</script>


