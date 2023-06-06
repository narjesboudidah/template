<template>
  <!--nekes v-if type event:match-->
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-lg bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Event</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Informations sur l'event
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
              for="type_event">
              Type event :
            </label>
              <select
                v-model="this.form.type_event"
                id="type_event"
                name="type_event"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              >
                <option>Entraînement</option>
                <option>Match</option>
                <option>Evénements spéciaux</option>
              </select>
              <div v-if="this.form.type_event === 'Match'">
                <h6
                  class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
                >
                  Informations sur le Match
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                      for="type_match"
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
                      for="equipe1_id"
                    >
                      Nom de l'équipe 1:
                    </label>
                    <select v-model="this.form.equipe1_id"
                      id="equipe1_id"
                      name="equipe1_id"
                      required
                      class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
                    >
                      <option value="">Choisissez une équipe</option>
                      <option
                        v-for="team in this.equipes"
                        :key="team.id"
                        :value="team.equipe1_id"
                        :label="team.equipe1_id"
                      />
                    </select>
                  </div>
                  <div class="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                      for="equipe2_id"
                    >
                      Nom de l'équipe 2:
                    </label>
                    <select v-model="this.form.equipe2_id"
                      id="equipe2_id"
                      name="equipe2_id"
                      required
                      class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
                    >
                      <option value="">Choisissez une équipe</option>
                      <option
                        v-for="team in this.equipes"
                        :key="team.id"
                        :value="team.equipe2_id"
                        :label="team.equipe2_id"
                      />
                    </select>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3" v-if="this.form.type_event === 'Evénements spéciaux'">
            <label
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
              for="nom_event"
            >
              Nom Event :
            </label>
            <input
              v-model="this.form.nom_event" 
              type="text"
              id="nom_event"
              name="nom_event"
              placeholder="Nom Event"
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="id">Nom du Stade:</label>
            <select v-model="this.form.stade_id" id="stade_id" name="stade_id" required class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow">
              <option v-for="stade in stades" :key="stade.id" :value="stade.id">{{ stade.nom }}</option>
            </select>
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label 
              for="date_debut"
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
            >
              Date début:
            </label>
            <input
              v-model="this.form.date_debut"
              type="date"
              id="date_debut"
              name="date_debut"
              placeholder="Date début de l'event"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            
            />
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              for="date-fin"
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
            >
              Date fin:
            </label>
            <input 
              v-model="this.form.date_fin"
              type="date"
              id="date_fin"
              name="date_fin"
              placeholder="Date fin de l'event"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              for="heure_debut"
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
            >
              Heure début:
            </label>
            <input
              v-model="this.form.heure_debut"
              type="time"
              id="heure_debut"
              name="heure_debut"
              placeholder="heure_debut"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              for="heure_fin"
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
            >
              Heure fin:
            </label>
            <input
              v-model="this.form.heure_fin"
              type="time"
              id="heure_fin"
              name="heure_fin"
              placeholder="Heure fin de event"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3" v-if="this.form.type_event === 'Entraînement'">
                    <label
                      class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                      for="equipe1_id"
                    >
                      Nom de l'équipe 
                    </label>

                    <select v-model="this.form.nom_equipe1" 
            id="nom_equipe1" name="nom_equipe1" 
            required 
            class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow">
            <option value="">Choisissez une équipe</option>
                      <option
                        v-for="team in this.equipes"
                        :key="team.id"
                        :value="team.nom_equipe"
                        :label="team.nom_equipe"
                      />
                    </select>
                  </div>

      </form>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
        <button
          class="boutton-click active:bg-blueGray-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
          type="button"
          style="padding-right: 0.7rem; padding-left: 0.7rem"
          v-on:click="submit()"
        >
          confirmer
        </button>

        <button
          class="boutton-annuler bg-blueGray-500 text-blueGray-400 active:bg-red-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
          type="button"
          style="padding-right: 0.7rem; padding-left: 0.7rem"
          v-on:click="annuler()"
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
            stade_id: 0,
            nom_event: "",
            type_event : "",
            date_debut: "",
            date_fin: "",
            heure_debut : "",
            heure_fin : "",
            type_match : "",
            equipe1_id: null,
            equipe2_id: null,
          },
          equipes:[],
          stades:[],
      }},

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
    submit: async function() {
        let token = localStorage.getItem("userToken");
        console.log(this.form);
        await axios.post("http://127.0.0.1:8000/api/events",this.form,{headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }}).then((result) => {
        this.$swal({
          icon: 'succes',
          title: 'Ajout avec succé',
          showConfirmButton: true,
          timer: 70000
        })
        console.log(result.data);
      }).catch(err => this.$swal({
        icon: 'warning',
        title: err.message,
        showConfirmButton: true,
        timer: 70000
      }));
      },
      async annuler () {
        window.location.href = '/admin/events'; 
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
  },
  mounted() {
    this.getStades();
    this.getEquipes();
  }
};
</script>
