<template>
  <section>
    <h1 class="text-4xl mb-4">
      <slot>
        Hero Title
      </slot>
    </h1>
    <span class="text-gray-300">
      <slot name="description">
        Hero Description
      </slot>
    </span>
  </section>
</template>
