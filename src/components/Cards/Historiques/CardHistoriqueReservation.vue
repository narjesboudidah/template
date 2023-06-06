<template>
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      style="border-radius: 1rem; max-height: 31.7rem"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">
              Historique des demandes de reservations
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
      <div class="block w-full overflow-x-auto" style="border-radius:0 0 1rem 1rem;">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse" >
          <thead>
            <tr>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                ID Admin
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                ID Equipe
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                ID Stade
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
            ID de l'équipe 1
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
           ID de l'équipe 2
            </th>
            <th
                class="px-6 bg-blueGray-100 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
              >
                Statut
            </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in this.reservations" :key="reservation.id">
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
              >
              {{ reservation.admin_fed_id }}
              </td>
              <td
                class="border-t-0 border-solid border-blueGray-50 px-6 font-semibold align-middle border-l-0 border-r-0 text-blueGray-700 text-xss whitespace-nowrap p-4 text-center flex items-center"
              >
                <span class="ml-3"> {{ reservation.admin_equipe_id }} </span>
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
              >
              {{ reservation.stade_id }}
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
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
              >
              {{ reservation.type_reservation }}
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-bold text-xss whitespace-nowrap text-center text-red-600"
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
                    ? reservation.equipe1_id
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
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-bold text-xss whitespace-nowrap text-center text-emerald-600"
              >
              {{ reservation.statut }}
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
        reservations : [],
      };
    },
    methods: {
    async getReservations() {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/ReservationFilterstatut", {
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
  },
  mounted() {
   this.getUser();
    this.getReservations();
  },
  };
  </script>
  