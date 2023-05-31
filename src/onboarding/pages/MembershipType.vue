<script setup lang="ts">
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router';
import { useOnboardingStore } from '../stores/OnboardingStore';

const onboardingStore = useOnboardingStore();

function _updateMembershipType(typeId: number) {
    onboardingStore.updateMembershipType(typeId);
    _navigationIntent();
}

function _navigationIntent(): void {
    router.push('/onboarding/card');
}


</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row class="h-screen" align-content="center">
                    <v-col class="d-flex flex-column justify-center align-center" cols="5" offset="2">
                        <Logo :height="163" :width="567" />
                        <p class="text-on-background fg-display-medium pt-16">Wybierz rodzaj karnetu</p>
                        <v-row>
                            <v-col>
                                <v-card color="background" class="w-100 px-8 mt-8 pb-6 rounded-lg text-center">
                                    <p class="fg-display-small text-on-surface pt-6">Karnet</p>
                                    <p class="pt-3 text-primary fg-display-large-acetone">HALF-OPEN</p>
                                    <v-row class="px-8 pt-6">
                                        <p>
                                            <v-icon class="pa-0" icon="mdi-check" color="primary"></v-icon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Dostęp do wszystkich
                                                obiektów AQUASPLASH
                                            </span>>
                                        </p>
                                    </v-row>
                                    <v-row class="px-8 pt-6">
                                        <p>
                                            <v-icon class="pa-0" icon="mdi-check" color="primary"></v-icon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Dodatkowo płatny dostęp do
                                                sekcji
                                                SPA i
                                                Wellness</span>
                                        </p>
                                    </v-row>
                                    <v-row class="px-8 pt-6">
                                        <p>
                                            <v-icon class="pa-0" icon="mdi-check" color="primary"></v-icon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">4 zajęcia grupowe w
                                                miesiącu</span>
                                        </p>
                                    </v-row>
                                    <v-row class="px-8 pt-6">
                                        <p>
                                            <v-icon class="pa-0" icon="mdi-check" color="primary"></v-icon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">1 konsultacja z trenerem
                                                personalnym w
                                                miesiącu
                                            </span>
                                        </p>
                                    </v-row>
                                    <p class="pt-12 fg-headline-medium">49 zł<span
                                            class="pa-0 text-primary fg-headline-medium">/</span>msc</p>
                                    <Button class="w-100 py-2 px-16 mb-8 " label="Wybieram"
                                        @click="_updateMembershipType(1)"></Button>

                                </v-card>
                            </v-col>
                            <v-col class="d-flex">
                                <v-card color="background" class="align-center justify-center w-100 px-8 mt-8 rounded-lg ">
                                    <p class="fg-display-small text-on-surface pt-6 text-center">Karnet</p>
                                    <p class="pt-3 text-primary fg-display-large-acetone text-center">OPEN</p>
                                    <v-row class="px-8 pt-6">
                                        <p>
                                            <v-icon class="pa-0" icon="mdi-check" color="primary"></v-icon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Dostęp do wszystkich
                                                obiektów AQUASPLASH
                                            </span>
                                        </p>
                                    </v-row>
                                    <v-row class="px-8 pt-6">
                                        <p>
                                            <v-icon class="pa-0" icon="mdi-check" color="primary"></v-icon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Dostęp do sekcji SPA i
                                                Wellness
                                            </span>
                                        </p>
                                    </v-row>
                                    <v-row class="px-8 pt-6">
                                        <p>
                                            <v-icon class="pa-0" icon="mdi-check" color="primary"></v-icon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Wszystkie zajęcia
                                                grupowe</span>
                                        </p>
                                    </v-row>
                                    <v-row class="px-8 pt-6">
                                        <p>
                                            <v-icon class="pa-0" icon="mdi-check" color="primary"></v-icon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Trening przygotowany i
                                                nadzorowany przez naszego specjalistę dostosowany do ciebie
                                            </span>
                                        </p>
                                    </v-row>
                                    <p class="pt-6 fg-headline-medium text-center">99 zł<span
                                            class="pa-0 text-primary fg-headline-medium ">/</span>msc</p>
                                    <Button class="w-100 py-2 px-16 mb-8 " label="Wybieram"
                                        @click="_updateMembershipType(2)"></Button>

                                </v-card>
                            </v-col>
                        </v-row>
                        <PaginationDots :step=4 />
                    </v-col>
                    <BackgroundGirl :width="750" style="position: absolute; right: 250px; bottom:0px" />
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>