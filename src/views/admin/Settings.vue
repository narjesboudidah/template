<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 px-4" style="margin-left: 14rem;">
      <card-settings />
    </div>
  </div>
</template>
<script>
import CardSettings from "@/components/Cards/CardSettings.vue";
export default {
  components: {
    CardSettings,
  },
};
</script>
