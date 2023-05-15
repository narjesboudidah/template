<template>
    <div class="mt-4">
      <card-planning/>
      <div class="flex" style="margin-left: 9.5rem;margin-top: 1rem;">
        <div style="margin: 0.5rem;">
        <card-match-planning/>
      </div>
      <div style="margin: 0.5rem;">
        <card-maintenance-planning/>
      </div>
      <div style="margin: 0.5rem;">
        <card-event-planning/>
      </div>
      </div>
    </div>
  </template>
  <script>
  import CardPlanning from "@/components/Cards/CardPlanning.vue";
  import CardMatchPlanning from "@/components/Cards/CardMatchPlanning.vue";
  import CardEventPlanning from "@/components/Cards/CardEventPlanning.vue";
  import CardMaintenancePlanning from "@/components/Cards/CardMaintenancePlanning.vue";
  
  export default {
    components: {
        CardPlanning,
        CardMatchPlanning,
        CardEventPlanning,
        CardMaintenancePlanning,
    },
  };
  </script>
  