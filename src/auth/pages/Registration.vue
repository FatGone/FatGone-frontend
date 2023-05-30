<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router'

const email = ref('');
const password = ref('');
const formRef = ref<HTMLFormElement | null>(null);

async function signUp(): Promise<void> {
    const { valid } = formRef.value!.validate();
    if(valid) {
        router.push('/login');
    }
}



const required = (value: string) => !!value || "Pole jest wymagane";
const emailFormat = (value: string) => {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return pattern.test(value) || "Niepoprawny format"
}
const min6characters = (value: string) => (value && value.length >=6) || "Minimum 6 znaków";
const minOneUppercaseCharacters = (value: string) => {
    const pattern = /(?=.*[A-Z])/;
    return pattern.test(value) || "Minimum 1 wielką literę"
}
const minOneSpecialCharacter = (value: string) => {
    const pattern = /([!@$%])/;
    return pattern.test(value) || "Minimum 1 znak specjalny";
}
const minOneNumber = (value: string) => {
    const pattern = /(?=.*\d)/;
    return pattern.test(value) || "Minimum 1 cyfrę";
}
const confirmPassword = (value: string) => (value === password.value) || "Niepoprawne hasło";


</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row class="h-screen" align-content="center">
                    <v-col class="d-flex flex-column justify-center align-center" cols="5" offset="2">
                        <Logo :height="163" :width="567" />
                        <p class="text-on-background fg-display-medium pt-16">Rejestracja</p>
                        <v-card color="background" class="w-100 mx-16 mt-8 rounded-lg">
                          <v-form ref="formRef" class="px-8 pt-8" @submit.prevent>
                            <v-text-field v-model="email" variant="outlined" label="Adres e-mail" class="pr-2 mb-2" :rules="[required, emailFormat]"></v-text-field>
                            <v-text-field v-model="password" variant="outlined" label="Password" class="pr-2 mb-2" type="password"
                                :rules="[required, min6characters, minOneUppercaseCharacters,minOneSpecialCharacter, minOneNumber]">
                            </v-text-field>
                            <v-text-field variant="outlined" label="Potwierdź hasło" class="pr-2 mb-2" type="password" 
                                :rules="[confirmPassword]">
                            </v-text-field>
                            <div class="d-flex justify-space-between align-center mb-4">
                                <div class="mr-15 text-primary">
                                    Masz już konto? <RouterLink to="/login" class="text-primary">Załoguj się</RouterLink>
                                </div>
                                <Button class="w-30 py-2" label="Zarejestruj się" @click="signUp"></Button>
                            </div>
                          </v-form>
                        </v-card>
                        <PaginationDots :step=1 />
                    </v-col>
                    <BackgroundGirl style="position: absolute; right: 250px; bottom:0px" />
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>