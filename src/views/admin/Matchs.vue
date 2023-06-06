<template>
    <div>
      <div v-if="matchs.length" class="flex flex-wrap">
        <!--Si le user a cette permission -->
        <div v-if="hasPermission('Ajout Match')" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
            <card-ajout-match/>
          </div>
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
        matchs: [],
        permissions: [],
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
    this.getMatchs();
    this.getUser();
  }
  };
  </script>
  