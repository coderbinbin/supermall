<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物gai</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommend="recommend" />
  </div>
</template> 

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./componentschild/HomeSwiper";
import HomeRecommend from "./componentschild/HomeRecommend";

import { getHomeMultidata } from "../../network/home";
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
  },
  data() {
    return {
      banners: [],
      recommend: [],
    };
  },

  created() {
    getHomeMultidata().then((res) => {
      console.log(res.data);
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
  methods: {},
};
</script>

<style scoped>
.home-nav {
  background-color: pink;
  color: #fff;
}
</style>