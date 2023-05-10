<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-historique/>
      </div>
      
    </div>
  </template>
  <script>
  import CardHistorique from "@/components/Cards/Historiques/CardHistorique.vue";
  
  export default {
    components: {
        CardHistorique,
    },
  };
  </script>
  