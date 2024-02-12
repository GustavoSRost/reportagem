<template>
  <header>
    <ProgressVue />
  </header>
</template>

<script>
import ProgressVue from "../atom/Progress.vue"
import NavBar from "../molecules/NavBar.vue"
export default {
  components: { NavBar, ProgressVue },
  name: "HeaderVue",
}
</script>

<style lang="scss" scoped>
</style>