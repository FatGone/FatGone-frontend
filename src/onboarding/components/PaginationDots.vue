
<script lang="ts" setup>
import router from '@/router';

defineProps({ step: { type: Number, required: true } })
const routes = ['/register', '/onboarding/code', '/onboarding/personal-details', '/onboarding/membership-type', '/onboarding/card'];

function navigationIntent(step: number): void {
    router.push(routes[step - 2])
}

</script>

<template>
    <v-row class="pt-16 w-100" justify="center">
        <v-icon v-if="step != 1" class="pb-1 text-secondary" icon="mdi-chevron-left" @click="navigationIntent(step)"
            role="button" tabindex="-1"></v-icon>
        <v-sheet v-if="step == 1" color="secondary" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-else color="secondary-container" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-if="step == 2" color="secondary" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-else color="secondary-container" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-if="step == 3" color="secondary" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-else color="secondary-container" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-if="step == 4" color="secondary" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-else color="secondary-container" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-if="step == 5" color="secondary" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-else color="secondary-container" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-if="step == 6" color="secondary" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
        <v-sheet v-else color="secondary-container" max-width="16" class="rounded-circle mx-2 " height="16"
            width="100%"></v-sheet>
    </v-row>
</template>

