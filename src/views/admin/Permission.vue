<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-liste-permission />
      </div>
    </div>
  </template>
  <script>
  import CardListePermission from "@/components/Cards/Lists/CardListePermission.vue";
  
  export default {
    components: {
      CardListePermission,
    },
  };
  </script>