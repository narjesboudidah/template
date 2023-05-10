<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-nouvelles-maintenance />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-bar-chart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-nouvelles-reservation />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-stats-travaux />
      </div>
    </div>
  </div>
</template>
<script>

import CardBarChart from "@/components/Cards/CardBarChart.vue";
import CardNouvellesReservation from "@/components/Cards/Lists/CardNouvellesReservation.vue";
import CardStatsTravaux from "@/components/Cards/CardStatsTravaux.vue";
import CardNouvellesMaintenance from "@/components/Cards/Lists/CardNouvellesMaintenance.vue";
export default {
  name: "dashboard-page",
  components: {
    CardNouvellesReservation,
    CardBarChart,
    CardStatsTravaux,
    CardNouvellesMaintenance,
  },
  mounted() {
      if (!localStorage.getItem("userToken")) {
        this.$router.push("/login");
      }
    },
};
</script>
