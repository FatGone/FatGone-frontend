<script setup lang="ts">
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router';


function navigationIntent(): void {

    router.push('/onboarding/personal-details');
}

</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="5" offset="2" align-self="center">
                        <Logo :width="567" />
                        <div class="d-flex flex-column align-center">
                            <div class="text-h4 pt-16">Wybierz rodzaj karnetu</div>
                            <v-card color="background" class="w-100 mx-16 mt-8 rounded-lg">
                                <div class="text-h4 pt-6">Karnet</div>
                                <div class="text-h3 pt-3">HALF-OPEN</div>
                                <v-row class="px-8 pt-6">
                                    <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                    <div>Dostęp do wszystkich obiektów FATGONE</div>
                                </v-row>
                                <v-row class="px-8 pt-6">
                                    <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                    <div>Dodatkowo płatny dostęp do sekcji SPA i Wellness</div>
                                </v-row>
                                <v-row class="px-8 pt-6">
                                    <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                    <div>4 zajęcia grupowe w miesiącu</div>
                                </v-row>
                                <v-row class="px-8 pt-6">
                                    <v-icon class="pr-4" icon="mdi-check" color="primary"></v-icon>
                                    <div>1 konsultacja z trenerem personalnym w miesiącu</div>
                                </v-row>
                                <div class="pt-6">49 zł/msc</div>
                                <Button class="w-100 py-2" label="Wybieram" @click="navigationIntent()"></Button>

                            </v-card>
                        </div>

                        <PaginationDots :step=3 />
                    </v-col>
                    <v-col cols="5">
                        <BackgroundGirl />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

<style></style>