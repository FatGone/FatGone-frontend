<script lang="ts" setup>
defineProps ({image: String, width: Number, height: Number, title: String, description: String})
</script>

<template>
    <v-card class="mx-auto pa-8 ma-2 pa-2" width="360" height="501">
        <div class="d-flex justify-center pt-8">
            <v-img contain :src="image" :width="width" :height="height"></v-img>
        </div>
        <v-card-title class="fg-headline-small on-surface text-center pt-7 pb-8">{{title}}</v-card-title>
        <v-card-text class="fg-body-large on-surface text-justify pb-5">
            {{description}}
        </v-card-text>
    </v-card>
</template>

<style scoped>
</style>