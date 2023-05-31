<script setup lang="ts">
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router';
import { ref } from 'vue';
import { useOnboardingStore } from '../stores/OnboardingStore';
import type { AccountDetailsDto } from '../models/dto/AccountDetailsDto';
import type { AddressDto } from '../models/dto/AddressDto';
import { OnboardingController } from '../controllers/OnboardingController';

const onboardingController = new OnboardingController();
const onboardingStore = useOnboardingStore();
const name = ref(onboardingStore.firstName);
const lastName = ref(onboardingStore.lastName);
const street = ref(onboardingStore.street);
const streetNumber = ref(onboardingStore.streetNumber);
const flatNumber = ref(onboardingStore.flatNumber);
const postCode = ref(onboardingStore.postCode);
const city = ref(onboardingStore.city);
const form = ref<HTMLFormElement | null>(null);

function _navigationIntent(): void {
    router.push('/onboarding/membership-type');
}

async function _updatePersonalDetails(): Promise<void> {
    const { valid } = await form.value!.validate();

    if (valid) {
        const accountDetailsDto: AccountDetailsDto = {
            id: 0,
            firstName: name.value,
            lastName: lastName.value,
            phoneNumber: 'phoneNumber',
            address: street.value + streetNumber.value + '/' + flatNumber.value,
            city: city.value,
            postCode: postCode.value,
            card: null,
        };
        const addressDto: AddressDto = {
            address: street.value + " " + streetNumber.value + '/' + flatNumber.value,
            street: street.value,
            streetNumber: streetNumber.value,
            flatNumber: flatNumber.value,
            city: city.value,
            postCode: postCode.value,
        }
        onboardingStore.updateAccountDetails(accountDetailsDto, addressDto);
        await onboardingController.patchAccountDetails(accountDetailsDto);
        if (onboardingStore.membership) {
            router.push('/onboarding/card');
        } else {
            _navigationIntent();
        }
    }

}


const required = (value: string) => !!value || 'Pole jest wymagane';
const maxLengthNames = (names: string) => !!names && names.length <= 45 || 'Wartość nie może mieć więcej niż 45 znaków';
const maxLengthAddress = (address: string) => !!address && address.length <= 50 || 'Wartość nie może mieć więcej niż 50 znaków';
const maxLengthFlatNumber = (flatNumber: string) => !!flatNumber && flatNumber.length <= 6 || 'Wartość nie moe mieć więcej niż 6 znaków';
const flatNumberRule = (flatNumber: string) => {
    const pattern = /^[0-9]*$/;
    return pattern.test(flatNumber) || 'Numer mieszkania składa się z cyfr';
}
const streetNumberRule = (streetNumber: string) => {
    const pattern = /^[0-9]*$/;
    return pattern.test(streetNumber) || 'Numer domu składa się z cyfr';
}
const postCodeFormat = (postCode: string) => {
    const pattern = /^[0-9]+-([0-9]+)+$/;
    return pattern.test(postCode) || 'Niepoprawny format';
}

</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row class="h-screen" align-content="center">
                    <v-col class="d-flex flex-column justify-center align-center" cols="5" offset="2">
                        <Logo :height="163" :width="567" />
                        <p class="text-on-background fg-display-medium pt-16">Uzupełnij swoje dane</p>
                        <v-card color="bg-background" class="w-100 mx-16 mt-8 rounded-lg">
                            <v-form ref="form" class="px-8 pt-8" @submit.prevent>
                                <v-row class="mt-1">
                                    <v-text-field variant="outlined" class="pr-2 mb-4" label="Imię"
                                        prepend-inner-icon="mdi-account-outline" :rules="[required, maxLengthNames]"
                                        clearable v-model="name"></v-text-field>
                                    <v-text-field class="mb-4" variant="outlined" label="Nazwisko"
                                        :rules="[required, maxLengthNames]" clearable v-model="lastName"></v-text-field>
                                </v-row>
                                <v-row class="mt-1">
                                    <v-col class="pa-0">
                                        <v-text-field variant="outlined" prepend-inner-icon="mdi-home-outline" label="Ulica"
                                            class="pr-2 mb-4" :rules="[required, maxLengthAddress]" clearable
                                            v-model="street"></v-text-field>
                                    </v-col>
                                    <v-col class="pa-0" cols="3">
                                        <v-text-field class="mb-4" variant="outlined" label="Numer domu"
                                            :rules="[required, maxLengthFlatNumber, streetNumberRule]" clearable
                                            v-model="streetNumber"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-1">
                                    <v-text-field variant="outlined" label="Numer mieszkania" class="pr-2 mb-4"
                                        :rules="[required, maxLengthFlatNumber, flatNumberRule]" clearable
                                        v-model="flatNumber"></v-text-field>
                                    <v-text-field class="mb-4" variant="outlined" label="Kod pocztowy"
                                        :rules="[required, postCodeFormat]" clearable v-model="postCode"></v-text-field>
                                </v-row>
                                <v-row class="mt-1">
                                    <v-text-field class="mb-4" variant="outlined" label="Miasto"
                                        :rules="[required, maxLengthNames]" clearable v-model="city"></v-text-field>
                                </v-row>
                                <Button class="w-100 py-2" label="Potwierdź" @click="_updatePersonalDetails"></Button>
                            </v-form>
                        </v-card>

                        <PaginationDots :step=3 />
                    </v-col>
                    <BackgroundGirl :width="750" style="position: absolute; right: 250px; bottom:0px" />
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

