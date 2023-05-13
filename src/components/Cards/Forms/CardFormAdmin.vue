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
            <input v-model="this.form.nom" type="text" id="nom-admin" name="nom-admin" placeholder="Nom de l'admin"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="prenom-admin">
              Prénom de l'admin :
            </label>
            <input v-model="this.form.prenom" type="text" id="prenom-admin" name="prenom-admin"
              placeholder="Prénom de l'admin" required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="telephone">
              Téléphone :
            </label>
            <input v-model="this.form.telephone" type="tel" id="telephone" name="telephone" placeholder="Téléphone"
              required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="email">
              Email :
            </label>
            <input v-model="this.form.email" type="email" id="email" name="email" placeholder="Email" required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>

          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="adresse">
              Adresse :
            </label>
            <input v-model="this.form.adresse" type="text" id="adresse" name="adresse" placeholder="Adresse" required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="mot-de-passe">
              Mot de passe :
            </label>
            <input v-model="this.form.password" type="password" id="mot-de-passe" name="mot-de-passe"
              placeholder="Mot de passe" required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow" />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4 mb-3">
          <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="role">
            Role de l'admin :
          </label>
          <select v-model="this.form.role" id="role" name="role" required
            class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow">
            <option value="" disabled selected>
              Sélectionnez Role de l'admin
            </option>
            <option>Admin Federation</option>
            <option>Admin Equipe</option>
            <option>Admin Ste</option>
          </select>
        </div>
        <div class="w-full">
          <label class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2" for="permissions">
            Permissions de l'admin :
          </label>
          <select v-model="this.form.permissions" v-on:change="handlePermissions($event)" multiple id="permissions"
            name="permissions" required
            class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow">
            <option disabled>Vous pouvez sélectionner plusieurs options en maintenant la touche Ctrl (ou Commande)
              enfoncée et en cliquant sur les options souhaitées</option>
            <option v-for="permission in this.permissions" :key="permission" :value="permission">
              {{ permission }}
            </option>
          </select>
        </div>
      </form>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
        <button
          class="boutton-click active:bg-blueGray-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
          type="button" style="padding-right: 0.7rem; padding-left: 0.7rem" v-on:click="submit()">
          confirmer
        </button>

        <button
          class="boutton-annuler bg-blueGray-300 text-blueGray-400 active:bg-red-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
          type="button" style="padding-right: 0.7rem; padding-left: 0.7rem">
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
      permissions: ["Consulter Events",
        "Consulter Event",
        "Ajout Event",
        "Modifier Event",
        "Supprimer Event",
        "Consulter Users",
        "Consulter User",
        "Ajout User",
        "Modifier User",
        "Supprimer User",
        "Consulter Maintenances",
        "Consulter Maintenance",
        "Ajout Maintenance",
        "Modifier Maintenance",
        "Supprimer Maintenance",
        "Confirmer Maintenance",
        "Annuler Maintenance",
        "Consulter Equipes",
        "Consulter Equipe",
        "Ajout Equipe",
        "Modifier Equipe",
        "Supprimer Equipe",
        "Consulter Matchs",
        "Consulter Match",
        "Ajout Match",
        "Modifier Match",
        "Supprimer Match",
        "Consulter Stes",
        "Consulter Ste",
        "Ajout Ste",
        "Modifier Ste",
        "Supprimer Ste",
        "Consulter Stades",
        "Consulter Stade",
        "Ajout Stade",
        "Modifier Stade",
        "Supprimer Stade",
        "Consulter Permissions",
        "Consulter Permission",
        "Ajout Permission",
        "Modifier Permission",
        "Supprimer Permission",
        "Consulter Roles",
        "Consulter Role",
        "Ajout Role",
        "Modifier Role",
        "Supprimer Role",
        "Consulter Competitions",
        "Consulter Competition",
        "Ajout Competition",
        "Modifier Competition",
        "Supprimer Competition",
        "Consulter Reservations",
        "Consulter Reservation",
        "Ajout Reservation",
        "Modifier Reservation",
        "Supprimer Reservation",
        "Confirmer Reservation",
        "Annuler Reservation",
        "Consulter Historiques"],
      roles: ["Admin fédération", "Admin équipe", "Admin ste"],
      form: {
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        adresse: "",
        password: "",
        permissions: [],
        role: "",
      }
    }
  },

  methods: {
    handlePermissions: function (event) {
      this.form?.permissions?.push(event.target.value);
      console.log(this.form);
    },
    submit: async function () {
      this.$swal({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})
      let token = localStorage.getItem("userToken");
      console.log(this.form);
      await axios.post("http://127.0.0.1:8000/api/users", this.form, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((result) => {
        // if (result.status != 201) {
        //   console.log("error");
        //   return;
        // }
        console.log(result.data);
      }).catch(err => console.log(err.message));
    }
  }
};
</script>
