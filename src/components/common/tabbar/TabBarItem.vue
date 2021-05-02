<template>
  <div class="tabbar-item" @click="clickItem">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "blue",
    },
  },
  data() {
    return {};
  },
  methods: {
    clickItem() {
      if (window.location.hash.replace("#", "") == this.path) return;
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activecolor } : {};
    },
  },
};
</script>

<style scoped>
.active {
  color: pink;
}
.tabbar-item {
  margin-top: 2px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 29px;
  height: 29px;
  vertical-align: middle;
}
</style>