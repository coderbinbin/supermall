<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物gai</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommend="recommend" />
    <Feature />
    <nav-control class="nav-control" :titles="['流行', '新款', '精选']" />
    <ul>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
    </ul>
  </div>
</template> 

<script>
import HomeSwiper from "./componentschild/HomeSwiper";
import HomeRecommend from "./componentschild/HomeRecommend";
import Feature from "./componentschild/Feature";

import NavBar from "../../components/common/navbar/NavBar";
import NavControl from "../../components/common/navcontrol/NavControl";

import { getHomeMultidata } from "../../network/home";
export default {
  components: {
    HomeSwiper,
    HomeRecommend,
    Feature,

    NavBar,
    NavControl,
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
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: pink;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.nav-control {
  position: sticky;
  top: 44px;
}
</style>