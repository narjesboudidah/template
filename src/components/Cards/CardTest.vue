<template>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
      />
  
      <h4>
        Top western road trips
      </h4>
  
      <h6>
        1,000 miles of wonder
      </h6>
  
      <actions>
        <button
          color="orange-lighten-2"
          variant="text"
        >
          Explore
        </button>
  
        <br>
  
        <button
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></button>
      </actions>
  
      <transition>
        <div v-show="show">
          <divider></divider>
  
          <p>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </p>
        </div>
      </transition>
    </v-card>
  </template>
  
  <script>
    export default {
      data: () => ({
        show: false,
      }),
    }
  </script>