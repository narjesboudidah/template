<template>
  <div>
    <div class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
      <card-ajout-competition />
    </div>
    <div v-if="competitions.length" class="flex flex-wrap">
      <div v-for="competition in competitions" :key="competition.id" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
        <card-competition :competition="competition" />
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
        competitions: []
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
    }
  },
  mounted() {
    this.getCompetitions();
  }
};
</script>
