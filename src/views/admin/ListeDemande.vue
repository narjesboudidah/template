<template>
  <div class="flex flex-wrap mt-4">
    <div v-if="userRole === 'Admin Federation' || userRole === 'Admin Ste'" class="w-full mb-12 px-4">
      <card-list-demande-maintenance />
    </div>
    <div v-if="userRole === 'Admin Federation' || userRole === 'Admin Equipe'" class="w-full mb-12 px-4">
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
import axios from 'axios';

export default { 
  data() {
    return {
      userRole: '',
    };
  },
  components: {
    CardListDemandeReservation,
    CardListDemandeMaintenance,
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
   this.getUser();
   console.log(this.userRole);
    },
};
</script>
