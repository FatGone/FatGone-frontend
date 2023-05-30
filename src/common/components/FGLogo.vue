<script lang="ts" setup>
import logo from '@/assets/svg/fg-logo.svg'

defineProps({ classes: String, width: Number, height: Number })
</script>

<template>
    <img :src='logo' alt="logo" :width="width" :class="classes" />
</template>

<style scoped></style>