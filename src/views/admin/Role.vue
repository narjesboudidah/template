<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-liste-role />
      </div>
    </div>
  </template>
  <script>
  import CardListeRole from "@/components/Cards/Lists/CardListeRole.vue";
  
  export default {
    components: {
        CardListeRole,
    },
  };
  </script>