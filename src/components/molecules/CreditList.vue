<template>
  <div class="credit__container">
    <div class="credit__group">
      <div v-for="creator in creators" :key="creator" class="col-12 md:col-3 p-0">
        <credit-item :data="creator"></credit-item>
      </div>
    </div>
  </div>
</template>

<script>
import CreditItem from "../atom/CreditItem.vue"

export default {
  components: { CreditItem },
  name: "CredtiList",
  data() {
    return {
      creators: [
        {
          name: "Carla Mello",
          description:
            "Graduanda em jornalismo na UFRGS e assistente de redes sociais em GZH",
          contato: "carlagmello@outlook.com.br",
          photo: "creators/carla.webp",
        },
        {
          name: "Daniela Lacerda",
          description: "Graduanda em jornalismo na UFRGS",
          contato: "daniela.maiara05@gmail.com ",
          photo: "creators/daniela.webp",
        },
        {
          name: "Laura Borges",
          description: "Graduanda em jornalismo na UFRGS ",
          contato: "lauraborgex@hotmail.com",
          photo: "creators/laura.webp",
        },
        {
          name: "Renata Rosa",
          description:
            "Graduanda em jornalismo na UFRGS e repórter na Câmara Municipal de POA",
          contato: "renatafrrosa@gmail.com",
          photo: "creators/renata.webp",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.credit__group {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>