<template>
    <div>
      <sidebar />
      <div class="relative md:ml-64 bg-blueGray-100">
        <profile-navbar />
        <header-profile />
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  <script>
  import ProfileNavbar from "@/components/Navbars/ProfileNavbar.vue";
  import Sidebar from "@/components/Sidebar/Sidebar.vue";
  import HeaderProfile from "@/components/Headers/HeaderProfile.vue";
  export default {
    name: "admin-layout",
    components: {
      ProfileNavbar,
      Sidebar,
      HeaderProfile,
    },
  };
  </script>
  