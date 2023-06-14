<script setup lang="ts">
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router';
import { useOnboardingStore } from '../stores/OnboardingStore';
import { ref } from 'vue';
import type { CardDto } from '../../card/models/dto/CardDto';
import { OnboardingController } from '../controllers/OnboardingController';



const onboardingStore = useOnboardingStore();
const onboardingController = new OnboardingController();
const cardNumber = ref(onboardingStore.cardNumber);
const cvvNumber = ref(onboardingStore.cvvNumber);
const expiryDate = ref(_convertInitExpiryDate(onboardingStore.cardExpiryDate));
const cardHolder = ref(onboardingStore.cardHolder);
const form = ref<HTMLFormElement | null>(null);


function _convertInitExpiryDate(expiryDate: string): string {
    if (expiryDate.length == 0) {
        return '';
    }
    const year = expiryDate.slice(2, 4);
    const month = expiryDate.slice(5, 7);
    return month + '/' + year;
}
function _navigationIntent(): void {
    router.push('/onboarding/summary');
}
async function _updateCardDetails(): Promise<void> {
    const { valid } = await form.value!.validate()
    if (valid) {
        const month = expiryDate.value.slice(0, 2)
        const year = "20" + expiryDate.value.slice(3, 5);
        const validExpiryDate = year + '-' + month + '-01';
        onboardingStore.updateExpiryDate(year + '-' + month);
        const date = new Date(validExpiryDate);
        const numberCvv: number = cvvNumber.value;
        const cardDto: CardDto = {
            id: null,
            cardNumber: cardNumber.value,
            cvvNumber: numberCvv,
            expiryDate: date.toISOString(),
            cardHolder: cardHolder.value,
        };
        onboardingStore.updateCardDetails(cardDto);
        await onboardingController.patchCardDetails(cardDto);
        _navigationIntent();
    }
}
const required = (value: string) => !!value || 'Pole jest wymagane';
const maxLengthCardNumber = (cardNumber: string) => !!cardNumber && cardNumber.length <= 19 || 'Wartość nie może mieć więcej niż 19 znaków';
const minLengthCardNumber = (cardNumber: string) => !!cardNumber && cardNumber.length >= 8 || 'Wartość nie może mieć mniej niż 8 znaków';
const maxLengthCVV = (cvv: string) => !!cvv && cvv.length <= 4 || 'Wartość nie może mieć więcej niż 4 znaki';
const numberCVV = (cvv: string) => {
    const pattern = /^[0-9]*$/;
    return pattern.test(cvv) || 'Kod CVV składa się z samych cyfr';
}
const cardNumberFormat = (cardNumber: string) => {
    const pattern = /^[0-9]*$/;
    return pattern.test(cardNumber) || 'Numer karty składa się z samych cyfr';
}
const cardExpiryDatePattern = (expiryDate: string) => {
    const pattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    return pattern.test(expiryDate) || 'Niepoprawny format daty';
}


</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row class="h-screen" align-content="center">
                    <v-col class="d-flex flex-column justify-center align-center" cols="5" offset="2">
                        <Logo :height="163" :width="567" />
                        <p class="text-on-background fg-display-medium pt-16">Podaj dane karty</p>
                        <v-card color="bg-background" class="w-100 mx-16 mt-8 rounded-lg">
                            <v-form ref="form" class="px-8 pt-8" @submit.prevent>
                                <v-row class="mt-1">
                                    <v-text-field class="mb-4" variant="outlined" prepend-inner-icon="mdi-credit-card"
                                        label="Numer karty" clearable v-model="cardNumber"
                                        :rules="[required, maxLengthCardNumber, cardNumberFormat, minLengthCardNumber]"></v-text-field>
                                </v-row>
                                <v-row class="mt-1 mb-4">
                                    <v-col class="pa-0">
                                        <v-text-field variant="outlined" prepend-inner-icon="mdi-calendar-today"
                                            label="Data ważności (MM/YY)" class="pr-2" clearable v-model="expiryDate"
                                            :rules="[required, cardExpiryDatePattern]"></v-text-field>
                                    </v-col>
                                    <v-col class="pa-0" cols="3">
                                        <v-text-field variant="outlined" label="CVV" clearable v-model="cvvNumber"
                                            :rules="[required, maxLengthCVV, numberCVV]"></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row class="mt-1 mb-4">
                                    <v-text-field variant="outlined" label="Imię i nazwisko posiadacza karty" clearable
                                        v-model="cardHolder" :rules="[required]"></v-text-field>
                                </v-row>
                                <Button class="w-100 py-2" label="Potwierdź" @click="_updateCardDetails"></Button>

                            </v-form>
                        </v-card>

                        <PaginationDots :step=5 />
                    </v-col>
                    <BackgroundGirl :width="750" style="position: absolute; right: 250px; bottom:0px" />
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

