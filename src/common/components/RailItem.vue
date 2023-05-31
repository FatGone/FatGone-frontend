<script lang="ts" setup>

import { ref } from 'vue';

defineProps({
    'icon': String,
    'text': String,
    'navigateTo': {
        type: String,
        required: true,
    }
})
</script>

<template>
    <RouterLink :to="navigateTo" v-bind="$props" custom v-slot="{ isActive, navigate }">
        <div class="d-flex justify-center align-center flex-column mb-4">
            <v-list-item width="64" variant="flat" router rounded="pill" active-color="primary" density="compact" nav
                class="d-flex justify-center align-center flex-column" @click="navigate()" :active="isActive">
                <v-icon size="large" class="on-background">{{ icon }}</v-icon>
            </v-list-item>
            <p v-if="isActive" class="pt-1">{{ text }}</p>
        </div>
    </RouterLink>
</template>