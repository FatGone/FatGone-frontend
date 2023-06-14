<script lang="ts" setup>
import { ref, watch, } from 'vue';

export interface Transaction {
    title: string;
    cardNumber: string;
    date: string;
    amount: number;
}

const props = defineProps({
    value: {
        type: Boolean,
        default: false,
    },
    transactions: {
        type: Array<Transaction>,
        default: () => [],
    },
});

const show = ref(props.value);

watch(() => props.value, (value: boolean) => {
    show.value = value;
});

const emit = defineEmits(['update:modelValue']);

function onConfirm() {
    emit('update:modelValue', false);
    show.value = false;
}

function onReject() {
    emit('update:modelValue', false);
    show.value = false;
}

</script>
<template>
    <v-navigation-drawer class="" temporary location="right" v-model="show"
        @update:model-value="emit('update:modelValue', show)" width="419">
        <div class="d-flex flex-column pa-8">

            <h2 class="fg-title-large text-primary mb-8">Historia transakcji</h2>
            <v-list class="bg-surface-1">
                <v-list-item v-for="transaction in props.transactions" :key="transaction.date"
                    class="w-100 my-2 bg-surface-2" lines="three" variant="elevated" :elevation="2">
                    <v-list-item-title class="fg-body-large">{{ transaction.title }}</v-list-item-title>
                    <v-list-item-subtitle class="fg-body-small font-weight-regular">
                        <p class="text-primary">{{ transaction.cardNumber }}</p>
                        <p class="text-secondary">{{ transaction.date }}</p>
                    </v-list-item-subtitle>
                    <template v-slot:append>
                        <v-list-item-title class="fg-title-medium text-right">
                            <p class="text-secondary">{{ transaction.amount }} zł</p>
                        </v-list-item-title>
                    </template>
                </v-list-item>
            </v-list>

            <div style="position: absolute; bottom: 0px; width: 85%; padding-bottom: 32px" class="bg-surface">
                <v-divider></v-divider>
                <div class="d-flex flex-row pt-4">
                    <v-btn class="mr-4" color="primary" @click="onConfirm">Zapisz</v-btn>
                    <v-btn color="primary" variant="outlined" @click="onReject">Anuluj</v-btn>
                </div>
            </div>
        </div>

    </v-navigation-drawer>
</template>

<style scoped lang="scss">
.bg-surface-1 {
    background-color: mix(#B2C5FF, #1B1B1F, 5%)
}

.bg-surface-2 {
    background-color: mix(#B2C5FF, #1B1B1F, 8%)
}
</style>