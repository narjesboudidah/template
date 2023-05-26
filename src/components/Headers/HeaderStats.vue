<template>
  <!-- Header -->
  <div
    class="relative md:pt-32 pb-32 pt-12"
    :style="imageStyle"
  >
    <div
      style="
        opacity: 20%;
        border-radius: 1rem;
      "
      class="absolute top-0 left-0 w-full h-full"
    ></div>
    <!-- Contenu de l'élément ici -->
    <div class="px-4 md:px-100 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Nombre de users"
              :statTitle="users"
              statIconName="fas fa-user"
              statIconColor="bg-emerald-550"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Nombre de stades"
              :statTitle="stades"
              statIconName="fas fa-hockey-puck"
              statIconColor="bg-emerald-550"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Nombre des equipes"
              :statTitle="equipes"
              statIconName="fas fa-users"
              statIconColor="bg-emerald-550 "
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Nombre stes maintenance"
              :statTitle="ste_maintenance"
              statIconName="fas fa-tools"
              statIconColor="bg-emerald-550 "
            />
            
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import axios from "axios";
export default {
  components: {
    CardStats,
  },
  data() {
    return {
      users: 0,
      stades: 0,
      equipes: 0,
      ste_maintenance: 0,
      imageUrls: [
        'https://images.unsplash.com/photo-1569337042150-c21c85b80a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80',
       // 'https://images.unsplash.com/photo-1592841897941-5766f3c49288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1183&q=80',
        //'https://images.unsplash.com/photo-1595407409955-32f127603183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1865&q=80',
        //'https://images.unsplash.com/photo-1542683305-710078a12f73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1457&q=80',
        //'https://images.unsplash.com/photo-1595030044556-acfaa61edc0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        //'https://images.unsplash.com/flagged/photo-1552987246-c68926651688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      ],
      //intervalDuration: 5000, // 10 secondes
      currentIndex: 0
    };
  },
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url('${this.imageUrls[this.currentIndex]}')`,
        backgroundPositionY: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '1rem',
        marginTop: '2rem',
        marginRight: '1rem',
        marginLeft: '4.5rem'
      };
    }
  },
  methods: {
    async fetchData() {
      let token = localStorage.getItem("userToken");
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/stats", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.users = response.data.users;
        this.stades = response.data.stades;
        this.equipes = response.data.equipes;
        this.ste_maintenance = response.data.ste_maintenance;
      } catch (error) {
        console.error(error);
      }
    },
    changeImage() {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    }
  },
  mounted() {
    this.fetchData();
    setInterval(this.changeImage, this.intervalDuration);
  },
};
</script>

<style scoped>
.min-h-screen-75 {
  height: calc(100vh - 0rem);
  min-height: 24rem;
}
</style>
