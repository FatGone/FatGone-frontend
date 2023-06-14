<script setup lang="ts">
import { AccountController } from '@/account/controllers/AccountController';
import { OnboardingController } from '@/onboarding/controllers/OnboardingController';
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
async function cancelMembership() {
    const onboardingController = new OnboardingController();
    await onboardingController.cancelMembership();
    const accountController = new AccountController();
    await accountController.get();
    window.location.reload();
}

function toggleDialog() {
    dialog.value = false;
    cancelMembership();
}
</script>

<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="350" @update:model-value="emit('update:modelValue', dialog)">
            <v-card class="pa-4">
                <v-card-title class="fg-headline-small" style="white-space: normal;">
                    Czy na pewno chcesz zrezygnować z karnetu?
                </v-card-title>
                <v-card-text>
                    <p class="fg-body-medium">
                        Rezygnacja z karnetu wiąże się z utratą opłaty wpisowej, w celu ponownego wykupienia karnetu
                        potrzebne będzie uiszczenie jej jeszcze raz. Polecamy sprawdzenie również opcji zarmożenia karnetu
                        oraz zmiany typu karnetu zanim podejmiesz decyzję.
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" @click="dialog = false">
                        Anuluj
                    </v-btn>
                    <v-btn variant="text" @click="toggleDialog">
                        Potwierdź
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>