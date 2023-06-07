<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-lg bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Equipe</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="submit">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Informations sur l'équipe :
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="nom-equipe">
              Nom de l'équipe :
            </label>
            <input
              v-model="form.nom_equipe"
              type="text"
              id="nom-equipe"
              name="nom-equipe"
              :placeholder="equipe.nom_equipe"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="pays-equipe">
              Pays de l'équipe :
            </label>
            <input
              v-model="form.pays"
              type="text"
              id="pays-equipe"
              name="pays-equipe"
              :placeholder="equipe.pays"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="adresse-equipe">
              Adresse de l'équipe :
            </label>
            <input
              v-model="form.adresse"
              type="text"
              id="adresse-equipe"
              name="adresse-equipe"
              :placeholder="equipe.adresse"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="logo">
              Logo de l'équipe :
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              ref="file"
              @change="handleFileChange"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="description-equipe">
              Description de l'équipe :
            </label>
            <textarea
              v-model="form.description"
              id="description-equipe"
              name="description-equipe"
              :placeholder="equipe.description"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            ></textarea>
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="type-equipe">
              Type d'équipe :
            </label>
            <select
              v-model="form.type_equipe"
              id="type-equipe"
              name="type-equipe"
              :placeholder="equipe.type_equipe"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            >
              <option>Sélectionnez un type d'équipe</option>
              <option>national</option>
              <option>international</option>
            </select>
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="site-web-equipe">
              Site Web de l'équipe :
            </label>
            <input
              v-model="form.site_web"
              type="text"
              id="site-web-equipe"
              name="site-web-equipe"
              :placeholder="equipe.site_web"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
        </div>

        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
          <button
            class="boutton-click active:bg-blueGray-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
            type="submit"
            style="padding-right: 0.7rem; padding-left: 0.7rem"
          >
            Confirmer
          </button>

          <button
            class="boutton-annuler bg-blueGray-500 text-blueGray-400 active:bg-red-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
            type="button"
            style="padding-right: 0.7rem; padding-left: 0.7rem"
            @click="annuler"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/equipe";

export default {
  data() {
    return {
      form: {
        nom_equipe: "",
        adresse: "",
        pays: "",
        logo: null,
        site_web: "",
        type_equipe: "",
        description: "",
      },
      equipe: {},
    };
  },
  methods: {
    async submit() {
      const id = this.$route.params.id;
      const token = localStorage.getItem("userToken");
      console.log(this.form);

      try {
        let response;
        if (id >= 1) {
          response = await axios.put(`${API_URL}/${id}`, this.getFormData(), {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else {
          response = await axios.post(API_URL, this.getFormData(), {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }

        this.$swal({
          icon: "success",
          title: "Ajout avec succès",
          showConfirmButton: false,
          timer: 1000,
        });

        console.log(response.data);
      } catch (error) {
        this.$swal({
          icon: "warning",
          title: error.message,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
    handleFileChange(equipe) {
      this.form.logo = equipe.target.files[0];
    },
    annuler() {
      window.location.href = "/admin/equipe";
    },
    async getEquipe() {
      const id = this.$route.params.id;
      const token = localStorage.getItem("userToken");
      const headers = { Authorization: `Bearer ${token}` };

      try {
        const response = await axios.get(`${API_URL}/${id}`, { headers });
        this.equipe = response.data.data;
        console.log(this.equipe);

        // Assigner les valeurs récupérées à this.form
        this.form = {
          nom_equipe: this.equipe.nom_equipe,
          pays: this.equipe.pays,
          adresse: this.equipe.adresse,
          description: this.equipe.description,
          type_equipe: this.equipe.type_equipe,
          site_web: this.equipe.site_web,
        };
      } catch (error) {
        console.error(error);
        // Afficher un message d'erreur approprié ici
      }
    },
    getFormData() {
      const formData = new FormData();
      formData.append("nom_equipe", this.form.nom_equipe);
      formData.append("adresse", this.form.adresse);
      formData.append("pays", this.form.pays);
      formData.append("logo", this.form.logo);
      formData.append("site_web", this.form.site_web);
      formData.append("type_equipe", this.form.type_equipe);
      formData.append("description", this.form.description);
      return formData;
    },
  },
  mounted() {
    this.getEquipe();
  },
};
</script>
