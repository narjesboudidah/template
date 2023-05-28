<template>
  <div style="margin-top: 5rem;">
  <div 
    class="relative break-words bg-white shadow-lg rounded"
    style="
      border-radius: 1rem;
      padding: 1rem;
      width: 1110px;
      height: 550px;
      margin-left: 7.5rem;
    "
  >
  <div style="display: flex;">
    <div class="px-4" style="width: 10rem;">
      <select
        v-model="selectedStade"
        id="nom"
        name="nom"
        class="border-2 w-full border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded-md text-sm shadow"
        @change="getEvents(); getMaintenances(); getMatchs()"
      >
        <option value="" disabled>Stade</option>
        <option
          v-for="team in stades"
          :key="team?.id"
          :value="team?.id"
          :label="team?.nom"
        />
      </select>

    </div>
      </div>
    <div class="wrapper">
      <div class="calendar-header">
        <button class="prev-btn" @click="previousMonth">&lt;</button>
        <h2 class="current-month">{{ currentMonth }}</h2>
        <button class="next-btn" @click="nextMonth">&gt;</button>
      </div>
      <table class="calendar-table">
        <thead>
          <tr style="background-color: #fff;color: #63c132;">
            <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="week in weeks" :key="week">
        <td style="border: none; padding: 1rem;" v-for="day in week" :key="day" @click="selectDate(day); fetchEvents(); fetchMatchs(); fetchMaintenances();">
          <div :id="'day-' + currentMonth + '-' + day">
            <div :style="{ 'background-color': getDateBackground(day) }">
              {{ day }}
            </div>
          </div>
        </td>
      </tr>
        </tbody>
      </table>
      
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
                  <h3 class="font-semibold text-base text-blueGray-700" style="color: #63c132;">
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
                    <th style="background-color: #ced4da;color: #fff;"
                      class="px-6  align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
                    >
                      Nom Equipe
                    </th>
                    <th style="background-color: #ced4da;color: #fff;"
                      class="px-6 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
                    >
                    Nom Event
                    </th>
                    <th style="background-color: #ced4da;color: #fff;"
                      class="px-6 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
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
                  <h3 class="font-semibold text-base text-blueGray-700" style="color: #63c132;">
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
                    <th style="background-color: #ced4da;color: #fff;"
                      class="px-6   align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
                    >
                      Nom Ste
                    </th>
                    <th  style="background-color: #ced4da;color: #fff;"
                      class="px-6  align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
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
            <div style="margin: 0.5rem;">
              <div
            class="relative flex flex-col min-w-0 break-words bg-emerald-570 w-full mb-6 shadow-lg rounded"
            style="border-radius: 1rem; max-height: 31.7rem"
          >
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700" style="color: #63c132;">
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
                    <th style="background-color: #ced4da;color: #fff;"
                      class="px-6 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
                    >
                      Heure
                    </th>
                    <th style="background-color: #ced4da;color: #fff;"
                      class="px-6 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
                    >
                    Nom Equipes
                    </th>
                    <th style="background-color: #ced4da;color: #fff;"
                      class="px-6 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
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
          </div>
        </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import $ from 'jquery';

