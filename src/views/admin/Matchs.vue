<template>
    <div>
      <div class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <card-ajout-match/>
        </div>
      <div v-if="matchs.length" class="flex flex-wrap">
        <div v-for="match in matchs" :key="match.id" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <card-match :match="match"/>
        </div>
      </div>
      
    </div>
  </template>
  <script>
  
  import CardMatch from "@/components/Cards/CardMatch.vue";
  import axios from "axios";
  import CardAjoutMatch from "@/components/Cards/Ajouter/CardAjoutMatch.vue";
  export default {
    name: "dashboard-page",
    components: {
      CardMatch,
      CardAjoutMatch,
    },
    data() {
      return {
        matchs: []
      }
    },
  methods: {
    async getMatchs () {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/matchs",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.matchs = response.data.data;
      }).catch(err => console.log(err))
      console.log('matchs' , this.matchs);
    }
  },
  mounted() {
    this.getMatchs();
  }
  };
  </script>
  