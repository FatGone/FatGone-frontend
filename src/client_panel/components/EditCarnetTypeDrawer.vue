<script lang="ts" setup>
import { ref, watch, } from 'vue';
import type { CarnetType } from './CarnetCardSmall.vue';
import CarnetCardSmallVue from './CarnetCardSmall.vue';

const carnetTypes = ref([
    {
        id: 1,
        name: 'half-open',
        price: 49,
        benefits: [
            "Dostęp do wszystkich obiektów AQUASPLASH",
            "Dodatkowo płatny dostęp do sekcji SPA i Wellness",
            "4 zajęcia grupowe w miesiącu",
            "1 konsultacja z trenerem personalnym w miesiącu",
        ],
    },
    {
        id: 2,
        name: 'open',
        price: 99,
        benefits: [
            "Dostęp do wszystkich obiektów AQUASPLASH",
            "Dostęp do sekcji SPA i Wellness",
            "Wszystkie zajęcia grupowe",
            "Trening przygotowany i nadzorowany przez naszego specjalistę dostosowany do ciebie",
        ],
    }
] as CarnetType[])

const props = defineProps({
    value: {
        type: Boolean,
        default: false,
    },
});

const show = ref(props.value);

watch(() => props.value, (value: boolean) => {
    show.value = value;
});

const emit = defineEmits(['update:modelValue']);


</script>
<template>
    <v-navigation-drawer class="" temporary location="right" v-model="show"
        @update:model-value="emit('update:modelValue', show)" width="419">
        <div class="d-flex flex-column h-screen pa-8">
            <h2 class="fg-title-large text-primary mb-8">Zmiana typu karnetu</h2>
            <carnet-card-small-vue class="mb-8" v-for="carnetType in carnetTypes" :key="carnetType.name"
                :carnetType="carnetType" />
        </div>
        <div style="position: absolute; bottom: 32px; width: 100%;">
            <v-divider></v-divider>
            <div class="d-flex flex-row pt-4 ">
                <v-btn color="primary" class="ml-4" variant="outlined">Anuluj</v-btn>
            </div>
        </div>
    </v-navigation-drawer>
</template>

