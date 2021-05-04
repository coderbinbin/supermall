<template>
  <div class="nav-control">
    <div
      class="nav-control-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: curIndex == index }"
      @click="clickControlItem(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      curIndex: 0,
    };
  },
  methods: {
    clickControlItem(index) {
      this.curIndex = index;
    },
  },
};
</script>

<style scoped>
.active {
  color: pink;
}
.active span {
  padding: 5px;
  border-bottom: 3px solid pink;
}
.nav-control {
  display: flex;
  padding-bottom: 5px;
  background-color: #fff;
}
.nav-control-item {
  flex: 1;
  text-align: center;
}
</style>