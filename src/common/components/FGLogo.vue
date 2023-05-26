<script lang="ts" setup>
import logo from '@/assets/svg/fg-logo.svg'

defineProps ({classes: String, width: Number})
</script>

<template>
    <v-img :src="logo" alt="logo" :width="width" :class="classes"></v-img>
</template>

<style scoped></style>