<template>
  <div>
    <div class="flex flex-wrap">
      <!--Si le user a cette permission -->
      <div v-if="this.hasPermission('Ajout Competition')" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
        <card-ajout-competition />
      </div>
      <div v-if="this.competitions?.length">
        <div v-for="competition in competitions" :key="competition.id" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <card-competition :competition="competition" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardCompetition from "@/components/Cards/CardCompetition.vue";
import axios from "axios";
import CardAjoutCompetition from "@/components/Cards/Ajouter/CardAjoutCompetition.vue";

export default {
  name: "dashboard-page",
  components: {
    CardCompetition,
    CardAjoutCompetition,
  },
    data() {
      return {
        competitions: [],
        permissions: [],
      }
    },
  methods: {
    async getCompetitions () {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/Competitions",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.competitions = response.data.data;
      }).catch(err => console.log(err))
      console.log('competitions' , this.competitions);
    },
    async getUser() {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.permissions = response.data.permissions;
      } catch (error) {
        console.log(error);
      }
    },
    hasPermission(permission) {
      return this.permissions.includes(permission);
    },
  },
  async mounted() {
    await this.getCompetitions();
    await this.getUser();
  }
};
</script>
