<template>
  <div>
    <div class="relative pt-16 pb-32 min-h-screen-75">
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style="
          background-image: url('https://images.unsplash.com/photo-1592340393531-6caf7789fc10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80');
        "
      >
      <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div
        class="absolute top-0 w-full h-full flex justify-center items-center"
      >
        <div class="w-full lg:w-4/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-tea-200"
          >
            <div class="flex-auto p-15 lg:p-10">
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <img
                  alt="..."
                  :src="photo"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                  <h3 class="text-blueGray-200 text-xl font-bold">
                    Bienvenue sur <b style="color:#77a30b">PlanStadium</b> !
                  </h3>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div  class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form @submit.prevent="submit" >
                  <div class="relative w-full mb-3">
                    <label  style="color:#6e8b27;"
                      class="block uppercase  text-xs font-bold mb-2"
                      htmlFor="grid-password"
                      for="email"
                    >
                      Email
                    </label>
                    <input style="background-color:#c6d1a9;"
                      type="email" 
                      class="border-0 px-3 py-3 placeholder-kaki  bg-blueGray-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      v-model="form.email"
                    />
                    <span class="error" style="color:red;" v-if="errors.email">{{errors.email }}</span>
                  </div>

                  <div class="relative w-full mb-3">
                    <label style="color:#6e8b27;"
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                      for="password"
                    >
                      Password
                    </label>
                    <input  style="background-color:#c6d1a9;"
                      type="password"
                      class="border-0 px-3 py-3 placeholder-kaki bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      v-model="form.password"
                    />
                    <span class="error" style="color:red;" v-if="errors.password">{{ errors.password }}</span>
                  </div>

                  <div class="text-center mt-6">
                    <button 
                      class="text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      style="background-color: #77a30b;"
                      v-on:click="submit()"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// axios imported to link front with back 
import axios from "axios";
import photo from "@/assets/img/photo.png";
//const router = useRouter();
export default {
  data(){
    return{
      form: {
        email: "",
        password: ""
      },  
      photo,
      errors: {} // Objet pour stocker les erreurs de validation
    };
  },
  methods: {
    //async to make synchronisation 
    submit: async function() {
      this.errors = {}; // Réinitialisation des erreurs de validation
       // Validation des champs
    if (!this.form.email) {
      this.errors.email = "Veuillez saisir une valide adresse e-mail.";
    }

    if (!this.form.password) {
      this.errors.password = "Veuillez saisir un mot de passe.";
    }

    // Si des erreurs de validation existent, arrêtez l'exécution
    if (Object.keys(this.errors).length > 0) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/login", this.form);
      const userToken = response.data.token;

      localStorage.setItem("userToken", userToken);

      // Rediriger vers le dashboard après la connexion réussie
      this.$router.push("/admin/dashboard");

      // Afficher le jeton utilisateur dans la console
      console.log(userToken);
    } catch (error) {
      console.log(error.message);
      // Gérer les erreurs de connexion ici
    }
  }
}
};
</script>

<style scoped>
.min-h-screen-75 {
  height: calc(100vh - 0rem);
  min-height: 24rem;
}
</style>