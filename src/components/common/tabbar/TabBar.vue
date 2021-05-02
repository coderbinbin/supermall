<template>
  <div>
    <div class="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.tabbar {
  display: flex;
  height: 49px;
  background-color: rgb(245, 245, 245);
  color: #8a8a8a;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 3px 10px rgba(190, 190, 190, 0.8);
}
</style>