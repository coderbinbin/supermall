<template>
  <div id="app">
    <router-view></router-view>

    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
body,
html {
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
