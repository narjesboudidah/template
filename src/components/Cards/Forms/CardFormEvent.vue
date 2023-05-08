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
              for="type-event"
            >
              Type event :
            </label>
            <select
              id="type-event"
              name="type-event"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            >
              <option value="" disabled selected>Entraînement</option>
              <option value="1">Match</option>
              <option value="2">Evénements spéciaux</option>
            </select>
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
              for="nom-event"
            >
              Nom Event :
            </label>
            <input
              type="text"
              id="nom-event"
              name="nom-event"
              placeholder="Nom Event"
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
              for="nom-stade"
            >
              Nom du Stade:
            </label>
            <select
              v-model="selectedStade"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            >
              <option value="">Choisissez un stade</option>
              <option v-for="stade in stades" :key="stade" :value="stade">
                {{ stade }}
              </option>
            </select>
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              for="date-debut-competition"
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
            >
              Date début:
            </label>
            <input
              type="date"
              id="date-debut-competition"
              name="date-debut-competition"
              placeholder="Date début de compétition"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              aria-describedby="date-debut-competition-helper"
              min="{{ new Date().toISOString().slice(0, 10) }}"
            />
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              for="date-fin-competition"
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
            >
              Date fin:
            </label>
            <input
              type="date"
              id="date-fin-competition"
              name="date-fin-competition"
              placeholder="Date fin de compétition"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              aria-describedby="date-fin-competition-helper"
              min="{{ new Date().toISOString().slice(0, 10) }}"
              onchange="validateDate()"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              for="date-debut-Event"
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
            >
              Heure début:
            </label>
            <input
              type="time"
              id="heure-debut-Event"
              name="heure-debut-Event"
              placeholder="heure-debut-event"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              aria-describedby="Heure-debut-Event-helper"
            />
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              for="Heure-fin-Event"
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
            >
              Heure fin:
            </label>
            <input
              type="time"
              id="Heure-fin-Event"
              name="Heure-fin-Event"
              placeholder="Heure fin de event"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              aria-describedby="Heure-fin-Event-helper"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
              for="type-match"
            >
              Type du Match :
            </label>
            <div class="flex justify-between">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio"
                  name="type-match"
                  value="national"
                
                />
                <span class="ml-2">National</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio"
                  name="type-match"
                  value="international"
                 
                />
                <span class="ml-2">International</span>
              </label>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
              for="nom-equipe1"
            >
              Nom de l'équipe 1 :
            </label>
            <select
              id="nom-equipe1"
              name="nom-equipe1"
              
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              v-model="selectedTeam"
            >
              <option value="">Choisissez une équipe</option>
              <option v-for="team in teams" :key="team.id" :value="team.nom">
                {{ team.nom }}
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
              id="nom-equipe2"
              name="nom-equipe2"
             
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              v-model="selectedTeam"
            >
              <option value="">Choisissez une équipe</option>
              <option v-for="team in teams" :key="team.id" :value="team.nom">
                {{ team.nom }}
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
export default {
  methods: {
    validateDate() {
      const startDateInput = document.querySelector("#date-debut-competition");
      const endDateInput = document.querySelector("#date-fin-competition");
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
  },
};
</script>
