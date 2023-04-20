<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 text-center mt-20">
            <div class="flex justify-center py-4 lg:pt-4 pt-8">
              <div class="mr-4 p-3 text-center">
                    <img
                    alt="..."
                    :src="team2"
                    class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-100-px"
                    style="margin:-4rem -80rem 5rem -1.8rem;"/>
                    <br>
                    <br>
                    <span class="text-sm text-blueGray-400">ES Tunis</span>
              </div>
              <div class="mr-4 p-3 text-center">
                <span class="text-sm text-blueGray-400">VS</span>
              </div>
              <div class="mr-4 p-3 text-center">
                    <img
                    alt="..."
                    :src="team2"
                    class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-100-px"
                    style="margin:-4rem 5rem 5rem -1.3rem;"/>
                    <br>
                    <br>
                    <span class="text-sm text-blueGray-400">club affricain</span>
              </div>
            </div>
        </div>
      </div>
      <div class="text-center mt-52">
        <h3
          class="text-xl font-arial leading-normal mb-2 text-blueGray-700 mb-2"
        >
          Derby
        </h3>
        <div class="mb-2 text-xs text-blueGray-600 mt-25">
          <i class="fa fa-clock mr-2 text-sm"></i>
          De 04-02-2023 A 10-02-2023
        </div>
        <div class="mb-2 text-xs text-blueGray-600 mt-25">
          <i class="fas fa-map-marker-alt mr-2 text-sm"></i>
          Los Angeles, California
        </div>
      </div>
      <div class="mt-50 py-3 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <button
            class="bg-white-500 text-black-200 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <i class="fas fa-plus"></i>
          </button>
          <button
            class="bg-white-500 text-black-200 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <i class="fas fa-pen"></i>
          </button>
          <button
            class="bg-white-500 text-black-200 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <i class="fa fa-ban"></i>
          </button>
          <button
            class="bg-white-500 text-black-200 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <i class="fa fa-list"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  data() {
    return {
      team2,
    };
  },
};
</script>
