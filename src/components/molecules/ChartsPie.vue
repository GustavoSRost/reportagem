<template>
  <Pie :data="data" :options="options" style="width: 100%;"/>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

export default {
  name: 'App',
  components: {
    Pie
  },
}
</script>
