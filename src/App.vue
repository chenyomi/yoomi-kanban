<script setup>
import { theme } from 'ant-design-vue';
// resize 重载
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    location.reload(true)
  }, 250);
})
</script>

<template>
  <a-config-provider :theme="{
    token: {
      colorPrimary: '#60c5e7',
    },
    algorithm: [theme.darkAlgorithm],
  }">
    <router-view :key="$route.fullPath"></router-view>
  </a-config-provider>
</template>

<style scoped></style>
