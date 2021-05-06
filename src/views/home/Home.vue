<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物gai</div>
    </nav-bar>
    <home-swiper v-if="banners" :banners="banners" />
    <home-recommend :recommend="recommend" />
    <Feature />
    <nav-control
      class="nav-control"
      @itemIndex="itemIndex"
      :titles="['流行', '新款', '精选']"
    />
    <goods-list :goods="goods[curType].list" />
  </div>
</template> 

<script>
import HomeSwiper from "./componentschild/HomeSwiper";
import HomeRecommend from "./componentschild/HomeRecommend";
import Feature from "./componentschild/Feature";

import NavBar from "../../components/common/navbar/NavBar";
import NavControl from "../../components/common/navcontrol/NavControl";
import GoodsList from "../../components/content/goods/GoodsList";

import { getHomeMultidata, getHomeData } from "../../network/home";
export default {
  components: {
    HomeSwiper,
    HomeRecommend,
    Feature,

    NavBar,
    NavControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      curType: "pop",
    };
  },

  created() {
    this.getHomeMultidata();

    // 请求三款商品数据
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");

    console.log("goods", this.goods);
  },
  methods: {
    /**
     *
     * 网络请求相关
     *
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1; //每次请求 把当前的页码+1
      getHomeData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list); //把返回的字段push进当前的数组list 通过展开依次push数据
        this.goods[type].page += 1; //每次调用页码+1
      });
    },

    /**
     *
     * 操作接收数据相关
     *
     */
    itemIndex(index) {
      switch (index) {
        case 0:
          this.curType = "pop";
          break;
        case 1:
          this.curType = "new";
          break;
        case 2:
          this.curType = "sell";
          break;
      }
    },
  },
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