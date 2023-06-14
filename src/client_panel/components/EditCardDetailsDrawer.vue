<script lang="ts" setup>
import { AccountController } from '@/account/controllers/AccountController';
import { useAccountDetailsStore } from '@/accountDetails/stores/AccountDetailsStore';
import type { CardDto } from '@/card/models/dto/CardDto';
import { OnboardingController } from '@/onboarding/controllers/OnboardingController';
import { ref, watch, } from 'vue';



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

const accountDetailsStore = useAccountDetailsStore();
const cardFromStore = accountDetailsStore.card;
const cardNumber = ref(cardFromStore.cardNumber);
const cvvNumber = ref(cardFromStore.cvvNumber);
const expiryDate = ref(_convertExpiryDate(cardFromStore.expiryDate));
const cardHolder = ref(cardFromStore.cardHolder);
const form = ref<HTMLFormElement | null>(null);
const required = (value: string) => !!value || 'Pole jest wymagane';
const maxLengthCardNumber = (cardNumber: string) => !!cardNumber && cardNumber.length <= 19 || 'Wartość nie może mieć więcej niż 19 znaków';
const minLengthCardNumber = (cardNumber: string) => !!cardNumber && cardNumber.length >= 8 || 'Wartość nie może mieć mniej niż 8 znaków';
const maxLengthCVV = (cvv: string) => !!cvv && cvv.length < 4 || 'Wartość nie może mieć więcej niż 4 znaki';
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

function _convertExpiryDate(expiryDate: string): string {
    const date = new Date(expiryDate)
    let month = date.getMonth() + 1
    let formattedMonth;
    if (month < 10) {
        formattedMonth = '0' + month.toString();
    }
    const year = date.getFullYear().toString().slice(2, 4);
    return formattedMonth + '/' + year;
}

function _toggleShow() {
    emit('update:modelValue', !show.value);
    show.value = !show.value;
}

async function _updateCard(): Promise<void> {
    const { valid } = await form.value!.validate()
    if (valid) {
        const onboardingController = new OnboardingController();

        const month = expiryDate.value.slice(0, 2)
        const year = "20" + expiryDate.value.slice(3, 5);
        const validExpiryDate = year + '-' + month + '-01';
        const date = new Date(validExpiryDate);
        const cardDto: CardDto = {
            id: cardFromStore.id,
            cardNumber: cardNumber.value,
            cvvNumber: cvvNumber.value,
            expiryDate: date.toISOString(),
            cardHolder: cardHolder.value,
        };
        await onboardingController.patchCardDetails(cardDto);
        const accountController = new AccountController();
        await accountController.get();
        _toggleShow();
    }
}


const emit = defineEmits(['update:modelValue']);

</script>
<template>
    <v-navigation-drawer class="" temporary location="right" v-model="show"
        @update:model-value="emit('update:modelValue', show)" width="419">
        <div class="d-flex flex-column h-screen pa-8">
            <v-list>
                <v-form ref="form" class="px-8 pt-8" @submit.prevent>
                    <h2 class="fg-title-large text-primary mb-8">Edycja metody płatności</h2>
                    <v-text-field class="mb-4" v-model="cardNumber" label="Numer karty" variant="outlined"
                        prepend-inner-icon="mdi-credit-card-outline"
                        :rules="[required, maxLengthCardNumber, cardNumberFormat, minLengthCardNumber]"></v-text-field>

                    <v-row class="mb-4" no-gutters>
                        <v-col cols="8 mr-4">
                            <v-text-field v-model="expiryDate" label="Data ważności (MM/YY)"
                                prepend-inner-icon="mdi-calendar-today" variant="outlined"
                                :rules="[required, cardExpiryDatePattern]"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="cvvNumber" label="CVV" variant="outlined"
                                :rules="[required, maxLengthCVV, numberCVV]"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-text-field v-model="cardHolder" label="Imię i nazwisko posiadacza karty"
                        prepend-inner-icon="mdi-account-outline" variant="outlined" :rules="[required]"></v-text-field>
                </v-form>
            </v-list>
            <div style="position: absolute; bottom: 32px; width: 100%;">
                <v-divider></v-divider>
                <div class="d-flex flex-row pt-4">
                    <v-btn class="mr-4" color="primary" @click="_updateCard">Zapisz</v-btn>
                    <v-btn color="primary" variant="outlined" @click="_toggleShow">Anuluj</v-btn>
                </div>
            </div>
        </div>

    </v-navigation-drawer>
</template>