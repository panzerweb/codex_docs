<script lang="ts" setup>
export interface StatsCardInterface {
  title: string
  value: string
  description: string
}
const props = defineProps<StatsCardInterface>()
</script>

<!--

  Always wrap this component when you call it with:

  <div class="stats stats-vertical md:stats-horizontal shadow">
    // StatsCard component here
  </div>

-->

<template>
  <div class="stat">
    <div class="stat-title">
      {{ props.title }}
    </div>
    <div class="stat-value text-lg">
      {{ props.value }}
    </div>
    <div class="stat-desc">
      {{ props.description }}
    </div>
  </div>
</template>
