<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Stade</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Informations sur le stade</h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="nom-stade">
              Nom du stade :
            </label>
            <input
              v-model="form.nom"
              type="text"
              id="nom-stade"
              name="nom-stade"
              :placeholder="this.stade.nom"
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="pays-stade">
              Pays du stade :
            </label>
            <input
              v-model="form.pays"
              type="text"
              id="pays-stade"
              name="pays-stade"
              :placeholder="this.stade.pays"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="adresse-stade">
              Adresse du stade :
            </label>
            <input
              v-model="form.adresse"
              type="text"
              id="adresse-stade"
              name="adresse-stade"
              :placeholder="this.stade.adresse"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="capacite-stade">
              Capacité du stade :
            </label>
            <input
              v-model="form.capacite"
              type="text"
              id="capacite-stade"
              name="capacite-stade"
              :placeholder="this.stade.capacite"
              required
              min="1"
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="surface-stade">
              Surface du stade :
            </label>
            <input
              v-model="form.surface"
              type="text"
              id="surface-stade"
              name="surface-stade"
              :placeholder="this.stade.surface"
              required
              min="1"
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="proprietaire-stade">
              Propriétaire du stade :
            </label>
            <input
              v-model="form.proprietaire"
              type="text"
              id="proprietaire-stade"
              name="proprietaire-stade"
              :placeholder="this.stade.proprietaire"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="telephone">
              Téléphone :
            </label>
            <input
              v-model="form.telephone"
              type="tel"
              id="telephone"
              name="telephone"
              :placeholder="this.stade.telephone"
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="image">
              Image du stade :
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="description-stade">
              Description du stade :
            </label>
            <textarea
              v-model="form.description"
              id="description-stade"
              name="description-stade"
              :placeholder="this.stade.description"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            ></textarea>
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="date-dernier-travaux">
              Date dernier travaux :
            </label>
            <input
              v-model="form.date_dernier_travaux"
              type="date"
              id="date-dernier-travaux"
              name="date-dernier-travaux"
              :placeholder="this.stade.date_dernier_travaux"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="etat">
              État :
            </label>
            <select v-model="form.etat" class="w-full">
              <option value="disponible" :selected="form.etat === 'disponible'">disponible</option>
              <option value="reserver" :selected="form.etat === 'reserver'">reserver</option>
              <option value="en maintenance" :selected="form.etat === 'en maintenance'">en maintenance</option>
            </select>
          </div>
        </div>
      </form>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-center mt-8">
        <button
          class="boutton-click active:bg-blueGray-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
          type="button"
          style="padding-right: 0.7rem; padding-left: 0.7rem"
          @click="submit"
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
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/stade';

export default {
  data() {
    return {
      form: {
        nom: '',
        pays: '',
        proprietaire: '',
        telephone: '',
        adresse: '',
        etat: 'disponible',
        description: '',
        capacite: 0,
        surface: 0,
        date_dernier_travaux: ''
      },
      stade: {}
    };
  },
  methods: {
    submit: async function() {
  let id = this.$route.params.id;
  let token = localStorage.getItem('userToken');
  console.log(this.form);
  let response; // Déclaration de la variable response
  try {
    if (id >= 1) {
      response = await axios.put(`${API_URL}/${id}`, this.form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      response = await axios.post("http://127.0.0.1:8000/api/stades", this.form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    this.$swal({
      icon: 'success',
      title: 'Ajout avec succès',
      showConfirmButton: false,
      timer: 1000
    });
    console.log(response.data);
  } catch (error) {
    this.$swal({
      icon: 'warning',
      title: error.message,
      showConfirmButton: false,
      timer: 1000
    });
  }
}
,
    annuler: async function() {
      window.location.href = '/admin/stades';
    },
    async getStade() {
      let id = this.$route.params.id;
      try {
        const token = localStorage.getItem('userToken');
        const headers = { Authorization: `Bearer ${token}` };

        const response = await axios.get(`${API_URL}/${id}`, { headers });
        this.stade = response.data.data;
        console.log(this.stade);

        // Assigner les valeurs récupérées à this.form
        this.form = {
          nom: this.stade.nom,
          pays: this.stade.pays,
          proprietaire: this.stade.proprietaire,
          telephone: this.stade.telephone,
          adresse: this.stade.adresse,
          etat: this.stade.etat,
          description: this.stade.description,
          capacite: this.stade.capacite,
          surface: this.stade.surface,
          date_dernier_travaux: this.stade.date_dernier_travaux
        };
      } catch (error) {
        console.error(error);
        // Afficher un message d'erreur approprié ici
      }
    }
  },
  mounted() {
    this.getStade();
  }
};
</script>