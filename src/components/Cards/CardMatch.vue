<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16" style="border-radius: 1rem;">
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <h3 class="text-2xl font-semibold font-arial leading-normal mb-2 text-blueGray-700" style="padding-top: 2rem; margin-bottom: -1.5rem;">Derby</h3>
        <div class="w-full px-4 text-center mt-20">
          <div class="flex justify-center py-4 lg:pt-4 pt-8">
            <div style="padding-left: 2.4rem;" class="mr-4 p-3 text-center">
              <img
                alt="Image"
                :src="imageUrl1"
                class="shadow-xl rounded-full border-none absolute -m-16 lg:-ml-18 max-w-100-px"
              />
              <br>
              <br>
              <span v-if="match.equipe1_id === 1" class="text-sm text-blueGray-400"> Espérance Sportive de Tunis </span>
              <span v-if="match.equipe1_id === 2" class="text-sm text-blueGray-400"> Etoile Sportive du Sahel </span>
              <span v-if="match.equipe1_id === 3" class="text-sm text-blueGray-400"> WYDAD AC </span>
              <span v-if="match.equipe1_id === 4" class="text-sm text-blueGray-400"> Al Ahly SC </span>
            </div>
            <div class="mr-4 p-3 text-center">
              <span class="text-sm text-blueGray-400" style="padding-left: 0.6rem;">VS</span>
            </div>
            <div class="mr-4 p-3 text-center">
              <img
                alt="Image"
                :src="imageUrl2"
                class="shadow-xl rounded-full border-none absolute -m-16 lg:-ml-19 max-w-100-px"
              />
              <br>
              <br>
              <span v-if="match.equipe2_id === 1" class="text-sm text-blueGray-400"> Espérance Sportive de Tunis </span>
              <span v-if="match.equipe2_id === 2" class="text-sm text-blueGray-400"> Etoile Sportive du Sahel </span>
              <span v-if="match.equipe2_id === 3" class="text-sm text-blueGray-400"> WYDAD AC </span>
              <span v-if="match.equipe2_id === 4" class="text-sm text-blueGray-400"> Al Ahly SC </span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-52">
        <div class="mb-2 text-xs text-blueGray-600 mt-25">
          <i class="fa fa-clock mr-2 text-sm"></i>
          {{ match.date }} : {{ match.heure_debut }}
        </div>
        <div class="mb-2 text-xs text-blueGray-600 mt-25">
          <i v-if="match.stade_id === 1" class="fas fa-map-marker-alt mr-2 text-sm"></i>
          
        </div>
      </div>
      <div class="mt-50 py-3 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <button
            class="bg-white-500 text-black-200 active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <i class="fas fa-pen"></i>
          </button>
          <button
            class="bg-white-500 text-black-200 active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            @click="supprimerMatch(match.id)"
          >
            <i class="fa fa-ban"></i>
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
    match: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageUrl1: '',
      imageUrl2: '',
      nomstade: "",
      url: `/form/match/${this.props?.match?.id}`,
    };
  },
  methods: {
    toMatch() {
      this.$router.push(`/form/match/${this.$props.match?.id}`);
    },
    async supprimerMatch(id) {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/match/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        this.$swal({
          icon: "success",
          title: "Match Supprimé",
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(response.data.message);
      } catch (err) {
        this.$swal({
          icon: "error",
          title: "Erreur",
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(err);
      }
    },
    async getMatchs1(id) {
      try {
        let token = localStorage.getItem("userToken");
        const response = await axios.get(`http://127.0.0.1:8000/api/matchlogo/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const image1 = response.data.data;
        console.log(image1);

        // Définir l'URL de l'image
        this.imageUrl1 = image1;
      } catch (error) {
        console.log(error);
      }
    },
    async getMatchs2(id) {
      try {
        let token = localStorage.getItem("userToken");
        const response = await axios.get(`http://127.0.0.1:8000/api/matchlogo/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const image2 = response.data.data;
        console.log(image2);

        // Définir l'URL de l'image
        this.imageUrl2 = image2;
      } catch (error) {
        console.log(error);
      }
    },
    async getStadename(id) {
      try {
        let token = localStorage.getItem("userToken");
        const response = await axios.get(`http://127.0.0.1:8000/api/nomequipe/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const nom_stade = response.data.data;

        const match = this.matchs.find((match) => match.stade_id === id);
        if (match) {
          match.nomstade = nom_stade;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    try {
      await Promise.all([this.getMatchs1(this.match.equipe1_id), this.getMatchs2(this.match.equipe2_id), this.getStadename(this.match.stade_id)]);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>