<template>
  <div>
    <div v-if="stades.length" class="flex flex-wrap">
      
    <div v-if="hasPermission('Ajout Stade')" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
      <CardAjoutStade />
    </div>
      <div v-for="stade in stades" :key="stade.id" class="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
        <CardStade :stade="stade" />
      </div>
    </div>
  </div>
</template>

<script>
import CardStade from "@/components/Cards/CardStade.vue";
import axios from "axios";
import CardAjoutStade from "@/components/Cards/Ajouter/CardAjoutStade.vue";

export default {
  data() {
    return {
      stades: [],
      permissions: [],
    };
  },
  name: "dashboard-page",
  components: {
    CardStade,
    CardAjoutStade,
  },
  methods: {
    async getStades() {
      let token = localStorage.getItem("userToken");
      await axios
        .get("http://127.0.0.1:8000/api/stades", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.stades = response.data.data;
        })
        .catch((err) => console.log(err));
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
    this.getStades();
    this.getUser();
  },
};
</script>
