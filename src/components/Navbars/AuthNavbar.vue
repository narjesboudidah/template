<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
  
      </div>
      <div class="transparent p-3 text-center inline-flex items-center  w-16 h-16 mb-6 shadow-lg rounded-full flex flex-col lg:flex-row list-none mr-auto ">
      </div>
    </div>
  </nav>
</template>
<script>
import logo from "@/assets/img/logo.png";
export default {
  data() {
    return {

      navbarOpen: false,
      logo,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
  },
};
</script>
