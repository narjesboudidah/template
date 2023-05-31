<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16" style="border-radius: 1rem;">
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
            <img 
              alt="..."
              :src="stadeimg"
              class="shadow-xl rounded-full h-auto align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" style="border: 0.5rem solid #fff;"
            />
          </div>
        </div>
        <div class="w-full px-4 text-center mt-21">
          <div class="text-center mt-52">
            <h3 class="text-xl font-arial leading-normal mb-2 text-blueGray-700 mb-2 font-semibold">
              {{ stade.nom }}
            </h3>
            <div class="mb-2 text-xs text-blueGray-600 mt-25">
              <i style="transform: rotate(90deg)" class="fa fa-phone mr-2 text-sm"></i>
              {{ stade.telephone }}
            </div>
          </div>
          <div class="flex justify-center py-4 lg:pt-4 pt-8">
            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {{ stade.capacite || '00' }}
              </span>
              <span class="text-sm text-blueGray-400">Capacite</span>
            </div>
            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {{ stade.surface || '00' }}
              </span>
              <span class="text-sm text-blueGray-400">Surface</span>
            </div>
            <div class="lg:mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                00
              </span>
              <span class="text-sm text-blueGray-400">Matchs</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-50 py-3 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <button v-if="hasPermission('Modifier Stade')" @click="toStade1()" class="bg-white-500 text-blueGray-700 active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <i class="fas fa-pen"></i>
          </button>
          <button v-if="hasPermission('Supprimer Stade')" @click="supprimerStade(stade.id)" class="bg-white-500 text-blueGray-700 active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <i class="fa fa-ban"></i>
          </button>
          <button class="bg-white-500 text-blueGray-700 active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <a style="font-family: inherit,serif;font-size: 15px;" @click="toStade()" :class="[ isActive ? 'box-sidebar hover:text-red-600 ' : 'hover:text-blueGray-500']">
              <i class="fa fa-list"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stadeimg from "@/assets/img/stade.jpg";
import axios from "axios";

export default {
  props: {
    stade: {
      type: Object,
    }
  },
  data() {
    return {
      stadeimg,
      permissions: [],
    }
  },
  methods: {
    toStade() {
      this.$router.push(`/profile/stade/${this.stade?.id}`);
    },
    toStade1() {
      this.$router.push(`/form/AjoutStade/${this.stade?.id}`);
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
    async supprimerStade(id) {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/stade/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }).then(() => {
          this.$swal({
            icon: "succes",
            title: " Stade Supprimé ",
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
    hasPermission(permission) {
      return this.permissions.includes(permission);
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
