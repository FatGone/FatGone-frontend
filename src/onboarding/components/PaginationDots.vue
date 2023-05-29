
<script lang="ts" setup>
import router from '@/router';




defineProps({ step: { type: Number, required: true } })
const routes = ['', '/onboarding/code', '/onboarding/personal-details', '/onboarding/membership-type', '/onboarding/card'];

function navigationIntent(step: number): void {
    router.push(routes[--step])
}

</script>

<template>
    <v-row class="pt-16" justify="center">
        <v-btn v-if="step != 1" @click="navigationIntent(step)" icon>
            <v-icon class="pb-1">mdi-chevron-left</v-icon>
        </v-btn>
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

