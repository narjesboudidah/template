<template>
    <div>
      <sidebar />
      <div class="relative md:ml-64 bg-blueGray-100">
        <header-planning />
        <div class="px-4 md:px-10 mx-auto w-full -m-22">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  <script>
  import Sidebar from "@/components/Sidebar/Sidebar.vue";
  import HeaderPlanning from "@/components/Headers/HeaderPlanning.vue";
  export default {
    name: "admin-layout",
    components: {
      Sidebar,
      HeaderPlanning,
    },
  };
  </script>
  