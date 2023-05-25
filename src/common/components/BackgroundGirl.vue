<script lang="ts" setup>
import backgroundGirl from '@/assets/svg/backgroundGirl.svg'

defineProps ({classes: String, width: Number})
</script>

<template>
    <v-img :src="backgroundGirl" :width="width" :class="classes" alt="girl"></v-img> 
</template>

<style scoped></style>