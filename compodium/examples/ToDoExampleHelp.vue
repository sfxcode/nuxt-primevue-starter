<script setup lang="ts">
import Todo from '@/components/Todo.vue'

extendCompodiumMeta({
  defaultProps: {
    text: 'Help',
    icon: 'i-mdi-help-circle-outline',
  },
})
</script>

<template>
  <Todo>Some Help Text</Todo>
</template>
