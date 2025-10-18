<script setup lang="ts">
import TipTap from '~/components/TipTap.vue'

const startText = '<p>I’m running <strong>Tiptap</strong> with <strong>Vue.js</strong> and <strong>Nuxt</strong>. 🎉</p><hr><blockquote><p>Use TipTap ...</p></blockquote>\n'
const editorValue = ref(startText)

function resetText() {
  editorValue.value = startText
}
</script>

<template>
  <div class="card">
    <h2>TipTap as alternative Editor</h2>

    <div class="pb-2">
      <Button size="small" label="Reset" @click="resetText" />
    </div>
    <div class="p-tiptap">
      <TipTap v-model="editorValue" />
    </div>
    <div class="pt-8">
      <pre v-if="false">{{ editorValue }}</pre>
    </div>
  </div>
</template>

<style lang='scss'>

</style>
