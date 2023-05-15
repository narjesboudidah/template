<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
    >
      <div class="rounded-lg bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold">Match</h6>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Informations sur le Match
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="nom-match"
              >
                Nom du Match :
              </label>
              <input   v-model="this.form.nom_match"
                type="text"
                id="-nom-match"
                name="nom-match"
                placeholder="Nom du Match"
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="Date-match"
              >
                Date du Match :
              </label>
              <input 
                v-model="this.form.date"
                type="date"
                id="date-match"
                name="date-match"
                placeholder="Date du Match"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="heure-match"
              >
                Heure du Match :
              </label>
              <input 
                v-model="this.form.heure"
                type="time"
                id="heure-match"
                name="heure-match"
                placeholder="Heure du match"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                      for="type-match"
                    >
                      Type du Match :
                    </label>

                    <select
                v-model="this.form.type_match"
                id="type_match"
                name="type_match"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              >
                <option>National</option>
                <option>International</option>
              </select>
                  </div>
  
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="nom-equipe"
              >
                Nom de l'équipe 1 :
              </label>
              <select 
              v-model="this.form.nom_equipe"
                id="nom-equipe"
                name="nom-equipe"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
               >
                <option value="">Choisissez une équipe</option>
                <option 
                v-for="team in this.equipes"
                        :key="team.id"
                        :value="team.nom_equipe"
                        :label="team.nom_equipe">
                 
                </option>
              </select>
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="nom-equipe2"
              >
                Nom de l'équipe 2 :
              </label>
              <select 
              v-model="this.form.nom_equipe2"
                name="nom-equipe2"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
                >
                <option value="">Choisissez une équipe </option>
                <option 
                v-for="team in this.equipes"
                        :key="team.id"
                        :value="team.nom_equipe"
                        :label="team.nom_equipe"
                >
                 
                </option>
              </select>
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="nom"
              >
                Nom du Stade:
              </label>
              <select
              v-model="this.form.nom"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              >
                <option value="">Choisissez un stade</option>
                <option 
                v-for="team in this.stades"
                        :key="team.id"
                        :value="team.nom"
                        :label="team.nom"
                >
                  
                </option>
              </select>
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
            v-on:click="submit()"
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
      return {
        form:{
          nom_match:"",
          date:"",
          heure:"",
          type_match:"",
          nom_equipe2: "",
          nom_equipe:"",
          nom:"",
        },
        stades: [],
        equipes:[],
      }
    },
    methods: {
      async getEquipes () {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/equipes",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.equipes = response.data.data;
        console.log(this.equipes);
      }).catch(err => console.log(err))
    },
    async getStades () {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/stades",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.stades = response.data.data;
        console.log(this.stades);
      }).catch(err => console.log(err))
    },
    submit: async function() {
        let token = localStorage.getItem("userToken");
        console.log(this.form);
        await axios.post("http://127.0.0.1:8000/api/matchs",this.form,{headers: {
          'Authorization': `Bearer ${token}`
        }}).then((result) => {
          if (result.status != 201){
            console.log("error");
            return;
          }
          console.log(result.data);
        }).catch(err => console.log(err.message));
      }
  },
    mounted() {
       this.getEquipes();
      // Récupération de la liste des stades depuis la base de données
      this.getStades();
    },
  };
  </script>