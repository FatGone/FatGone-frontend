<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
</script>

<template>
  <!-- TODO nie działa router -->
  <LoginPage /> 
  <RouterView />
</template>

<style scoped>
</style>
