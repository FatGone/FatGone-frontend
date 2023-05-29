<script setup lang="ts">
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router';


function navigationIntent(): void {

    router.push('/onboarding/card');
}

</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <Logo :width="567" />
                <v-row>
                    <v-col cols="9" align-self="center">
                        <p class="pt-16 fg-display-medium text-on-background">Wybierz rodzaj karnetu</p>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-card color="background" class="w-100 px-8 mt-8 rounded-lg">
                                        <p class="fg-display-small text-on-surface pt-6">Karnet</p>
                                        <p class="pt-3 text-primary fg-display-large-acetone">HALF-OPEN</p>
                                        <v-row class="px-8 pt-6">
                                            <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                            <p class="text-on-surface fg-body-large">Dostęp do wszystkich obiektów FATGONE
                                            </p>
                                        </v-row>
                                        <v-row class="px-8 pt-6">
                                            <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                            <p class="text-on-surface fg-body-large">Dodatkowo płatny dostęp do sekcji SPA i
                                                Wellness</p>
                                        </v-row>
                                        <v-row class="px-8 pt-6">
                                            <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                            <p class="text-on-surface fg-body-large">4 zajęcia grupowe w miesiącu</p>
                                        </v-row>
                                        <v-row class="px-8 pt-6">
                                            <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                            <p class="text-on-surface fg-body-large">1 konsultacja z trenerem personalnym w
                                                miesiącu
                                            </p>
                                        </v-row>
                                        <p class="pt-6 fg-headline-medium">49 zł<span
                                                class="pa-0 text-primary fg-headline-medium">/</span>msc</p>
                                        <Button class="w-100 py-2 px-16 mb-8 " label="Wybieram"
                                            @click="navigationIntent()"></Button>

                                    </v-card>
                                </v-col>
                                <v-col class="d-flex">
                                    <v-card color="background"
                                        class="align-center justify-center w-100 px-8 mt-8 rounded-lg">
                                        <p class="fg-display-small text-on-surface pt-6">Karnet</p>
                                        <p class="pt-3 text-primary fg-display-large-acetone">OPEN</p>
                                        <v-row class="px-8 pt-6">
                                            <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                            <p class="text-on-surface fg-body-large">Dostęp do wszystkich obiektów FATGONE
                                            </p>
                                        </v-row>
                                        <v-row class="px-8 pt-6">
                                            <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                            <p class="text-on-surface fg-body-large">Dostęp do sekcji SPA i Wellness</p>
                                        </v-row>
                                        <v-row class="px-8 pt-6">
                                            <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                            <p class="text-on-surface fg-body-large">Wszystkie zajęcia grupowe</p>
                                        </v-row>
                                        <v-row class="px-8 pt-6">
                                            <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                            <p class="text-on-surface fg-body-large">Trening przygotowany i
                                                nadzorowany przez naszego specjalistę dostosowany do ciebie
                                            </p>
                                        </v-row>
                                        <p class="pt-6 fg-headline-medium">99 zł<span
                                                class="pa-0 text-primary fg-headline-medium">/</span>msc</p>
                                        <Button class="w-100 py-2 px-16 mb-8 " label="Wybieram"
                                            @click="navigationIntent()"></Button>

                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                        <PaginationDots :step=4 />
                    </v-col>
                    <v-col cols="3">
                        <BackgroundGirl />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>