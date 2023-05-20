<template>
  <div>
    <navbar />
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0)"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                  <div class="relative">
                    <img
                      alt="..."
                      :src="team2"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div class="icon-profile">
                  <router-link to="/admin/settings">
                    <span class="material-symbols-outlined"> arrow_back </span>
                  </router-link>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >
                  {{ this.user.nom }} {{ this.user.prenom }}
                </h3>
                <div v-if="userRole === 'Admin Federation'"
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold uppercase"
                >
                  <i class="fas fa-user mr-2 text-lg text-blueGray-400"></i>
                  Admin Fédération
                </div>
                <div v-if="userRole === 'Admin Equipe'"
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold uppercase"
                >
                  <i class="fas fa-user mr-2 text-lg text-blueGray-400"></i>
                  Admin Equipe
                </div>
                <div v-if="userRole === 'Admin Ste'"
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold uppercase"
                >
                  <i class="fas fa-user mr-2 text-lg text-blueGray-400"></i>
                  Admin Ste
                </div>
              </div>
              <div class="mt-10 py-10 border-blueGray-200 text-center">
                <form>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4 mb-3">
                      <label
                        class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                        for="nom"
                      >
                        Nom :
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        :placeholder="user.nom"
                        v-model="form.nom"
                        class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
                      />
                    </div>
                    <div class="w-full lg:w-6/12 px-4 mb-3">
                      <label
                        class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                        for="prenom"
                      >
                        Prénom :
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        :placeholder="user.prenom"
                        v-model="form.prenom"
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
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        :placeholder="user.telephone"
                        v-model="form.telephone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
                      />
                    </div>
                    <div class="w-full lg:w-6/12 px-4 mb-3">
                      <label
                        class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                        for="email"
                      >
                        Email :
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        :placeholder="user.email"
                        v-model="form.email"
                        class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
                      />
                    </div>

                    <div class="w-full lg:w-6/12 px-4 mb-3">
                      <label
                        class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
                        for="adresse"
                      >
                        Adresse :
                      </label>
                      <input
                        type="text"
                        id="adresse"
                        name="adresse"
                        :placeholder="this.user.adresse"
                        v-model="form.adresse"
                        class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
                      />
                    </div>
                  </div>
                </form>
                <div
                  class="relative w-full px-4 max-w-full flex-grow flex-1 text-center"
                  style="margin-top: 1rem"
                >
                  <button
                    class="boutton-click active:bg-blueGray-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
                    type="button"
                    style="padding-right: 0.7rem; padding-left: 0.7rem"
                    v-on:click="submit()"
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>
<script>
import team2 from "@/assets/img/Real-Madrid.png";
import axios from "axios";

export default {
  data() {
    return {
      team2,
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
      userRole: '',
    };
  },
  methods: {
    async submit() {
  try {
    const token = localStorage.getItem("userToken");
    console.log(this.form);
    const response = await axios.put(
      "http://127.0.0.1:8000/api/userUpdate",
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
    console.error(error);

    this.$swal({
      icon: "warning",
      title: error.message,
      showConfirmButton: false,
      timer: 5500,
    });
  }
},

    async getUser() {
      try {
        const token = localStorage.getItem("userToken");
        const headers = { Authorization: `Bearer ${token}` };

        const response = await axios.get("http://127.0.0.1:8000/api/usershow", { headers });

        this.user = response.data.data;
        this.fillForm();
      } catch (error) {
        console.error(error);
      }
    },
    async getUserRole() {
      try {
        const token = localStorage.getItem("userToken");
        const headers = { Authorization: `Bearer ${token}` };

        const response = await axios.get("http://127.0.0.1:8000/api/user", { headers });

        this.userRole = response.data.role;
      } catch (error) {
        console.log(error);
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
    this.getUserRole();
    this.getUser();
  },
  components: {
    // Importez et enregistrez les composants navbar et footer-component ici
  },
};
</script>
