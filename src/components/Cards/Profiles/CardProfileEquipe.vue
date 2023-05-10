<template>
    <div>
      <main class="profile-page">
        <section style="height: 18rem;" class="relative block">
          
        </section>
        <section class="relative py-17 ">
          <div class="container mx-auto px-4">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
            >   
                <div class="flex flex-wrap justify-center">
                  <div class="items-center flex flex-wrap">
                    <div class=" object-cover">
                      <img
                        alt="..."
                        class="rounded-lg shadow-xl"
                        src="https://images.pexels.com/photos/3571569/pexels-photo-3571569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      />
                    </div>
                    <div
                      style="margin:1rem; margin-left:5rem;"
                      class="w-full md:w-5/12 ml-auto mr-auto px-2"
                    >
                      <div class="md:pr-12">
                        <h3 class="text-3xl font-semibold">{{ equipe.nom_equipe }}</h3>
                        <p class="mt-4 text-lg leading-relaxed text-blueGray-700">
                          {{ equipe.description }}
                        </p>
                        <ul class="list-none mt-6">
                          <li class="py-2">
                            <div class="flex items-center">
                              <div>
                                <span
                                  class="material-symbols-outlined icon-sidebar-click1"
                                >
                                  person
                                </span>
                              </div>
                              <div>
                                <h4 class="text-blueGray-700">  
                                  Admin Equipe : *****
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li class="py-2">
                            <div class="flex items-center">
                              <div>
                                <span
                                  class="material-symbols-outlined icon-sidebar-click1"
                                >
                                pin_drop
                                </span>
                              </div>
                              <div>
                                <h4 class="text-blueGray-700 text-l">
                                  Adresse : {{ equipe.adresse }}
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li class="py-2">
                            <div class="flex items-center">
                              <div>
                                <span
                                  class="material-symbols-outlined icon-sidebar-click1"
                                >
                                location_city
                                </span>
                              </div>
                              <div>
                                <h4 class="text-blueGray-700">Pays : {{ equipe.pays }}</h4>
                              </div>
                            </div>
                          </li>
                          <li class="py-2">
                            <div class="flex items-center">
                              <div>
                                <span
                                  class="material-symbols-outlined icon-sidebar-click1"
                                >
                                language
                                </span>
                              </div>
                              <div>
                                <h4 class="text-blueGray-700">Site Web :  {{ equipe.site_web }}</h4>
                              </div>
                            </div>
                          </li>
                          <li class="py-2">
                            <div class="flex items-center">
                              <div>
                                <span
                                  class="material-symbols-outlined icon-sidebar-click1"
                                >
                                groups
                                </span>
                              </div>
                              <div>
                                <h4 class="text-blueGray-700">Type Equipe :  {{ equipe.type_equipe }}</h4>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  <script>
  import team2 from "@/assets/img/stadium.jpg";
  import axios from "axios";
  export default {
    data() {
      return {
        team2,
        equipe :{},
      };
    },
    components: {},
    methods: {
      async getEquipe() {
        let id = this.$route.params.id;
        let token = localStorage.getItem("userToken");
        await axios.get(`http://127.0.0.1:8000/api/equipe/${id}`,{headers: {
          'Authorization': `Bearer ${token}`
        }}).then((response) => {
          this.equipe = response.data.data;
        }).catch(err => console.log(err))
      }
    }, 
    mounted() {
      this.getEquipe();
    }
  };
  </script>
  