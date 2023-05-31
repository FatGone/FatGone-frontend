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
        <v-dialog v-model="dialog" persistent width="300" @update:model-value="emit('update:modelValue', dialog)">
            <v-card class="pa-4">
                <v-card-title class="fg-headline-small" style="white-space: normal;">
                    Czy na pewno chcesz zresetować odcisk palca?
                </v-card-title>

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