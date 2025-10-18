<script setup lang='ts'>
defineProps({
  text: {
    type: String,
    default: 'Nuxt',
  },
  href: {
    type: String,
    default: 'https://nuxt.com',
  },
})
</script>

<template>
  <a v-tooltip.bottom="href" :href="href" target="_blank">{{ text }}</a>
</template>
