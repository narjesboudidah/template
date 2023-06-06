<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16" style="border-radius: 1rem;">
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
            <img alt="Image" :src="ste.imageUrl" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
            <br>
          </div>
        </div>
      </div>
      <div class="text-center mt-20">
        <h3 class="text-xl font-arial leading-normal mb-2 text-blueGray-700 mb-2">
          {{ ste.nom }}
        </h3>
        <div class="mb-2 text-xs text-blueGray-600 mt-25">
          <i class="fa fa-user mr-2 text-sm"></i>
          Paul Germen
        </div>
        <div class="mb-2 text-xs text-blueGray-600 mt-25">
          <i style="transform: rotate(90deg);" class="fa fa-phone mr-2 text-sm"></i>
          +216 {{ ste.tel }}
        </div>
        <div class="mb-2 text-xs text-blueGray-600 mt-25">
          <i class="fas fa-map-marker-alt mr-2 text-lg"></i>
          {{ ste.adresse }}
        </div>
      </div>
      <div class="mt-50 py-3 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <button v-if="hasPermission('Modifier Ste')" @click="toSte1()" class="bg-white-500 text-black-200 active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <i class="fas fa-pen"></i>
          </button>
          <button v-if="hasPermission('Supprimer Ste')" @click="supprimerSte(ste.id)" class="bg-white-500 text-black-200 active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <i class="fa fa-ban"></i>
          </button>
          <button class="bg-white-500 text-black-200 active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <a style="font-family: inherit,serif;font-size: 15px;" @click="toSte()" :class="[isActive ? 'box-sidebar hover:text-red-600' : 'hover:text-blueGray-500']">
              <i class="fa fa-list"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    ste: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      permissions: [],
      imageUrl: ''
    };
  },
  methods: {
    toSte() {
      this.$router.push(`/profile/SteProfile/${this.ste?.id}`);
    },
    toSte1() {
      this.$router.push(`/form/AjoutSte/${this.ste?.id}`);
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
    async supprimerSte(id) {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/societeMaintenance/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }).then(() => {
          this.$swal({
            icon: "succes",
            title: " Ste Supprimé ",
            showConfirmButton: false,
            timer: 1000,
          });
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "Erreur",
            showConfirmButton: false,
            timer: 1000,
          });
        });
        console.log(response.data.message);
      } catch (err) {
        console.log(err);
      }
    },
    async getStes() {
      try {
        let token = localStorage.getItem("userToken");
        const response = await axios.get("http://127.0.0.1:8000/api/societeMaintenances", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.imageUrl = response.data.data[0].logo;
      } catch (error) {
        console.log(error);
      }
    },
    hasPermission(permission) {
      return this.permissions.includes(permission);
    },
  },
  mounted() {
    this.getUser();
    this.getStes();
  },
};
</script>
