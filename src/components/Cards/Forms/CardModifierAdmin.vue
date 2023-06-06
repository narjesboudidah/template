<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100">
    <div class="rounded-lg bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Admin</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Informations sur l'admin
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="nom-admin">
              Nom de l'admin :
            </label>
            <input 
              v-model="form.nom" 
              :placeholder="this.user.nom"
              type="text" id="nom-admin" name="nom-admin" 
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="prenom-admin">
              Prénom de l'admin :
            </label>
            <input 
              v-model="form.prenom"
              type="text" id="prenom-admin" name="prenom-admin"
              :placeholder="this.user.prenom" required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="telephone">
              Téléphone :
            </label>
            <input 
              v-model="form.telephone" 
              type="tel" id="telephone" name="telephone" :placeholder="this.user.telephone"
              required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="email">
              Email :
            </label>
            <input
              v-model="form.email"
              type="email" id="email" name="email" :placeholder="this.user.email" required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="adresse">
              Adresse :
            </label>
            <input
              v-model="form.adresse" 
              type="text" id="adresse" name="adresse" :placeholder="this.user.adresse" required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>
        </div>
   
      </form>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
        <button
          class="boutton-click active:bg-blueGray-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
          type="button" style="padding-right: 0.7rem; padding-left: 0.7rem" 
          @click="submit()">
          Confirmer
        </button>

        <button
          class="boutton-annuler bg-blueGray-300 text-blueGray-400 active:bg-red-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
          type="button" style="padding-right: 0.7rem; padding-left: 0.7rem"
          @click="annuler">
          Annuler
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        adresse: "",
      },
      user: {
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        adresse: "",
      },
      equipes: [],
      societe_maintenances: [],
    };
  },
  methods: {
    async submit() {
      try {
        const id = this.$route.params.id;
        const token = localStorage.getItem("userToken");
        console.log(this.form);
        const response = await axios.put(
          `http://127.0.0.1:8000/api/user/${id}`,
          this.form,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        this.$swal({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 5500,
        });

        console.log(response.data);
      } catch (error) {
        console.error(error.response);

        let errorMessage = "An error occurred.";
        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }

        this.$swal({
          icon: "warning",
          title: errorMessage,
          showConfirmButton: false,
          timer: 5500,
        });
      }
    },
    async getUser() {
      let id = this.$route.params.id;
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.user = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    annuler() {
      window.location.href = "/admin/users";
    },
    async getEquipes() {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/equipes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.equipes = response.data.data;
        console.log(this.equipes);
      } catch (err) {
        console.log(err);
      }
    },
    async getSte() {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/societeMaintenances", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.societe_maintenances = response.data.data;
        console.log(this.societe_maintenances);
      } catch (err) {
        console.log(err);
      }
    },
    fillForm() {
      if (this.form.nom !== this.user.nom) {
        this.form.nom = this.user.nom;
      }
      if (this.form.prenom !== this.user.prenom) {
        this.form.prenom = this.user.prenom;
      }
      if (this.form.telephone !== this.user.telephone) {
        this.form.telephone = this.user.telephone;
      }
      if (this.form.email !== this.user.email) {
        this.form.email = this.user.email;
      }
      if (this.form.adresse !== this.user.adresse) {
        this.form.adresse = this.user.adresse;
      }
    },
  },
  mounted() {
    this.getUser();
    this.getEquipes();
    this.getSte();
  },
  watch: {
    user() {
      this.fillForm();
    },
  },
};
</script>
