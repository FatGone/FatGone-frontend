<script lang="ts" setup>
defineProps({ image: String, width: Number, height: Number, title: String, description: String })
</script>

<template>
    <v-card>
        <div class="d-flex justify-center pt-8 align-center" style="height: 213px;">
            <v-img contain :src="image" :width="width" :height="height"></v-img>
        </div>
        <v-card-title class="fg-headline-medium on-surface text-center pa-0 pt-7 pb-8">{{ title }}</v-card-title>
        <v-card-text class="fg-title-large font-weight-regular on-surface text-justify pb-5 px-8" style="line-height: 1.5;">
            {{ description }}
        </v-card-text>
    </v-card>
</template>
