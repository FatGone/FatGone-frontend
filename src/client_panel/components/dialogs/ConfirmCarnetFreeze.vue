<script setup lang="ts">
import { ref, watch } from 'vue';


const dialog = ref(false);

const props = defineProps({
    value: {
        type: Boolean,
        required: true,
    },
    isAlreadyFreezed: {
        type: Boolean,
        required: true,
    }
})

watch(() => props.value, (value: boolean) => {
    dialog.value = value;
});

const emit = defineEmits(['update:modelValue', 'update:value']);

function onConfirm() {
    dialog.value = false;
    emit('update:value', !props.isAlreadyFreezed);
    emit('update:modelValue', false);
}

function onRejected() {
    dialog.value = false;
    emit('update:modelValue', false);
}

</script>

<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="350" @update:model-value="emit('update:modelValue', dialog)">
            <v-card class="pa-4">
                <v-card-title class="fg-headline-small" style="white-space: normal;">
                    Czy na pewno chcesz {{ (isAlreadyFreezed) ? 'odmrozić' : 'zamrozić' }} karnet?
                </v-card-title>
                <v-card-text>
                    <p v-if="!isAlreadyFreezed" class="fg-body-medium">
                        Podczas mrożenia karnetu, nie będziemy obciążać cię kosztem karnetu, ale pobierzemy z twojego konta
                        opłatę manipulacyjną w wysokości 15zł za każdy miesiąc mrożenia, rozpoczynając od nowego okresu
                        rozliczeniowego. Podczas mrożenia dostęp do placówek FatGone będzie zablokowany. Po odmrożeniu
                        koszt karnetu zostanie naliczony na kratę po upływie tylu dni ile w momencie mrożenia, zostało do
                        następnej płatności.
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" @click="onRejected">
                        Anuluj
                    </v-btn>
                    <v-btn variant="text" @click="onConfirm">
                        Potwierdź
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>