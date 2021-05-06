<template>
  <div class="goods-container">
    <img width="100%" :src="goodsListItem.showLarge.img" alt="" />
    <div>{{ goodsListItem.title }}</div>
    <div>
      <span>{{ goodsListItem.price }}</span>
      <span>--收藏{{ goodsListItem.cfav }}</span>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-container {
  width: 48%;
}
</style>