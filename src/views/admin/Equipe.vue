<template>
    <div>
      <div v-if="equipes.length" class="flex flex-wrap">
        <div v-if="hasPermission('Ajout Equipe')" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <card-ajout-equipe />
        </div>
        <div v-for="equipe in equipes" :key="equipe.id" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <card-equipe :equipe="equipe" />
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
        equipes: [],
        permissions: [],
      }
    },
    methods: {
    async getEquipes () {
      let token = localStorage.getItem("userToken");
      await axios
        .get("http://127.0.0.1:8000/api/equipes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.equipes = response.data.data.map((equipe) => ({
            ...equipe,
            imageUrl: equipe.logo, // Assign the logo URL to the imageUrl property
          }));
        })
        .catch((err) => console.log(err));
      console.log("equipes", this.equipes[0].tel);
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
  mounted() {
    this.getEquipes();
    this.getUser();
  }
  };
  </script>
  