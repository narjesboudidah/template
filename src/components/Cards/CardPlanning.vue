<template>
<div>
  <div
    class="relative break-words bg-white shadow-lg rounded"
    style="border-radius: 1rem;padding: 1rem;width: 1110px;height: 550px;
  margin-left: 7.5rem;"
  >

      <div class="px-4">
                    <select v-model="selectedStade"
                      id="nom"
                      name="nom"
                      @change="fetchEvents(); fetchMatchs(); fetchMaintenances()"
                      class="border-2 w-full border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded-md text-sm shadow"
                    >
                      <option value="" disabled>Stade</option>
                      <option
                        v-for="team in this.stades"
                        :key="team?.id"
                        :value="team?.id"
                        :label="team?.nom"
                      />
                    </select>
    </div>    
    <div class="wrapper">
      <header>
        <div class="icons">
        <span id="prev" class="material-symbols-outlined">chevron_left</span></div>
        <p class="current-date"></p>
        <div class="icons">
          
          <span id="next" class="material-symbols-outlined">chevron_right</span>
        </div>
      </header>
      <div class="calendar">
        <ul class="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul class="days"></ul>
      </div>
    </div>

        <div v-if="userRole === 'Admin Equipe'" 
         class="relative px-4 text-right" style="width: 13rem; position: absolute;
        bottom: 1%;
        left: 50%;
        transform: translate(-50%, 10%);margin-bottom: 1rem;"
        >
      
          <button
            class="icon-sidebar-click mt-4 w-full"
            type="button"
            style="padding-right: 0.7rem; padding-left: 0.7rem"
          >
            <router-link  
              to="/form/FaireReservation"
              v-slot="{ href, navigate, isActive }"
            >
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
                <i class="fas fa-plus mr-2"></i> Faire Reservation
              </a>
            </router-link>
          </button>
        </div>
        <div v-if="userRole === 'Admin Ste'"
        class="relative px-4 text-right" style="width: 13rem; position: absolute;
          bottom: 1%;
          left: 50%;
          transform: translate(-50%, 10%);margin-bottom: 1rem;"
        >
          <button
            class="icon-sidebar-click mt-4 w-full"
            type="button"
            style="padding-right: 0.7rem; padding-left: 0.7rem"
          >
            <router-link 
              to=/form/AjoutMaintenance
              v-slot="{ href, navigate, isActive }"
            >
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
                <i class="fas fa-plus mr-2"></i> Faire Maintenance
              </a>
            </router-link>
          </button>
        </div>
  </div>
    <div class="flex" style="margin-left: 9.5rem;margin-top: 1rem;">
      <div style="margin: 0.5rem;">
        <div
      class="relative flex flex-col min-w-0 break-words bg-emerald-570 w-full mb-6 shadow-lg rounded"
      style="border-radius: 1rem; max-height: 31.7rem"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">
              Liste des evenements 
            </h3>
        </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-6  bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                Nom Equipe
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
              Nom Event
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
              Type Event
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in this.events" :key="event.id">
              <th
                class="px-6  bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                {{ event.equipe1_id }}
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
              {{ event.nom_event }}
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
              {{ event.type_event }}
              </th>
            </tr>
         
          </tbody>
        </table>
      </div>
    </div>
      </div>
      <div style="margin: 0.5rem;">
        <div
      class="relative flex flex-col min-w-0 break-words bg-emerald-570 w-full mb-6 shadow-lg rounded"
      style="border-radius: 1rem; max-height: 31.7rem"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">
              Liste des matchs 
            </h3>
        </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-6  bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                Heure
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
              Nom Equipes
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
              Adresse
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="match in this.matchs" :key="match.id">
              <th
                class="px-6  bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                {{ match.heure }}
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
              {{ match.equipe1_id }} et {{ match.equipe2_id }}
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
              {{ match.competition_id }}
              </th>
            </tr>
         
          </tbody>
        </table>
      </div>
    </div>
      </div>
      <div style="margin: 0.5rem;">
        <div
      class="relative flex flex-col min-w-0 break-words bg-emerald-570 w-full mb-6 shadow-lg rounded"
      style="border-radius: 1rem; max-height: 31.7rem"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">
              Liste des maintenances 
            </h3>
        </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-6  bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                Nom Ste
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
              Etat
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="maintenance in this.maintenances" :key="maintenance.id">
              <th
                class="px-6  bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
                {{ maintenance.admin_ste_id }}
              </th>
              <th
                class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
              >
              {{ maintenance.etat }}
              </th>
            </tr>
         
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </div>

</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedStade: null,
      stades : [],
      userRole: '',
      matchs : [],
      events : [],
      maintenances : [],
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
    
    async fetchEvents() {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events/filterStade/${this.selectedStade}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.events = response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
   async fetchMatchs() {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/matchs/filterStade/${this.selectedStade}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.matchs = response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
   async fetchMaintenances() {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/maintenances/filterStade/${this.selectedStade}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.maintenances = response.data.data;
    } catch (err) {
      console.log(err);
    }
  },
    async getUser() {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
      }).then((result) => {
        this.userRole = result.data.role;

      }).catch((err) => {
          console.log(err);
      })
    }
    },
  mounted() {
    const currentDate = document.querySelector(".current-date");
    const daysTag = document.querySelector(".days");
    const prevNextIcon = document.querySelectorAll(".icons span");
    let date = new Date();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();

    const months = [
      "Janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ];

    const renderCalendar = () => {
      let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(
          currYear,
          currMonth,
          lastDateofMonth
        ).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
      let liTag = "";

      for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      }

      for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday =
          i === date.getDate() &&
          currMonth === new Date().getMonth() &&
          currYear === new Date().getFullYear()
            ? "active"
            : "";
        liTag += `<li class="${isToday}">${i}</li>`;
      }

      for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
      }

      currentDate.innerText = `${months[currMonth]} ${currYear}`;
      daysTag.innerHTML = liTag;
    };
    renderCalendar();

    prevNextIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
          date = new Date(currYear, currMonth);
          currYear = date.getFullYear();
          currMonth = date.getMonth();
        } else {
          date = new Date();
        }
        renderCalendar();
      });
    });
    this.getStades();
   this.getUser();
   console.log(this.userRole);
  },
};
</script>