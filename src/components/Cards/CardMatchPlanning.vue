<template>
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
            <tr>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss text-center p-4"
              >
              12:00
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
              >
                Nom Event
              </td>
              <td
                class="px-6 align-middle border border-solid border-blueGray-50 py-3 font-semibold text-blueGray-700 text-xss whitespace-nowrap text-center"
              >
                Type Event
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
  