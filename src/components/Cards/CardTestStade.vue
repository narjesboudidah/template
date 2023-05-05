<template>
    <div>
      <main class="profile-page">
        <section class="relative block h-350-px">
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style="
              background-image: url('https://images.pexels.com/photos/46792/the-ball-stadion-football-the-pitch-46792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
              border-radius: 1rem;
            "
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-50 bg-black"
              style="border-radius: 1rem;"
            ></span>
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style="transform: translateZ(0);border-radius: 1rem;"
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
                      style="margin:2rem; margin-left:10rem;"
                      class="w-full md:w-5/12 ml-auto mr-auto px-4"
                    >
                      <div class="md:pr-12">
                        <h3 class="text-3xl font-semibold">{{ stade.nom }}</h3>
                        <p class="mt-4 text-lg leading-relaxed text-blueGray-700">
                          {{ stade.description }}
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
                                  Directeur Général : {{ stade.proprietaire }}
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
                                  call
                                </span>
                              </div>
                              <div>
                                <h4 class="text-blueGray-700 text-l">
                                  Phone : {{ stade.telephone }}
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
                                <h4 class="text-blueGray-700">Pays : {{ stade.pays }}</h4>
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
                                <h4 class="text-blueGray-700">Capacite : {{ stade.capacite || '00'}}</h4>
                              </div>
                            </div>
                          </li>
                          <li class="py-2">
                            <div class="flex items-center">
                              <div>
                                <span
                                  class="material-symbols-outlined icon-sidebar-click1"
                                >
                                  stadium
                                </span>
                              </div>
                              <div>
                                <h4 class="text-blueGray-700 text-l">
                                  Surface : {{ stade.surface || '00' }}
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
                                  sports_soccer
                                </span>
                              </div>
                              <div>
                                <h4 class="text-blueGray-700">Matchs : 00</h4>
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
        stade :{},
      };
    },
    components: {},
    methods: {
      async getStade() {
        let id = this.$route.params.id;
        let token = localStorage.getItem("userToken");
        await axios.get(`http://127.0.0.1:8000/api/stade/${id}`,{headers: {
          'Authorization': `Bearer ${token}`
        }}).then((response) => {
          this.stade = response.data.data;
        }).catch(err => console.log(err))
      }
    }, 
    mounted() {
      this.getStade();
    }
  };
  </script>
  