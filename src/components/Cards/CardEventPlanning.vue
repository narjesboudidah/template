<template>
  <div class="relative flex flex-col min-w-0 break-words bg-emerald-570 w-full mb-6 shadow-lg rounded" style="border-radius: 1rem; max-height: 31.7rem">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            Liste des événements
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Tableau des événements -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Heure
            </th>
            <th class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Nom Event
            </th>
            <th class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center">
              Type Event
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id">
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4">
              {{ event.heure_debut }}
            </td>
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center">
              {{ event.nom_event }}
            </td>
            <td class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center">
              {{ event.type_event }}
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
       events: [],
     };
   },
   methods: {
     async getEvents(date_debut, stade_id) {
       try {
         const token = localStorage.getItem("userToken");
         const response = await axios.get(`http://127.0.0.1:8000/api/events/filter/${date_debut}/${stade_id}`, {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         });
         this.events = response.data.data;
         console.log(this.events);
       } catch (error) {
         console.error(error);
       }
     },
   },
   mounted() {
     // Définissez vos valeurs de date_debut et stade_id ici
     const date_debut = "2023-05-17";
     const stade_id = 1;
     this.getEvents(date_debut, stade_id);
   },
 };
 </script>
 
  