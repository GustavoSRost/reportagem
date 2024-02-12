<script>
import { RouterView } from "vue-router";
import Footer from "./components/organism/Footer.vue";
import HeaderVue from "./components/organism/Header.vue";
export default {
  components: {
    RouterView,
    HeaderVue,
    Footer,
  },
};
</script>

<template>
  <HeaderVue />
  <router-view></router-view>
  <footer></footer>
</template>

<style>
</style>
