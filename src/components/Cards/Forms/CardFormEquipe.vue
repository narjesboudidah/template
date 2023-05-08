<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
    >
      <div class="rounded-lg bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold">Equipe</h6>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Informations sur l'équipe :
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="nom-equipe"
              >
                Nom de l'équipe :
              </label>
              <input
                v-model="this.form.nom_equipe"
                type="text"
                id="nom-equipe"
                name="nom-equipe"
                placeholder="Nom de l'équipe"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="pays-equipe"
              >
                Pays de l'équipe :
              </label>
              <select
                v-model="this.form.pays"
                id="pays-equipe"
                name="pays-equipe"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              >
                <option value="">-- Sélectionner un pays --</option>
                <option value="france">Tunisie</option>
                <option value="espagne">Espagne</option>
                <option value="italie">Italie</option>
                <option value="allemagne">Allemagne</option>
                <option value="portugal">Portugal</option>
              </select>
            </div>
  
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="adresse-stade"
              >
                Adresse de l'équipe :
              </label>
              <input
                v-model="this.form.adresse"
                type="text"
                id="adresse-stade"
                name="adresse-stade"
                placeholder="Adresse de l'équipe"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="logo"
              >
                Logo de l'équipe :
              </label>
              <input
                type="file"
                id="logo"
                name="logo"
                accept="Logo/*"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="description-stade"
              >
                Description de l'équipe :
              </label>
              <textarea
                v-model="this.form.description"
                id="description-stade"
                name="description-stade"
                placeholder="Description de l'équipe"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              ></textarea>
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="type-equipe"
              >
                Type d'équipe :
              </label>
              <select
                v-model="this.form.type_equipe"
                id="type-equipe"
                name="type-equipe"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              >
                <option value="">Sélectionnez un type d'équipe</option>
                <option value="national">National</option>
                <option value="international">International</option>
              </select>
            </div>
  
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="site-web-equipe"
              >
                Site Web de l'équipe :
              </label>
              <input
                v-model="this.form.site_web"
                type="text"
                id="site-web-equipe"
                name="site-web-equipe"
                placeholder="Site Web de l'équipe"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
          </div>
        </form>
        <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 text-center"
        >
          <button
            class=" boutton-click active:bg-blueGray-600 font-bold   text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear "
            type="button"
            style="padding-right: 0.7rem; padding-left: 0.7rem"
           >
          confirmer
        </button>
       
        <button
          class=" boutton-annuler bg-blueGray-500 text-blueGray-400 active:bg-red-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear "
          type="button"
          
          style="padding-right: 0.7rem; padding-left: 0.7rem"
        >
          annuler
        </button>
         </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    data() {
        return{
          form : {
            nom_equipe: "",
            pays: "",
            adresse: "",
            description : "",
            type_equipe : "",
            site_web: ""
          }
      }},
      methods: {
      submit: async function() {
        let token = localStorage.getItem("userToken");
        console.log(this.form);
        await axios.post("http://127.0.0.1:8000/api/equipes",this.form,{headers: {
          'Authorization': `Bearer ${token}`
        }}).then((result) => {
          if (result.status != 201){
            console.log("error");
            return;
          }
          
          console.log(result.data);
        }).catch(err => console.log(err.message));
      }
    } 
  }
  </script>