export default {
  data() {
    return {
      currentMonth: '',
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weeks: [],
      selectedDate: '',
      stades: [],
      userRole: '',
      matchs: [],
      events: [],
      maintenances: [],
      LEvents: [],
      LMaintenances: [],
      LMatchs: [],
    };
  },
  methods: {
    async previousMonth() {
      const currentMonth = new Date(this.currentMonth);
      currentMonth.setMonth(currentMonth.getMonth() - 1);
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth() + 1;
      this.currentMonth = `${year}-${month.toString().padStart(2, '0')}`;
      await this.generateWeeks();
    },

    async nextMonth() {
      const currentMonth = new Date(this.currentMonth);
      currentMonth.setMonth(currentMonth.getMonth() + 1);
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth() + 1;
      this.currentMonth = `${year}-${month.toString().padStart(2, '0')}`;
      await this.generateWeeks();
    },

    async selectDate(day) {
      const [year, month] = this.currentMonth.split('-');
      const formattedYear = String(year);
      const formattedMonth = String(month).padStart(2, '0');
      const formattedDay = String(day).padStart(2, '0');
      this.selectedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;
    },

    async generateWeeks() {
      const [year, month] = this.currentMonth.split('-');
      const firstDay = new Date(year, month - 1, 1);
      const lastDay = new Date(year, month, 0);
      const numDays = lastDay.getDate();
      const firstDayIndex = firstDay.getDay();
      const weeks = [];
      let week = [];

      for (let i = 0; i < firstDayIndex; i++) {
        week.push('');
      }

      for (let day = 1; day <= numDays; day++) {
        week.push(day);

        if ((firstDayIndex + day) % 7 === 0) {
          weeks.push(week);
          week = [];
        }
      }

      if (week.length > 0) {
        weeks.push(week);
      }

      this.weeks = weeks;
    },

    async getStades() {
      let token = localStorage.getItem('userToken');
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/stades', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.stades = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getEvents() {
      let token = localStorage.getItem('userToken');
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/events/filterStade/${this.selectedStade}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.LEvents = response.data.data;
        console.log(this.LEvents);
      } catch (err) {
        console.log(err);
      }
    },
    async getMaintenances() {
      let token = localStorage.getItem('userToken');
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/maintenances/filterStade/${this.selectedStade}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.LMaintenances = response.data.data;
        console.log(this.LMaintenances);
      } catch (err) {
        console.log(err);
      }
    },

    async getMatchs() {
      let token = localStorage.getItem('userToken');
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/matchs/filterStade/${this.selectedStade}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.LMatchs = response.data.data;
        console.log(this.LMatchs);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchEvents() {
      let token = localStorage.getItem('userToken');
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/events/filter/${this.selectedDate}/${this.selectedStade}`,
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
      let token = localStorage.getItem('userToken');
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/matchs/filter/${this.selectedDate}/${this.selectedStade}`,
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
      let token = localStorage.getItem('userToken');
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/maintenances/filter/${this.selectedDate}/${this.selectedStade}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.maintenances = response.data.data;
        console.log(this.maintenances);
      } catch (err) {
        console.log(err);
      }
    },

    async getUser() {
      let token = localStorage.getItem('userToken');
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.userRole = response.data.role;
      } catch (err) {
        console.log(err);
      }
    },

    async isDateReserved(day) {
      var currentday=this.currentMonth+'-'+day;
      var selectedDay = new Date(currentday);
      var formattedDate=moment(selectedDay).format("YYYY-MM-DD");
     // console.log('currentday',currentday ,'selectedDay', selectedDay , 'formattedDate', formattedDate);
     // console.log(selectedDay);
     // console.log(formattedDate);


      var isselected=false;
      for (const levent of this.LEvents) {
        
        const eventStartDateDebut = new Date(levent.date_debut);
        const eventEndDateFin = new Date(levent.date_fin);
      const eventStartDate=moment(eventStartDateDebut).format("YYYY-MM-DD");
      const eventEndDate=moment(eventEndDateFin).format("YYYY-MM-DD");
      //console.log('eventStartDate',eventStartDate ,'eventEndDate', eventEndDate , 'formattedDate', formattedDate);
        if (
          formattedDate >= eventStartDate &&
          formattedDate <= eventEndDate &&
          this.selectedStade === levent.stade_id
        ) {
          isselected=true; // Event found, return true
        } // No event found, return false
      }
      if(isselected == true){
        $("#"+currentday).css(
              "background-color",
              "red"
          );
          console.log('red');
        return 'red';
      }else{
        $("#"+currentday).css(
              "background-color",
              "white"
          );
        console.log('white');
        return 'white';
      }
      
    },
  },
  async mounted() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    this.currentMonth = `${year}-${month.toString().padStart(2, '0')}`;

    await this.getStades();
    await this.generateWeeks();
    await this.getUser();
    await this.getEvents();
    await this.getMaintenances();
    await this.getMatchs();
    console.log(this.userRole);
  },
  computed: {
    getDateBackground() {
  return (day) => {
    const currentDay = this.currentMonth + '-' + day;
    const selectedDay = new Date(currentDay);
    const formattedDate = moment(selectedDay).format("YYYY-MM-DD");

    let isEventFound = false;
    let isMaintenanceFound = false;
    let isMatchFound = false;

    for (const levent of this.LEvents) {
      const eventStartDateDebut = new Date(levent.date_debut);
      const eventEndDateFin = new Date(levent.date_fin);
      const eventStartDate = moment(eventStartDateDebut).format("YYYY-MM-DD");
      const eventEndDate = moment(eventEndDateFin).format("YYYY-MM-DD");

      if (
        formattedDate >= eventStartDate &&
        formattedDate <= eventEndDate &&
        this.selectedStade === levent.stade_id
      ) {
        isEventFound = true;
        break; // Sortir de la boucle dès qu'un événement est trouvé
      }
    }

    for (const lmaintenance of this.LMaintenances) {
      const eventStartDateDebut = new Date(lmaintenance.date_debut);
      const eventEndDateFin = new Date(lmaintenance.date_fin);
      const eventStartDate = moment(eventStartDateDebut).format("YYYY-MM-DD");
      const eventEndDate = moment(eventEndDateFin).format("YYYY-MM-DD");

      if (
        formattedDate >= eventStartDate &&
        formattedDate <= eventEndDate &&
        this.selectedStade === lmaintenance.stade_id
      ) {
        isMaintenanceFound = true;
        break; // Sortir de la boucle dès qu'une maintenance est trouvée
      }
    }

    for (const lmatch of this.LMatchs) {
      const eventStartDateDebut = new Date(lmatch.date);
      const eventEndDateFin = new Date(lmatch.date);
      const eventStartDate = moment(eventStartDateDebut).format("YYYY-MM-DD");
      const eventEndDate = moment(eventEndDateFin).format("YYYY-MM-DD");

      if (
        formattedDate >= eventStartDate &&
        formattedDate <= eventEndDate &&
        this.selectedStade === lmatch.stade_id
      ) {
        isMatchFound = true;
        break; // Sortir de la boucle dès qu'une maintenance est trouvée
      }
    }

    if (isMaintenanceFound) {
      return 'Coral';
    } else if (isEventFound) {
      return 'Silver';
    } else if (isMatchFound){
      return 'YellowGreen';
    } else {
      return 'white';
    }
  };
},
  }
};

</script>

