<script setup lang='ts'>
defineProps({
  header: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'text-primary',
  },
})
</script>

<template>
  <div class="mb-4 p-4 px-5 shadow-xs">
    <div :class="`mb-3 text-2xl text-${color}`">
      {{ header }}
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
