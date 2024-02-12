<template>
  <footer>
    Desenvolvido por Gustavo Rost - 2024. <a href="https://www.instagram.com/gustavorost">@gustavorost</a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer{
  background-color: var(--marrom-escuro);
  display: block;
  padding: 2rem 0;
  text-align: center;
  font-family: "Roboto";
  color: var(--bege);
  a{
    color: var(--marrom-claro);
  }
}
</style>