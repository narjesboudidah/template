<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold">
            Société de maintenance
          </h6>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Informations sur la Société de maintenance
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="nom-societe-maintenance"
              >
                Nom de la Société de maintenance :
              </label>
              <input 
                v-model="form.nom"
                type="text"
                id="-nom-societe-maintenance"
                name="nom-societe-maintenance"
                :placeholder="this.ste.nom"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="adresse-societe-maintenance"
              >
                Adresse de la Société de maintenance :
              </label>
              <input  v-model="form.adresse"
                type="text"
                id="adresse-societe-maintenance"
                name="adresse-societe-maintenance"
                :placeholder="this.ste.adresse"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="telephone"
              >
                Téléphone :
              </label>
              <input  v-model="form.tel"
                type="string"
                id="telephone"
                name="telephone"
                :placeholder="this.ste.tel"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
  
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="logo"
              >
                Logo de la Société de maintenance :
              </label>
              <input
                type="file"
                v-on:change="handleFileChange"
                id="logo"
                name="logo"
                accept="logo/*"
                :placeholder="this.ste.logo"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="email-societe-maintenance"
              >
                Email de la Société de maintenance :
              </label>
              <input 
                v-model="form.email"
                type="email"
                id="email-societe-maintenance"
                name="email-societe-maintenance"
                :placeholder="this.ste.email"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              />
            </div>
            <div class="w-full lg:w-6/12 px-4 mb-3">
              <label
                class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                for="description-ste"
              >
                Description de Ste :
              </label>
              <textarea  
                v-model="form.description"
                id="description-ste"
                name="description-ste"
                :placeholder="this.ste.description"
                required
                class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
              ></textarea>
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
            @click="submit()"
           >
          Confirmer
        </button>
       
        <button
          class=" boutton-annuler bg-blueGray-500 text-blueGray-400 active:bg-red-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear "
          type="button"  
          style="padding-right: 0.7rem; padding-left: 0.7rem"
          @click="annuler()"
        >
          Annuler
        </button>
         </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  const API_URL = 'http://127.0.0.1:8000/api/societeMaintenance';
  export default {
    data() {
        return{
          form : {
            nom: "",
            adresse: "",
            tel: "",
            email: "",
            description: "",
            logo: "storage/images/fqHHRpLroSjOfhKfuGSY76nFNrhJVLYP9858mXJB.jpg",
          },
          ste: {}
      }},
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
              response = await axios.post("http://127.0.0.1:8000/api/societeMaintenances", this.form, {
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
        },
      
      handleFileChange(ste) {
        this.form.logo = ste.target.files[0];
      },
      async annuler () {
        window.location.href = '/admin/ste'; 
      },
      async getSte() {
      let id = this.$route.params.id;
      try {
        const token = localStorage.getItem('userToken');
        const headers = { Authorization: `Bearer ${token}` };

        const response = await axios.get(`http://127.0.0.1:8000/api/societeMaintenance/${id}`, { headers });
        this.ste = response.data.data;
        console.log(this.ste);

        // Assigner les valeurs récupérées à this.form
        this.form = {
          nom: this.ste.nom,
          adresse: this.ste.adresse,
          tel: this.ste.tel,
          logo: this.ste.logo,
          email: this.ste.email,
          description: this.ste.description,
        };
      } catch (error) {
        console.error(error);
        // Afficher un message d'erreur approprié ici
      }
    }
    } ,
    mounted() {
    this.getSte();
  }
  }
  </script>