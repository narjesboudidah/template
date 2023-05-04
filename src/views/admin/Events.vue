<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-event />
      </div>
      <div id="card-reservation" class="w-full mb-12 px-4">
        <card-table color="dark" />
      </div>
    </div>
  </template>
  <script>
  import CardEvent from "@/components/Cards/CardEvent.vue";
  
  export default {
    components: {
        CardEvent,
    },
  };
  </script>
  