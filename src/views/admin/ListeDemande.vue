<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-list-demande-maintenance />
    </div>
    <div class="w-full mb-12 px-4">
      <card-list-demande-reservation />
    </div>

    <div id="card-reservation" class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div>
  </div>
</template>
<script>
import CardListDemandeReservation from "@/components/Cards/Lists/CardListDemandeReservation.vue";
import CardListDemandeMaintenance from "@/components/Cards/Lists/CardListDemandeMaintenance.vue";

export default {
  components: {
    CardListDemandeReservation,
    CardListDemandeMaintenance,
  },
};
</script>
