<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-lg bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Maintenance</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Informations sur la maintenance
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              for="date-debut-maintenance"
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
            >
              Date début:
            </label>
            <input 
              v-model="this.form.date_debut"
              type="date"
              id="date-debut-maintenance"
              name="date-debut-maintenance"
              placeholder="Date début maintenance"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              aria-describedby="date-debut-maintenance-helper"
              min="{{ new Date().toISOString().slice(0, 10) }}"
            />
          </div>
        <div class="w-full lg:w-6/12 px-4 mb-3">
          <label
            for="heure-debut-maintenance"
            class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
          >
            Heure début:
          </label>
          <input
            v-model="this.form.heure_debut"
            type="time"
            id="heure-debut-Maintenance"
            name="heure-debut-Maintenance"
            placeholder="Heure début maintenance"
            required
            class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            aria-describedby="heure-debut-maintenance-helper"
          />
        </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
            for="date-fin-maintenance"
            class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
            >
            Date fin:
          </label>
          <input 
           v-model="this.form.date_fin"
          type="date"
          id="date-fin-maintenance"
          name="date-fin-maintenance"
          placeholder="Date fin de maintenance"
          required
          class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
          aria-describedby="date-fin-maintenance-helper"
          />
        </div>
          
        
        <div class="w-full lg:w-6/12 px-4 mb-3">
          <label
            for="heure-fin-maintenance"
            class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
          >
            Heure fin:
          </label>
          <input
            v-model="this.form.heure_fin"
            type="time"
            id="heure-fin-Maintenance"
            name="heure-fin-Maintenance"
            placeholder="Heure fin maintenance"
            required
            class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            aria-describedby="heure-fin-maintenance-helper"
          />
        </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
              for="Etat"
            >
              Etat :
            </label>
            <select
              v-model="selectedetat"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            >
              <option >moyen</option>
              <option >urgent</option>
            </select>
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="description"
              >
                Description :
              </label>
              <textarea 
               v-model="this.form.description"
                id="description"
                name="description"
                placeholder="Description"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              ></textarea>
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
              for="nom"
            >
              Nom du Stade:
            </label>
            <select
              v-model="this.form.stade_id"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            >
              <option value="">Choisissez un stade</option>
              <option 
              v-for="team in this.stades"
                        :key="team.id"
                        :value="team.id"
                        :label="team.nom"
              >
              </option>
            </select>
          </div>
          
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
        form : {
          date_debut:"",
          date_fin:"",
          heure_debut : "",
          heure_fin : "",
          etat: "",
          description : "",
          stade_id: "",
        },
        stades : []
      }
    },
  methods: {
    async getStades () {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/stades",{headers: {
        'Authorization': `Bearer ${token}`
      }}).then((response) => {
        this.stades = response.data.data;
      }).catch(err => console.log(err))
    },

    validateDate() {
      const startDateInput = document.querySelector("#date-debut-maintenance");
      const endDateInput = document.querySelector("#date-fin-maintenance");
      const startDate = new Date(startDateInput.value);
      const endDate = new Date(endDateInput.value);

      if (endDate < startDate) {
        endDateInput.setCustomValidity(
          "La date de fin doit être supérieure à la date de début."
        );
      } else {
        endDateInput.setCustomValidity("");
      }
    },
   
    submit: async function() {
    let token = localStorage.getItem("userToken");
    console.log(this.form);
    await axios.post("http://127.0.0.1:8000/api/maintenances",this.form,{headers: {
      'Authorization': `Bearer ${token}`
    }}).then((result) => {
      if (result.status != 201){
        console.log("error");
        return;
      }
    })
  },
},  
mounted() {
  this.getStades();
}
};
</script>