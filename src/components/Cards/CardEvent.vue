<template>
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      style="border-radius: 1rem; max-height: 31.7rem"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">
              Liste des evenements 
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
          <button
            class="icon-sidebar-click"
            type="button"
            style="padding-right: 0.7rem; padding-left: 0.7rem"
          >
          <router-link
              to="/form/AjoutEvent"
              v-slot="{href,navigate, isActive }"
            >
              <a
                 style="font-family: inherit,serif;font-size: 15px;"
                :href=href
                @click="navigate"
                class=""
                :class="[
                  isActive
                    ? 'box-sidebar hover:text-red-600 '
                    : 'hover:text-blueGray-500',
                ]"
              >
            <i class="fas fa-plus mr-2"></i> Ajouter Event
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
            <tr  >
              <th
                class="px-6  bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                Nom Admin Equipe 
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
                Type Event
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                Nom Event
              </th>
              <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
            Type du Match 
            </th>
              <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
            Nom de l'équipe adversaire
            </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in this.events" :key="event.id">
              <td
                class="border-t-0   border-solid border-blueGray-50 px-6 font-semibold align-middle border-l-0 border-r-0 text-blueGray-700 text-xss whitespace-nowrap p-4 text-center flex items-center"
              >
                <img
                  :src="bootstrap"
                  class="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                />
                <span class="ml-3"> {{ event.equipe1_id || "null" }}  </span>
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
              >
              {{ event.stade_id }}
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
              >
              {{event.date_debut }}
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
              >
              {{ event.date_fin }}
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
              >
              {{ event.heure_debut }}
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
              >
              {{ event.heure_fin }}
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
              >
              {{
                reservation.type_event == "Match || Entraînement "
                  ? event.nom_event
                  : "N/A"
              }}
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
              >
              {{
                reservation.type_event == "Evénements spéciaux || Entraînement"
                  ? event.type_match
                  : "N/A"
              }}
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
              >
              {{
               event.type_event == "Evénements spéciaux || Entraînement"
                  ? event.equipe2_id
                  : "N/A"
              }}
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
    data() {
      return {
        bootstrap,
        events:[],
      };
    },
     methods :{

    async getEvents () {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/events",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.maintenances = response.data.data;
        console.log(response.data.data);
      }).catch(err => console.log(err))
    }
    },
    mounted() {
    this.getEvents();
  }
  };
  </script>
  