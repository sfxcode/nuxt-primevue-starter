<script setup lang='ts'>
import AdvertiseBox from '@/components/AdvertiseBox.vue'
</script>

<template>
  <div class="card surface-0 text-center">
    <div class="text-4xl font-bold mb-3">
      <span class="text-green-600">PrimeVue </span>
      <span class="text-blue-400"> & TypeScript</span>
      <span class="text-green-400"> & Nuxt 3</span>
    </div>
    <h2 class="text-2xl pb-6">
      Starter for Vue.js Development with Nuxt 3.
    </h2>
    <div class="gap-2 grid grid-cols-2 lg:grid-cols-3">
      <AdvertiseBox header="PrimeVue 4.4.x" icon="prime-check-circle" color="green-600">
        Excellent <ExternalLink href="https://github.com/sfxcode/formkit-primevue" text="Component Library" /> for VUE
      </AdvertiseBox>
      <AdvertiseBox header="PrimeVue Theme" icon="prime-check-circle" color="green-600">
        <ExternalLink href="https://primevue.org/theming/styled" text="Styled Mode" /> with preset: Aura
      </AdvertiseBox>
      <AdvertiseBox header="FormKit" icon="prime-check-circle" color="purple-500">
        <ExternalLink href="https://formkit.com" text="Formkit" /> 1.6.x support by <ExternalLink href="https://formkit-primevue.netlify.app/" text="PrimeVue-FormKit" />
      </AdvertiseBox>
      <AdvertiseBox header="UnoCSS" icon="prime-check-circle" color="green-600">
        <ExternalLink href="https://unocss.dev/" text="UnoCSS" /> for rapid styling
      </AdvertiseBox>
      <AdvertiseBox header="VUE 3.5.x" icon="prime-check-circle" color="green-600">
        <ExternalLink href="https://vuejs.org/guide/introduction.html" text="Composition Api" /> with Script Setup
      </AdvertiseBox>
      <AdvertiseBox header="Typescript 5" icon="prime-check-circle" color="blue-400">
        Typesafe by default
      </AdvertiseBox>
      <AdvertiseBox header="Nuxt 4.0.x" icon="prime-check-circle" color="green-400">
        <ExternalLink href="https://nuxt.com/" text="Nuxt" /> with Pages, Layouts, ...
      </AdvertiseBox>
      <AdvertiseBox header="Nuxt Content 3.7.x" icon="prime-check-circle" color="green-400">
        <ExternalLink href="https://content.nuxt.com/" text="Content" />: Markdown, YML, CSV or JSON and MDC Syntax
      </AdvertiseBox>
      <AdvertiseBox header="Nuxt Modules" icon="prime-check-circle" color="green-600">
        includes <ExternalLink href="https://nuxt.com/modules/image" text="Nuxt Images" />, <ExternalLink href="https://nuxt.com/modules/fonts" text="Nuxt Fonts" />
      </AdvertiseBox>
      <AdvertiseBox header="VueUse" icon="prime-check-circle" color="green-600">
        <ExternalLink href="https://vueuse.org/" text="VueUse" /> included
      </AdvertiseBox>
      <AdvertiseBox header="Pinia 2.x" icon="prime-check-circle" color="blue-400">
        <ExternalLink href="https://pinia.vuejs.org/" text="Pinia (Colada)" />: Vue Store Implementation
      </AdvertiseBox>
      <AdvertiseBox header="TipTap 3.x" icon="prime-check-circle" color="green-600">
        <ExternalLink href="https://tiptap.dev/" text="TipTap" /> Editor
      </AdvertiseBox>
      <AdvertiseBox header="Vue Sidebar" icon="prime-check-circle" color="green-600">
        <ExternalLink href="https://github.com/yaminncco/vue-sidebar-menu" text="Sidebar" /> component
      </AdvertiseBox>
      <AdvertiseBox header="Nitro" icon="prime-check-circle" color="green-400">
        <ExternalLink href="https://nitro.unjs.io/" text="Nitro" />: Next Generation Server Toolkit
      </AdvertiseBox>
      <AdvertiseBox header="Vitest" icon="prime-check-circle" color="blue-600">
        Testing with Vitest
      </AdvertiseBox>
    </div>
  </div>
</template>

<style scoped></style>
