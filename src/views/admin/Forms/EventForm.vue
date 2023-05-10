<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-form-event/>
      </div>
      
    </div>
  </template>
  <script>
  import CardFormEvent from "@/components/Cards/Forms/CardFormEvent.vue";
  
  export default {
    components: {
        CardFormEvent,
    },
  };
  </script>
  