<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-historique-demande/>
      </div>
      
    </div>
  </template>
  <script>
  import CardHistoriqueDemande from "@/components/Cards/CardHistoriqueDemande.vue";
  
  export default {
    components: {
        CardHistoriqueDemande,
    },
  };
  </script>
  