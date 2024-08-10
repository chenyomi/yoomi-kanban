<script setup>
import { theme } from 'ant-design-vue';
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
