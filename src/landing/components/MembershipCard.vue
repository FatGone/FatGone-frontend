<script lang="ts" setup>
defineProps ({
    'title': String,
    'price': Number
})
</script>

<template>
    <v-card class="mx-auto pt-6 pb-8 px-8 ma-2" width="360" height="516">
        <v-card-title class="fg-display-small text-center pb-3">Karnet</v-card-title>
        <p class="font-acetone text-center text-primary" style="font-weight: 400px; font-size: 57px; line-height: 64px;">{{title}}</p>
        <slot></slot>
        <v-card-item class="pa-0">
            <p class="font-acetone text-center text-primary pt-9" style="font-weight: 400px; font-size: 16px; line-height: 24px; letter: 0.5px;">TYLKO</p>
            <p class="fg-headline-medium text-center">{{price}} zł/msc</p>
            <v-btn block variant="flat" absolute height="40" width="105" class="fg-label-large text-none">
                Wybieram
            </v-btn>
        </v-card-item>
    </v-card>
</template>

<style scoped>
</style>