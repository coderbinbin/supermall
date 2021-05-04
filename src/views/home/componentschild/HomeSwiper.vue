<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item in banners" :key="item.image">
      <a :href="item.link">
        <img class="swiper-img" :src="item.image" alt="" />
      </a>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true,
      },
    };
  },
};
</script>

<style scoped>
.swiper-img {
  width: 100%;
}
</style>