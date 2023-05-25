<template>
  <div>
    <div v-if="userRole === 'Admin Federation' || userRole === 'Admin Equipe'" class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-nouvelles-reservation />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-bar-chart />
      </div>
    </div>
    <div v-if="userRole === 'Admin Federation' || userRole === 'Admin Ste'" class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-nouvelles-maintenance />
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
import axios from 'axios';
export default {
  data() {
    return {
      userRole: '',
    };
  },
  name: "dashboard-page",
  components: {
    CardNouvellesReservation,
    CardBarChart,
    CardStatsTravaux,
    CardNouvellesMaintenance,
  },
  methods: {
    async getUser() {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
      }).then((result) => {
        this.userRole = result.data.role;

      }).catch((err) => {
          console.log(err);
      })
    }
  },
  mounted() {
      if (!localStorage.getItem("userToken")) {
        this.$router.push("/login");
      } 
   this.getUser();
   console.log(this.userRole);
    },
};
</script>
