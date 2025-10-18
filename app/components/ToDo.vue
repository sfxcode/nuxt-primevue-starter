<script setup lang='ts'>
defineProps({
  text: {
    type: String,
    default: 'TODO',
  },
  icon: {
    type: String,
    default: 'i-mdi-information',
  },
})
</script>

<template>
  <div>
    <div class="todo m-4 flex gap-2">
      <i :class="icon" class="text-3xl text-primary" />
      <div data-testid="test_todo" class="text-2xl">
        {{ text }}
      </div>
    </div>
    <div class="m-2 p-2">
      <slot>
        TODO
      </slot>
    </div>
  </div>
</template>

<style scoped>

</style>
