<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import router from '@/router'

const email = ref('');
const password = ref('');

async function login() {
    router.push('/');
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
                            <h1 class="text-on-background fg-display-medium pt-16">Logowanie</h1>
                            <v-card color="background" class="w-100 mx-16 mt-8 rounded-lg">
                              <v-form class="px-8 pt-8" @submit.prevent>
                                <v-text-field variant="outlined" label="Adres e-mail" class="pr-2"></v-text-field>
                                <v-text-field variant="outlined" label="Password" class="pr-2" type="password"></v-text-field>
                                <div class="d-flex justify-end">
                                    <v-btn class="pa-0 w-30 v-btn--none" variant="outlined">
                                        <span class="pa-0 fg-label-large text-primary">Przypomnij hasło</span>
                                    </v-btn>
                                    <Button class="w-30 py-2" label="Zaloguj" @click="login"></Button>
                                </div>
                              </v-form>
                            </v-card>
                            <div class="mr-15 text-secondary mt-8">
                                Nie masz jeszcze konta? <RouterLink to="/registration" class="text-primary">Zarejestruj się!</RouterLink>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="5">
                        <BackgroundGirl />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

<style scoped>
    .v-btn--none {
        border: none;
    }
</style>