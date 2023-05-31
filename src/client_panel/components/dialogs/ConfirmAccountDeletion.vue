<script setup lang="ts">
import { ref, watch } from 'vue';


const dialog = ref(false);

const props = defineProps({
    value: {
        type: Boolean,
        required: true,
    }
})

watch(() => props.value, (value: boolean) => {
    dialog.value = value;
});

const emit = defineEmits(['update:modelValue']);

</script>

<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="350" @update:model-value="emit('update:modelValue', dialog)">
            <v-card class="pa-4">
                <v-card-title class="fg-headline-small" style="white-space: normal;">
                    Czy na pewno chcesz usunąć konto?
                </v-card-title>
                <v-card-text>
                    <p class="fg-body-medium">
                        Usunięcie konta wiąże się z natychmiastową utratą dostępu do placówek AquaSplash oraz usunięciem
                        wszelkich danych o użytkowniku w systemie. Żeby ponownie zamówić karnet, będzie potrzebna
                        rejestracja.
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" @click="dialog = false">
                        Anuluj
                    </v-btn>
                    <v-btn variant="text" @click="dialog = false">
                        Potwierdź
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>