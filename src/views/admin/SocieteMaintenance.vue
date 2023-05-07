<template>
    <div>
      <div class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <card-ajout-ste/>
        </div>
      <div v-if="stes.length" class="flex flex-wrap">
        <div v-for="ste in stes" :key="ste.id" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <card-ste :ste="ste"/>
        </div>
        
      </div>
      
    </div>
  </template>
  <script>
  
  import CardSte from "@/components/Cards/CardSte.vue";
  import axios from "axios";
  import CardAjoutSte from "@/components/Cards/Ajouter/CardAjoutSte.vue";
  
  export default {
    name: "dashboard-page",
    components: {
      CardSte,
      CardAjoutSte,
    },
    data() {
      return {
        stes: []
      }
    },
  methods: {
    async getStes () {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/societeMaintenances",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.stes = response.data.data;
      }).catch(err => console.log(err))
      console.log('stes' , this.stes[0].tel);
    }
  },
  mounted() {
    this.getStes();
  }
  };
  </script>