<!-- ProgressBar.vue -->
<template>
  <div>
    <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
    <button
      v-show="progressBarWidth === 100"
      @click="scrollToTop"
      class="back-to-top"
    >
      Voltar ao Topo
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressBarWidth: 0,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateProgressBar)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateProgressBar)
  },
  methods: {
    updateProgressBar() {
      const scroll = window.scrollY || document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      this.progressBarWidth = (scroll / height) * 100
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" })
    },
  },
}
</script>

<style scoped>
.progress-bar {
  height: 5px;
  background-color: var(--marrom-escuro); /* Cor da barra de progresso */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: width 0.3s ease;
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: block;
  font-family: "Inter";
  background-color: var(--marrom-escuro);
  color: var(--white);
  border: 1px solid var(--marrom-claro);
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
}
</style>
