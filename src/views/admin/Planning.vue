<template>
    <div class="mt-4">
      <card-planning/>
      <VCalendar borderless />
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
  