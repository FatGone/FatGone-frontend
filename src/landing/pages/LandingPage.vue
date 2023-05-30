<script setup lang="ts">
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import BenefitIcon1 from '@/assets/svg/benefit-icon-1.svg'
import BenefitIcon2 from '@/assets/svg/benefit-icon-2.svg'
import BenefitIcon3 from '@/assets/svg/benefit-icon-3.svg'
import BenefitCard from '@/landing/components/BenefitCard.vue'
import MembershipCard from '@/landing/components/MembershipCard.vue'
import { ref } from 'vue'

const benefits = ref([
    {
        id: 1,
        icon: BenefitIcon1,
        width: 94,
        height: 124,
        title: 'Podejście szyte na miarę',
        description: 'W FatGone stawiamy na indywidualne podejście do każdego klienta. Nasi trenerzy personalni i instruktorzy zajęć grupowych pomogą Ci dostosować trening do Twoich celów i potrzeb, zapewniając Ci motywację i wsparcie na każdym etapie.'
    },
    {
        id: 2,
        icon: BenefitIcon2,
        width: 133.5,
        height: 56.74,
        title: 'Kompleksowa oferta',
        description: 'W naszych centrach znajdziesz wszystko, czego potrzebujesz do osiągnięcia swoich celów fitness i wellness. Od nowoczesnego sprzętu na siłowni, przez różnorodne zajęcia grupowe, po strefy relaksacyjne, w tym sauny, jacuzzi i baseny.'
    },
    {
        id: 3,
        icon: BenefitIcon3,
        width: 95.34,
        height: 131.88,
        title: 'Doświadczenie i jakość',
        description: 'FatGone to firma z wieloletnim doświadczeniem w branży fitness i wellness. Nasza oferta opiera się na najnowszych trendach i badaniach naukowych, a nasze centra wyposażone są w najlepszy sprzęt na rynku. Dzięki temu możesz mieć pewność, że otrzymasz usługi wysokiej jakości, które pozwolą Ci osiągnąć najlepsze efekty.'
    },
])

const memberships = ref([
    {
        id: 1,
        title: 'HALF-OPEN',
        benefits: [
            'Dostęp do wszystkich obiektów FATGONE',
            'Dodatkowo płatny dostęp do sekcji SPA i Wellness',
            '4 zajęcia grupowe w miesiącu',
            '1 konsultacja z trenerem personalnym w miesiącu'
        ],
        price: 49
    },
    {
        id: 2,
        title: 'OPEN',
        benefits: [
            'Dostęp do wszystkich obiektów FATGONE',
            'Dostęp do sekcji SPA i Wellness',
            'Wszystkie zajęcia grupowe',
            'Trening przygotowany i nadzorowany przez naszego specjalistę dostosowany do ciebie'
        ],
        price: 99
    },
])
</script>

<template>
    <v-app>
        <v-responsive>
            <v-container>
                <!-- Landing 1 -->
                <v-toolbar density="compact" class="bg-background">
                    <v-spacer></v-spacer>
                    <v-btn variant="text" height="40" width="219" class="fg-label-large text-none">
                        Nie jesteś członkiem? Dołącz teraz!
                    </v-btn>
                    <!-- <p class="fg-label-large text-none pt-2">
                        Cześć, Grzegorz!
                    </p> -->
                    <v-btn variant="flat" height="40" width="105" class="fg-label-large text-none ms-10">
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
                            <v-icon icon="mdi-menu-down" color="primary" size="x-large" role="button" class="on-background"/>
                        </div>
                    </v-col>
                    <v-col cols="5">
                        <BackgroundGirl :height="831.58"/> 
                    </v-col>
                </v-row>
                <!-- Landing 2 -->
                <p class="fg-display-large text-on-background text-center my-16">Dlaczego my?</p>
                <v-row no-gutters>
                    <v-col v-for="benefit in benefits" :key="benefit.id">
                        <benefit-card :image="benefit.icon" :width="benefit.width" :height="benefit.height" :title="benefit.title" :description="benefit.description"/>
                    </v-col>
                </v-row>
                <!-- Landing 3 -->
                <p class="fg-display-large text-on-background text-center my-16">Dołącz już dziś!</p>
                <v-row no-gutters>
                    <v-col v-for="membership in memberships" :key="membership.id">
                        <membership-card :title="membership.title" :price="membership.price">
                            <v-list lines="one" class="py-0">
                                <v-list-item v-for="benefit in membership.benefits" :key="benefit" class="pa-0">
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-check" color="primary" size="small"></v-icon>
                                    </template>
                                    <p class="fg-body-large text-on-surface">{{benefit}}</p>
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
</style>