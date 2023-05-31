<script setup lang="ts">
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import Button from '@/common/components/Button.vue'
import { useOnboardingStore } from '../stores/OnboardingStore';
import { OnboardingController } from '../controllers/OnboardingController';
import router from '@/router';

const onboardingStore = useOnboardingStore();
const onboardingController = new OnboardingController();

function _navigationIntent(): void {
    if (onboardingStore.membership) {
        onboardingController.sendConfirmMail(onboardingStore.email, onboardingStore.membership.name);
    } else {
        onboardingController.sendConfirmMail(onboardingStore.email, "HALF-OPEN");
    }
    router.push('/');
}
function _calculateTax(price: number | undefined): string {
    if (price) {
        const tax = Math.round(price * 0.23)
        return tax.toString();
    } else {
        return '';
    }

}
function _calculateSummary(): string {
    const membership = onboardingStore.membership;
    if (membership) {
        return (membership.price + Math.round(membership.price * 0.23) + membership.registrationFee).toString();
    } else {
        return '';
    }
}

</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row class="h-screen" align-content="center">
                    <v-col class="d-flex flex-column justify-center align-center" cols="8">
                        <Logo :height="163" :width="567" />

                        <p class="py-6 text-on-background fg-display-medium">Potwierdzenie zamówienia</p>
                        <v-card color="surface" class="pa-8 w-100">
                            <v-row no-gutters>
                                <v-col class="mr-16">
                                    <p class="fg-headline-small text-primary pb-2 ">Dane personalne</p>
                                    <v-divider class="pb-8"></v-divider>
                                    <p class="fg-body-large text-on-background">Imię: {{ onboardingStore.firstName }}
                                    </p>
                                    <p class="fg-body-large text-on-background">Nazwisko: {{ onboardingStore.lastName }}
                                    </p>
                                    <p class="fg-body-large text-on-background">Adres: {{ onboardingStore.address }}</p>
                                    <p class="fg-body-large text-on-background">Kod pocztowy: {{
                                        onboardingStore.postCode }}</p>
                                    <p class="fg-body-large text-on-background">Miasto: {{ onboardingStore.city }}</p>
                                    <p class="fg-headline-small text-primary pb-2 pt-8">Dane płatności</p>
                                    <v-divider class="pb-8"></v-divider>
                                    <p class="fg-body-large text-on-background">Karta: {{ onboardingStore.cardNumber }}
                                    </p>
                                    <p class="fg-body-large text-on-background">Data ważności: {{
                                        onboardingStore.shortExpiryDate }}</p>
                                    <p class="fg-body-large text-on-background">Imię i nazwisko: {{
                                        onboardingStore.cardHolder }}
                                    </p>
                                </v-col>
                                <v-col>
                                    <p class="fg-headline-small text-primary pb-2">Zamówienie</p>
                                    <v-divider class="pb-8"></v-divider>
                                    <p class="pa-0 fg-body-large text-on-background">Rodzaj karnetu: <span
                                            class="pa-0 fg-body-large-acetone text-primary"
                                            style="text-transform: uppercase;">{{ onboardingStore.membership?.name }}</span>
                                    </p>
                                    <p class="fg-body-large text-on-background">Koszt: {{
                                        onboardingStore.membership?.price }}zł</p>
                                    <p class="fg-body-large text-on-background">Vat(23%): {{
                                        _calculateTax(onboardingStore.membership?.price) }}zł</p>
                                    <p class="fg-body-large text-on-background">Opłata wpisowa: {{
                                        onboardingStore.membership?.registrationFee }}zł</p>


                                    <p class="fg-headline-small text-primary pb-2 pt-8">Podsumowanie</p>
                                    <v-divider class="pb-8"></v-divider>
                                    <p class="fg-body-large text-on-background">Do zapłaty: {{ _calculateSummary() }}zł</p>
                                    <p class="fg-body-large text-on-background">Potem: {{ onboardingStore.membership?.price
                                    }}zł/msc</p>
                                    <v-btn class="w-100 mt-16  fg-label-large text-on-primary" text="Potwierdź"
                                        @click="_navigationIntent()"></v-btn>
                                </v-col>
                            </v-row>
                        </v-card>

                        <PaginationDots :step=6 />
                    </v-col>
                    <BackgroundGirl :width="750" style="position: absolute; right: 250px; bottom:0px" />
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

<style>
.fb-btn.v-btn--outlined {
    border: thin solid #9B8F80;
}
</style>