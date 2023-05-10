<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-form-maintenance/>
      </div>
      
    </div>
  </template>
  <script>
  import CardFormMaintenance from "@/components/Cards/Forms/CardFormMaintenance.vue";
  
  export default {
    components: {
        CardFormMaintenance,
    },
  };
  </script>
  