<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
    style="border-radius: 1rem; max-height: 31.7rem"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            Liste des demandes de réservations
          </h3>
        </div>
        <div 
          class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
        <filtre-dropdown/>
        </div>
        <div v-if="userRole === 'Admin Equipe'"
         class="text-right">
          <button class="icon-sidebar-click" type="button" style="padding-right: 0.7rem; padding-left: 0.7rem">
            <router-link
            to="/form/FaireReservation" 
             v-slot="{ href, navigate, isActive }">
              <a :href="href" @click="navigate" class="" :class="[
                  isActive ? 'box-sidebar hover:text-red-600 ' : 'hover:text-blueGray-500',
                ]" style="font-family: inherit,serif;font-size: 15px;">
                <i class="fas fa-plus mr-2"></i> Faire Reservation
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
              Type réservation
            </th>
             <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
            Type du Match 
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
            Équipe adverse:
            </th>
            <th
              class="px-6 bg-blueGray-100 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reservation in this.reservations" :key="reservation.id">
            <td v-if="userRole === 'Admin Federation'"
              class="border-t-0 border-solid border-blueGray-50 px-6 font-semibold align-middle border-l-0 border-r-0 text-blueGray-700 text-xss whitespace-nowrap p-4 text-center flex items-center"
            >
              <img
                :src="bootstrap"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span class="ml-3"> {{ reservation.admin_equipe_id|| "null" }}</span>
            </td>
            <td v-if="reservation.stade_id === 1"
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              Rades
            </td>
            <td v-if="reservation.stade_id === 2"
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              Stade Olympique
            </td>
            <td v-if="reservation.stade_id === 3"
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              Stade El Menzah
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              {{ reservation.date_debut }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              {{ reservation.date_fin }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              {{ reservation.heure_debut }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              {{ reservation.heure_fin }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              {{ reservation.type_reservation }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              {{
                reservation.type_reservation == "Match"
                  ? reservation.type_match
                  : "N/A"
              }}
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              {{
                reservation.type_reservation == "Match"
                  ? reservation.equipe2_id
                  : "N/A"
              }}
            </td>
            <td
              class="border-t-0 px-6 border-solid border-blueGray-50 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
            <button v-if="hasPermission('Confirmer Reservation')"
                class="bg-check-500 text-c active:bg-green-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="this.accepter(reservation.id)"
              >
                <i class="fas fa-check"></i>
              </button>
              <button v-if="hasPermission('Annuler Reservation')"
                class="bg-check-500 text-red-600 active:bg-red-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="this.refuser(reservation.id)"
              >
                <i class="fa fa-ban"></i>
              </button>
              <button v-if="userRole === 'Admin Equipe'"
                class="bg-check-500 text-c active:bg-green-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="this.modifier(reservation.id)"
              >
                <i class="fa fa-pen"></i>
              </button>
              <button v-if="userRole === 'Admin Equipe'"
                class="bg-check-500 text-red-600 active:bg-red-600 text-xs uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="this.annuler(reservation.id)"
              >
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
import bootstrap from "@/assets/img/bootstrap.jpg";
import FiltreDropdown from "@/components/Dropdowns/FiltreDropdown.vue";
import axios from "axios";
export default {
  data() {
    return {
      bootstrap,
      reservations: [],
      permissions: [],
      userRole: '',
    };
  },
  components: {
    FiltreDropdown,
  },
  methods: {
    async getReservations() {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/Reservationstatut", {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.reservations = response.data.data;
          console.log(response.data.data);
        })
        .catch((err) => console.log(err));
    },
    async accepter(id) {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/reservations/accept/${id}`,
          null,
          {
            headers: {
             'Authorization': `Bearer ${token}`
            },
          }
        );
        console.log(response.data.message);
      } catch (err) {
        console.log(err);
      }
      window.location.reload();
    },
    async refuser(id) {
      let token = localStorage.getItem("userToken");
      await axios
        .get(`http://127.0.0.1:8000/api/reservation/refuser/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((err) => console.log(err));
      window.location.reload();
    },
    async annuler(id) {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/reservation/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }).then(() => {
          this.$swal({
            icon: "succes",
            title: " Réservation Supprimé ",
            showConfirmButton: false,
            timer: 1000,
          });
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "Erreur",
            showConfirmButton: false,
            timer: 1000,
          });
        });
        console.log(response.data.message);
      } catch (err) {
        console.log(err);
      }
      window.location.reload();
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
    async update(id) {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.update(`http://127.0.0.1:8000/api/reservation/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log(response.data.message);
      } catch (err) {
        console.log(err);
      }
      window.location.reload();
    },
  },
  mounted() {
   this.getUserPermission();
   this.getUser();
   console.log(this.userRole);
    this.getReservations();
  },
};
</script>
