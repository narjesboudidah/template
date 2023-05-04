<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-lg bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Permission</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6
          class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
        ></h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 mb-3">
            <label
              class="block uppercase tracking-wide text-blueGray-600 text-xs font-bold mb-2"
              for="nom-permission"
            >
              Nom Permission :
            </label>
            <input
              type="text"
              id="nom-permission"
              name="nom-permission"
              placeholder="Nom Permission"
              required
              class="border-2 border-blueGray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 rounded-md text-sm shadow"
            />
          </div>
        </div>
      </form>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-center" style="margin-top: 1rem;">
        <button
          class="boutton-click active:bg-blueGray-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
          type="button"
          style="padding-right: 0.7rem; padding-left: 0.7rem"
        >
          confirmer
        </button>

        <button
          class="boutton-annuler bg-blueGray-300 text-blueGray-400 active:bg-red-600 font-bold text-xss shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear"
          type="button"
          style="padding-right: 0.7rem; padding-left: 0.7rem"
        >
          annuler
        </button>
      </div>
    </div>
  </div>
</template>
