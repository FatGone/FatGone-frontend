<script setup lang="ts">
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import Button from '@/common/components/Button.vue'
import { useOnboardingStore } from '../stores/OnboardingStore';

const onboardingStore = useOnboardingStore();
function navigationIntent(): void {
    // router.push('/onboarding/membership-type');
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
                                    <p class="fg-body-large text-on-background">Data waności: {{
                                        onboardingStore.cardExpiryDate }}</p>
                                    <p class="fg-body-large text-on-background">Imię i nazwisko: {{
                                        onboardingStore.cardHolder }}
                                    </p>
                                </v-col>
                                <v-col>
                                    <p class="fg-headline-small text-primary pb-2">Zamówienie</p>
                                    <v-divider class="pb-8"></v-divider>
                                    <p class="pa-0 fg-body-large text-on-background">Rodzaj karnetu: <span
                                            class="pa-0 fg-body-large-acetone text-primary">HALF-OPEN</span></p>
                                    <p class="fg-body-large text-on-background">Koszt: 49.99zł</p>
                                    <p class="fg-body-large text-on-background">Vat(24%): 11.50</p>
                                    <p class="fg-body-large text-on-background">Opłata wpisowa: 89.99zł</p>


                                    <p class="fg-headline-small text-primary pb-2 pt-8">Podsumowanie</p>
                                    <v-divider class="pb-8"></v-divider>
                                    <p class="fg-body-large text-on-background">Do zapłaty: 151.48zł</p>
                                    <p class="fg-body-large text-on-background">Potem: 49.99zł/msc</p>
                                    <v-btn class="w-100 mt-16  fg-label-large text-on-primary" text="Potwierdź"
                                        @click="navigationIntent()"></v-btn>
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