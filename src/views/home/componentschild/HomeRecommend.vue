<template>
  <div class="home-recommend">
    <div v-for="item in recommend" :key="item.image">
      <a :href="item.link">
        <img class="home-recommend-img" :src="item.image" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
// acm: "3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119"
// image: "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png"
// link: "http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119"
// sort: 1
// title: "十点抢券"
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.home-recommend {
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 12px;
  border-bottom: 8px solid #eee;
}
.home-recommend-img {
  width: 65px;
  height: 65px;
  margin-bottom: 8px;
}
</style>