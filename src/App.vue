<script>
import { RouterView } from "vue-router";
import FooterVue from "./components/organism/Footer.vue";
import HeaderVue from "./components/organism/Header.vue";
export default {
  components: {
    RouterView,
    HeaderVue,
    FooterVue,
  },
};
</script>

<template>
  <HeaderVue />
  <router-view></router-view>
  <FooterVue></FooterVue>
</template>

<style>
</style>
