<script setup lang="ts">
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router';


function navigationIntent(): void {

    // router.push('/onboarding/membership-type');
}

</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="9" align-self="center">
                        <Logo :width="567" />

                        <div class="d-flex flex-column align-center">
                            <p class="py-6 text-on-background fg-display-medium">Potwierdzenie zamówienia</p>
                            <v-card color="background px-4">
                                <v-row>
                                    <v-col>
                                        <p class="fg-headline-small text-primary pb-2 px-8 pt-4">Dane personalne</p>
                                        <v-divider class="pb-3"></v-divider>
                                        <p class="fg-body-small text-on-background">Imię: Grzegorsz</p>
                                        <p class="fg-body-small text-on-background">Nazwisko: Brzęczyszczykiewicz</p>
                                        <p class="fg-body-small text-on-background">Ulica: Rabrarbarowa</p>
                                        <p class="fg-body-small text-on-background">Numer domu: 13</p>
                                        <p class="fg-body-small text-on-background">Numer mieszkania: 121</p>
                                        <p class="fg-body-small text-on-background">Kod pocztowy: 91-464</p>
                                        <p class="fg-body-small text-on-background">Miasto:</p>
                                        <p class="fg-headline-small text-primary pb-2 px-8 pt-4">Dane płatności</p>
                                        <v-divider class="pb-3"></v-divider>
                                        <p class="fg-body-small text-on-background">Karta: **** **** **** 0000</p>
                                        <p class="fg-body-small text-on-background">Data waności: 07/2023</p>
                                        <p class="fg-body-small text-on-background">Imię i nazwisko: Grzegorz
                                            Brzęczyszczykiewicz
                                        </p>
                                    </v-col>
                                    <v-col>
                                        <p class="fg-headline-small text-primary pb-2 px-8 pt-4">Zamówienie</p>
                                        <v-divider class="pb-3"></v-divider>
                                        <p class="fg-body-small text-on-background">Rodzaj karnetu: Half-open</p>
                                        <p class="fg-body-small text-on-background">Koszt: 49.99zł</p>
                                        <p class="fg-body-small text-on-background">Vat(23%): 11.50</p>
                                        <p class="fg-body-small text-on-background">Opłata wpisowa: 89.99zł</p>
                                        <p class="fg-headline-small text-primary pb-2 px-8 pt-4">Podsumowanie</p>
                                        <v-divider class="pb-3"></v-divider>
                                        <p class="fg-body-small text-on-background">Do zapłaty: 151.48zł</p>
                                        <p class="fg-body-small text-on-background">Potem: 49.99zł/msc</p>
                                        <v-btn class="w-100 py-2 px-16 mb-8 fb-btn.v-btn--outlined" variant="outlined"
                                            @click="navigationIntent()"><span
                                                class="pa-0 fg-label-large text-primary">Potwierdź</span></v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </div>
                        <PaginationDots :step=6 />
                    </v-col>
                    <v-col cols="3">
                        <BackgroundGirl />
                    </v-col>
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