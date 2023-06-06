<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-form-role/>
      </div>
      
    </div>
  </template>
  <script>
  import CardFormRole from "@/components/Cards/Forms/CardFormRole.vue";
  
  export default {
    components: {
        CardFormRole,
    },
  };
  </script>