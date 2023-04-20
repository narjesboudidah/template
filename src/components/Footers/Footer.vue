<template>
  <footer class="relative bg-blueGray-200 pt-0 pb-2">
      <hr class="my-2 border-blueGray-300" />
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © {{ date }} by
              PlanStadium .
          </div>
        </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>