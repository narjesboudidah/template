<template>
  <div
    class="relative flex min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
    style="border-radius: 1rem; max-height: 31.7rem"
  >
    <div class="wrapper">
      <header>
        <p class="current-date"></p>
        <div class="icons">
          <span id="prev" class="material-symbols-outlined">chevron_left</span>
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
    <div style="width: 22rem;max-height: 27rem;margin: 1rem;border-radius: 1rem;padding-top: 1.5rem;padding-bottom: 1.5rem;">
      <!-- Projects table -->
      <table class="items-center w-full">
       
        <tbody>
          <tr>
            <td  style="border:1px solid #fff;"
              class="px-6 align-middle py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              12:30
            </td>
            <td  style="border:1px solid #fff;"
              class="px-6 align-middle py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              match
            </td>
          </tr>
          <tr>
            <td  style="border:1px solid #fff;"
              class="px-6 align-middle py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              12:30
            </td>
            <td  style="border:1px solid #fff;"
              class="px-6 align-middle py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              match
            </td>
          </tr>
          <tr>
            <td  style="border:1px solid #fff;"
              class="px-6 align-middle py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              12:30
            </td>
            <td  style="border:1px solid #fff;"
              class="px-6 align-middle py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              match
            </td>
          </tr>
          <tr>
            <td  style="border:1px solid #fff;"
              class="px-6 align-middle py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              12:30
            </td>
            <td  style="border:1px solid #fff;"
              class="px-6 align-middle py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              match
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #fff;"
              class="px-6 align-middle py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              12:30
            </td>
            <td  style="border:1px solid #fff;"
              class="px-6 align-middle py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              match
            </td>
          </tr>
        
        </tbody>
      </table>
    </div>
    <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
      
          <button
            class="icon-sidebar-click mt-4 w-full"
            type="button"
            style="padding-right: 0.7rem; padding-left: 0.7rem"
          >
            <router-link  v-if="userRole === 'admin Equipe '"
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
        <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <button
            class="icon-sidebar-click mt-4 w-full"
            type="button"
            style="padding-right: 0.7rem; padding-left: 0.7rem"
          >
            <router-link  v-if="userRole === 'admin Ste'"
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

   
</template>
<script>
export default {
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
  },
};
</script>