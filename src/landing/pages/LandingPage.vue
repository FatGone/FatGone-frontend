<script setup lang="ts">
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import landingPageCardIcon1 from '@/assets/svg/LandingPageCardIcon1.svg'
import landingPageCardIcon2 from '@/assets/svg/LandingPageCardIcon2.svg'
import landingPageCardIcon3 from '@/assets/svg/LandingPageCardIcon3.svg'
import BenefitCard from '@/landing/components/BenefitCard.vue'
import MembershipCard from '@/landing/components/MembershipCard.vue'
</script>

<template>
    <v-app>
        <v-responsive>
            <v-container>
                <v-toolbar density="compact" class="bg-background">
                    <v-spacer></v-spacer>
                    <v-btn variant="text" absolute height="40" width="219" class="fg-label-large text-none">
                        Nie jesteś członkiem? Dołącz teraz!
                    </v-btn>
                    <!-- <p class="fg-label-large text-none pt-2">
                        Cześć, Grzegorz!
                    </p> -->
                    <v-btn variant="flat" absolute height="40" width="105" class="fg-label-large text-none ms-6">
                        Logowanie
                    </v-btn>
                    <!-- <v-btn variant="flat" height="40" width="188" class="fg-label-large text-none ms-6">
                        Przejdź do panelu klienta
                    </v-btn> -->
                </v-toolbar>
                <v-row no-gutters>
                    <v-col cols="5" offset="2" align-self="center">
                        <div class="pb-16">
                            <Logo :height="153" class="pb-16"/>
                        </div>
                        <p class="fg-headline-large text-on-background pt-16 pb-16">Twoje centrum siły, wellnessu i zdrowia</p>
                        <div class="d-flex justify-end pt-16 pr-16">
                            <v-btn variant="text" icon="mdi-menu-down" size="large" color="bg-on-background"></v-btn>
                        </div>
                    </v-col>
                    <v-col cols="5">
                        <BackgroundGirl :height="831.58"/> 
                    </v-col>
                </v-row>
                <p class="fg-display-large text-on-background text-center my-16">Dlaczego my?</p>
                <v-row no-gutters>
                    <v-col>
                        <benefit-card :image="landingPageCardIcon1" :width="94" :height="124" title="Podejście szyte na miarę" description="W FatGone stawiamy na indywidualne podejście do każdego klienta. Nasi trenerzy personalni i instruktorzy zajęć grupowych pomogą Ci dostosować trening do Twoich celów i potrzeb, zapewniając Ci motywację i wsparcie na każdym etapie."></benefit-card>
                    </v-col>
                    <v-col>
                        <benefit-card :image="landingPageCardIcon2" :width="133.5" :height="56.74" title="Kompleksowa oferta" description="W naszych centrach znajdziesz wszystko, czego potrzebujesz do osiągnięcia swoich celów fitness i wellness. Od nowoczesnego sprzętu na siłowni, przez różnorodne zajęcia grupowe, po strefy relaksacyjne, w tym sauny, jacuzzi i baseny."></benefit-card>
                    </v-col>
                    <v-col>
                        <benefit-card :image="landingPageCardIcon3" :width="95.34" :height="131.88" title="Doświadczenie i jakość" description="FatGone to firma z wieloletnim doświadczeniem w branży fitness i wellness. Nasza oferta opiera się na najnowszych trendach i badaniach naukowych, a nasze centra wyposażone są w najlepszy sprzęt na rynku. Dzięki temu możesz mieć pewność, że otrzymasz usługi wysokiej jakości, które pozwolą Ci osiągnąć najlepsze efekty."></benefit-card>
                    </v-col>
                </v-row>
                <p class="fg-display-large text-on-background text-center my-16">Dołącz już dziś!</p>
                <v-row no-gutters>
                    <v-col>
                        <membership-card title="HALF-OPEN" :price="49">
                            <v-list lines="one" active-color="on-surface" class="py-0">
                                <v-list-item class="pa-0">
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-check" color="primary" size="x-small"></v-icon>
                                    </template>
                                    <p class="fg-body-large text-on-surface">Dostęp do wszystkich obiektów FATGONE</p>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-check" color="primary" size="x-small"></v-icon>
                                    </template>
                                    <p class="fg-body-large text-on-surface">Dodatkowo płatny dostęp do sekcji SPA i Wellness</p>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-check" color="primary" size="x-small"></v-icon>
                                    </template>
                                    <p class="fg-body-large text-on-surface">4 zajęcia grupowe w miesiącu</p>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-check" color="primary" size="x-small"></v-icon>
                                    </template>
                                    <p class="fg-body-large text-on-surface">1 konsultacja z trenerem personalnym w miesiącu</p>
                                </v-list-item>
                            </v-list>
                        </membership-card>
                    </v-col>
                    <v-col>
                        <membership-card title="OPEN" :price="99">
                            <v-list lines="one" color="on-surface" class="py-0">
                                <v-list-item class="pa-0">
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-check" color="primary" size="x-small"></v-icon>
                                    </template>
                                    <p class="fg-body-large text-on-surface">Dostęp do wszystkich obiektów FATGONE</p>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-check" color="primary" size="x-small"></v-icon>
                                    </template>
                                    <p class="fg-body-large text-on-surface">Dostęp do sekcji SPA i Wellness</p>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-check" color="primary" size="x-small"></v-icon>
                                    </template>
                                    <p class="fg-body-large text-on-surface">Wszystkie zajęcia grupowe</p>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-check" color="primary" size="x-small"></v-icon>
                                    </template>
                                    <p class="fg-body-large text-on-surface">Trening przygotowany i nadzorowany przez naszego specjalistę dostosowany do ciebie</p>
                                </v-list-item>
                            </v-list>
                        </membership-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-responsive>
    </v-app>
</template>

<style scoped>
    h1 {
        font-weight: 400;
        font-size: 45px;
        line-height: 52px;
    }
</style>