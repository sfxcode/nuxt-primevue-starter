<script setup lang="ts">

</script>

<template>
  <div id="workspace" class="mt-40">
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<style lang='scss'>
@use '../app/App.scss';

#workspace {
  padding-left: 0;
  margin-right: 30px;
}

#workspace.collapsed {
  padding-left: 0;
}

#workspace.onmobile {
  padding-left: 0;
}
</style>
