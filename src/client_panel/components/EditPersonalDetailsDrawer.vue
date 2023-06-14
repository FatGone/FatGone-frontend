<script lang="ts" setup>
import { OnboardingController } from '@/onboarding/controllers/OnboardingController';
import type { AccountDetailsDto } from '@/accountDetails/models/dto/AccountDetailsDto';
import { useOnboardingStore } from '@/onboarding/stores/OnboardingStore';
import { ref, watch, } from 'vue';
import { useAccountDetailsStore } from '@/accountDetails/stores/AccountDetailsStore';



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
const accountDetailsStore = useAccountDetailsStore();
const onboardingController = new OnboardingController();
const onboardingStore = useOnboardingStore();
const firstName = ref(accountDetailsStore.firstName);
const lastName = ref(accountDetailsStore.lastName);
const street = ref(accountDetailsStore.street);
const streetNumber = ref(accountDetailsStore.streetNumber);
const flatNumber = ref(accountDetailsStore.flatNumber);
const postCode = ref(accountDetailsStore.postCode);
const city = ref(accountDetailsStore.city);

async function _updatePersonalDetails(): Promise<void> {
    const accountDetailsDto: AccountDetailsDto = {
        id: accountDetailsStore.id!,
        firstName: firstName.value!,
        lastName: lastName.value!,
        street: street.value!,
        streetNumber: streetNumber.value!,
        flatNumber: flatNumber.value!,
        postCode: postCode.value!,
        city: city.value!,
        card: accountDetailsStore.card!,
        clientMembership: accountDetailsStore.clientMembership,
    };
    accountDetailsStore.setAccountDetailsDto(accountDetailsDto);
    onboardingStore.updateAccountDetails(accountDetailsDto);
    await onboardingController.patchAccountDetails(accountDetailsDto);
    _toggleShow();
}
function _toggleShow() {
    emit('update:modelValue', !show.value);
    show.value = !show.value;
}
</script>
<template>
    <v-navigation-drawer class="" temporary location="right" v-model="show"
        @update:model-value="emit('update:modelValue', show)" width="419">
        <div class="d-flex flex-column h-screen pa-8">
            <v-list>
                <h2 class="fg-title-large text-primary mb-8">Edycja danych personalnych</h2>
                <v-text-field v-model="firstName" label="Imię" variant="outlined"></v-text-field>
                <v-text-field v-model="lastName" label="Nazwisko" variant="outlined"></v-text-field>
                <v-row no-gutters>
                    <v-col cols="8 mr-4">
                        <v-text-field v-model="street" label="Ulica" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="streetNumber" label="Numer domu" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="6 mr-4">
                        <v-text-field v-model="flatNumber" label="Numer mieszkania" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="postCode" label="Kod pocztowy" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>
                <v-text-field v-model="city" label="Miasto" variant="outlined"></v-text-field>
            </v-list>
            <div style="position: absolute; bottom: 32px; width: 100%;">
                <v-divider></v-divider>
                <div class="d-flex flex-row pt-4">
                    <v-btn class="mr-4" color="primary" @click="_updatePersonalDetails">Zapisz</v-btn>
                    <v-btn color="primary" variant="outlined" @click="_toggleShow">Anuluj</v-btn>
                </div>
            </div>
        </div>

    </v-navigation-drawer>
</template>