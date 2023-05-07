<template>
    <div>
      <div class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
        <card-ajout-equipe />
      </div>
      <div v-if="equipes.length" class="flex flex-wrap">
        <div v-for="equipe in equipes" :key="equipe.id" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <card-equipe :equipe="equipe" />
        </div>
        <div class="w-full xl:w-4/12 px-4">
          <card-bar-chart />
        </div>
        
      </div>
      
    </div>
  </template>
  <script>
  
  import CardEquipe from "@/components/Cards/CardEquipe.vue";
  import axios from "axios";
  import CardAjoutEquipe from "@/components/Cards/Ajouter/CardAjoutEquipe.vue";
  
  export default {
    name: "dashboard-page",
    components: {
      CardEquipe,
      CardAjoutEquipe,
     
    },
    data() {
      return {
        equipes: []
      }
    },
    methods: {
    async getEquipes () {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/equipes",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.equipes = response.data.data;
      }).catch(err => console.log(err))
      console.log('equipes' , this.equipes);
    }
  },
  mounted() {
    this.getEquipes();
  }
  };
  </script>
  