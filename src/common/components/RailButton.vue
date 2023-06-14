<script lang="ts" setup>


defineProps({
    'icon': String,
    'text': String,
    'click': {
        type: Function,
        required: true,
    }
})
</script>

<template>
    <div class="d-flex justify-center align-center flex-column mb-4">
        <v-list-item width="64" variant="flat" router rounded="pill" active-color="primary" density="compact" nav
            class="d-flex justify-center align-center flex-column" @click="click">
            <v-icon size="large" class="on-background">{{ icon }}</v-icon>
        </v-list-item>
        <p class="pt-1">{{ text }}</p>
    </div>
</template>