<script setup lang="ts">
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router';


function navigationIntent(): void {

    router.push('/onboarding/membership-type');
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
                            <p class="text-on-background fg-display-medium pt-16">Uzupełnij swoje dane</p>
                            <v-card color="background" class="w-100 mx-16 mt-8 rounded-lg">
                                <v-form class="px-8 pt-8">
                                    <v-row class="mt-1">
                                        <v-text-field variant="outlined" prepend-inner-icon="mdi-account-outline"
                                            label="Imię" class="pr-2"></v-text-field>
                                        <v-text-field variant="outlined" label="Nazwisko"></v-text-field>
                                    </v-row>
                                    <v-row class="mt-1">
                                        <v-col class="pa-0">
                                            <v-text-field variant="outlined" prepend-inner-icon="mdi-home-outline"
                                                label="Ulica" class="pr-2"></v-text-field>
                                        </v-col>
                                        <v-col class="pa-0" cols="3">
                                            <v-text-field variant="outlined" label="Numer domu"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="mt-1">
                                        <v-text-field variant="outlined" label="Numer mieszkania"
                                            class="pr-2"></v-text-field>
                                        <v-text-field variant="outlined" label="Adres pocztowy"></v-text-field>
                                    </v-row>
                                    <v-row class="mt-1">
                                        <v-text-field variant="outlined" label="Miasto"></v-text-field>
                                    </v-row>
                                    <Button class="w-100 py-2" label="Potwierdź" @click="navigationIntent()"></Button>

                                </v-form>
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

