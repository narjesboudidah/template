<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-historique-demande/>
      </div>
      <div class="w-full mb-12 px-4">
        <card-historique-reservation/>
      </div>
      
    </div>
  </template>
  <script>
  import CardHistoriqueDemande from "@/components/Cards/Historiques/CardHistoriqueDemande.vue";
  import CardHistoriqueReservation from "@/components/Cards/Historiques/CardHistoriqueReservation.vue";
  
  export default {
    components: {
        CardHistoriqueDemande,
        CardHistoriqueReservation,
    },
  };
  </script>
  