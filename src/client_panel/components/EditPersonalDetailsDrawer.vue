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
const firstName = ref(accountDetailsStore.accountDetails?.firstName);
const lastName = ref(accountDetailsStore.accountDetails?.lastName);
const street = ref(accountDetailsStore.accountDetails?.street);
const streetNumber = ref(accountDetailsStore.accountDetails?.streetNumber);
const flatNumber = ref(accountDetailsStore.accountDetails?.flatNumber);
const postCode = ref(accountDetailsStore.accountDetails?.postCode);
const city = ref(accountDetailsStore.accountDetails?.city);

async function _updatePersonalDetails(): Promise<void> {
    const accountDetailsDto: AccountDetailsDto = {
        id: accountDetailsStore.accountDetails?.id!,
        firstName: firstName.value!,
        lastName: lastName.value!,
        phoneNumber: '',
        street: street.value!,
        streetNumber: streetNumber.value!,
        flatNumber: flatNumber.value!,
        postCode: postCode.value!,
        city: city.value!,
        membershipTypeId: 1,
        card: accountDetailsStore.accountDetails?.card!,
    };
    accountDetailsStore.setAccountDetails(accountDetailsDto);
    onboardingStore.updateAccountDetails(accountDetailsDto);
    await onboardingController.patchAccountDetails(accountDetailsDto);
    _hideDrawer();
}
function _hideDrawer() {
    show.value = false;
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
                    <v-btn color="primary" variant="outlined" @click="_hideDrawer">Anuluj</v-btn>
                </div>
            </div>
        </div>

    </v-navigation-drawer>
</template>