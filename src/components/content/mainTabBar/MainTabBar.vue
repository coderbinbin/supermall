<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activecolor="pink">
        <img slot="item-icon" src="@/assets/imgs/tabbar/icon_home.png" />
        <img
          slot="item-icon-active"
          src="@/assets/imgs/tabbar/icon_home_s.png"
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activecolor="pink">
        <img slot="item-icon" src="@/assets/imgs/tabbar/icon_category.png" />
        <img
          slot="item-icon-active"
          src="@/assets/imgs/tabbar/icon_category_s.png"
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activecolor="pink">
        <img slot="item-icon" src="@/assets/imgs/tabbar/icon_shopcart.png" />
        <img
          slot="item-icon-active"
          src="@/assets/imgs/tabbar/icon_shopcart_s.png"
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my" activecolor="pink">
        <img slot="item-icon" src="@/assets/imgs/tabbar/icon_my.png" />
        <img slot="item-icon-active" src="@/assets/imgs/tabbar/icon_my_s.png" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template> 

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>