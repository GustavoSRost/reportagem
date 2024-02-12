<template>
  <div class="credit__item">
    <div class="credit__photo">
      <img :src="fetchImage(data.photo)" lazyload />
    </div>
    <h4 class="credit__name">
      {{ data.name }}
    </h4>
    <p class="credit__description">
      {{ data.description }}
    </p>
    <p class="credit__contact">
      <a :href="`mailto:${data.contato}`">{{ data.contato }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "CreditItem",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    fetchImage(img_src) {
      return new URL(`/src/assets/img/${img_src}`, import.meta.url).href
    },
  },
}
</script>

<style lang="scss">
.credit__item {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: var(--marrom-claro);
  padding: 0.75rem;
  font-family: "Roboto";
  box-shadow: 0px 10px 100px 56px rgba(0, 0, 0, 0.1);
  min-height: 450px;
  > *, a{
    color: var(--white);
  }
  img{
    aspect-ratio: 1/2;
    object-fit: cover;
    max-height: 230px;
    width: 100%;
  }
  p{
    font-size: 1rem !important;
    margin-bottom: .5rem !important;
  }
}
</style>