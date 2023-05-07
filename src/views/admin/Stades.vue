<template>
    <div>
      <div class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
        <card-ajout-stade/>
      </div>
      <div v-if="stades.length" class="flex flex-wrap">
        <div v-for="stade in stades" :key="stade.id" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <card-stade :stade="stade"/>
        </div>
      </div>
      
    </div>
  </template>
  <script>
  
  import CardStade from "@/components/Cards/CardStade.vue";
  import axios from "axios";
  import CardAjoutStade from "@/components/Cards/Ajouter/CardAjoutStade.vue";
  
  export default {
    name: "dashboard-page",
    components: {
      CardStade,
      CardAjoutStade,
     
    },
    data() {
      return {
        stades: []
      }
    },
  methods: {
    async getStades () {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/stades",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.stades = response.data.data;
      }).catch(err => console.log(err))
      console.log('stades' , this.stades);
    }
  },
  mounted() {
    this.getStades();
  }
};
  </script>
  