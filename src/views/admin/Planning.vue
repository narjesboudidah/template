<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-planning/>
      </div>
      
    </div>
  </template>
  <script>
  import CardPlanning from "@/components/Cards/CardPlanning.vue";
  
  export default {
    components: {
        CardPlanning,
    },
  };
  </script>
  