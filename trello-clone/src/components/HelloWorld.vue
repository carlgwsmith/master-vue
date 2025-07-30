<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="text-[40px] text-center">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped>
</style>
