<template>
    <div
      class="cadre-pointu relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
      style="border-radius: 1rem; height: 21rem"
    >
      <div class="text-center justify-center mt-20">
        <router-link 
        to="/form/AjoutCompetition"
        v-slot="{ href, navigate, isActive }">
          <a
            style="font-family: inherit, serif; font-size: 15px"
            :href="href"
            @click="navigate"
            class=""
            :class="[
              isActive
                ? 'box-sidebar hover:text-red-600 '
                : 'hover:text-blueGray-500',
            ]"
          >
            <img
              alt="..."
              :src="gearlogo"
              style="border: 0.5rem solid #fff; margin-left: 11.5rem;"
            />
  
            <h3
              class="text-xl font-arial leading-normal text-blueGray-700 "
            >
              Ajouter Compétition
            </h3>
          </a></router-link
        >
      </div>
    </div>
  </template>
  <script>
  import gearlogo from "@/assets/img/icons8-plus-64.png";
  
  export default {
    data() {
      return {
        gearlogo,
      };
    },
  };
  </script>
  