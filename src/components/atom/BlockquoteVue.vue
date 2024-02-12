<template>
   <blockquote cite="Brenda Vidal" class="mx-5">
        <p>
          {{data.quote}}
          <span class="block">- {{data.name}}</span>
        </p>
      </blockquote>
</template>

<script>
export default {
    name: "BlockquoteVue",
    props:{
        data:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>