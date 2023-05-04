<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
    style="border-radius: 1rem; max-height: 31.7rem"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            Liste des Traveaux
          </h3>
        </div>
        <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <button type="button" class="text-blueGray-700">
            <span class="material-symbols-outlined icon-sidebar">
              filter_alt
            </span>
          </button>
          <button
            class="icon-sidebar-click"
            type="button"
            style="padding-right: 0.7rem; padding-left: 0.7rem"
          >
            <router-link
              to="/form/AjoutMaintenance"
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
                <i class="fas fa-plus mr-2"></i> Ajouter Traveau
              </a>
            </router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Nom Ste Maintenance
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Stade
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Date Début
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Date Fin
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Description
            </th>
            <th
              class="px-6 bg-blueGray-100 align-middle border border-solid border-blueGray-100 py-3 font-semibold text-blueGray-500 text-xss whitespace-nowrap text-center"
            >
              Etat
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style="margin-right: 2rem"
              class="px-6 align-middle py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap p-4 text-center flex items-center"
            >
              <img
                :src="bootstrap"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span class="ml-3"> Moez </span>
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              stade
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              04-05-2023
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              05-05-2023
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              -nouveaux escaliers / nouveaux gason
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-bold text-xss whitespace-nowrap text-center text-red-600"
            >
              urgent
            </td>
          </tr>
          <tr>
            <td
              style="margin-right: 2rem"
              class="px-6 align-middle py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap p-4 text-center flex items-center"
            >
              <img
                :src="bootstrap"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span class="ml-3"> Moez </span>
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              stade
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              04-05-2023
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              05-05-2023
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              -nouveaux escaliers / nouveaux gason
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-bold text-xss whitespace-nowrap text-center text-red-600"
            >
              urgent
            </td>
          </tr>
          <tr>
            <td
              style="margin-right: 2rem"
              class="px-6 align-middle py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap p-4 text-center flex items-center"
            >
              <img
                :src="bootstrap"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span class="ml-3"> Moez </span>
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              stade
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              04-05-2023
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              05-05-2023
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              -nouveaux escaliers / nouveaux gason
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-bold text-xss whitespace-nowrap text-center text-red-600"
            >
              urgent
            </td>
          </tr>
          <tr>
            <td
              style="margin-right: 2rem"
              class="px-6 align-middle py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap p-4 text-center flex items-center"
            >
              <img
                :src="bootstrap"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span class="ml-3"> Moez </span>
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              stade
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              04-05-2023
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
            >
              05-05-2023
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
            >
              -nouveaux escaliers / nouveaux gason
            </td>
            <td
              class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-bold text-xss whitespace-nowrap text-center text-red-600"
            >
              urgent
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import bootstrap from "@/assets/img/bootstrap.jpg";
export default {
  data() {
    return {
      bootstrap,
    };
  },
};
</script>
