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
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrls: [
        'https://images.unsplash.com/photo-1569337042150-c21c85b80a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80',
        'https://images.unsplash.com/photo-1592841897941-5766f3c49288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1183&q=80',
        'https://images.unsplash.com/photo-1595407409955-32f127603183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1865&q=80',
        'https://images.unsplash.com/photo-1542683305-710078a12f73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1457&q=80',
        'https://images.unsplash.com/photo-1595030044556-acfaa61edc0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/flagged/photo-1552987246-c68926651688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      ],
      intervalDuration: 5000, // 10 secondes
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
    changeImage() {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    }
  },
  mounted() {
    setInterval(this.changeImage, this.intervalDuration);
  },
};
</script>

