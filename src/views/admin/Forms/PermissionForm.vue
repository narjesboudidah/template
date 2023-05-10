<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-form-permission/>
      </div>
      
    </div>
  </template>
  <script>
  import CardFormPermission from "@/components/Cards/Forms/CardFormPermission.vue";
  
  export default {
    components: {
        CardFormPermission,
    },
  };
  </script>
  