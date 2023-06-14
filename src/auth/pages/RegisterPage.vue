<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router'
import { isLeft } from "fp-ts/lib/Either";
import { AuthController } from '../controllers/AuthController';
import { useOnboardingStore } from '@/onboarding/stores/OnboardingStore';
import { AccountController } from '@/account/controllers/AccountController';

const accountController = new AccountController();

const authController = new AuthController();
const onboardingStore = useOnboardingStore();
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const error = ref('');
const formRef = ref<HTMLFormElement | null>(null);



async function register(): Promise<void> {
    const { valid } = await formRef.value!.validate();
    if (valid) {
        error.value = '';
        const response = await authController.register(email.value, password.value, passwordConfirmation.value);
        if (isLeft(response)) {
            error.value = response.left;
        } else {
            onboardingStore.updateEmail(email.value);
            await accountController.get();
            router.push('/onboarding/code');
        }
    }

}



const required = (value: string) => !!value || "Pole jest wymagane";
const emailFormat = (value: string) => {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return pattern.test(value) || "Niepoprawny format"
}
const minLength = (value: string) => (value && value.length >= 6) || "Hasło powinno zawierać minimum 6 znaków";
const minOneUppercaseCharacter = (value: string) => {
    const pattern = /(?=.*[A-Z])/;
    return pattern.test(value) || "Hasło powinno zawierać jedną wielką litere"
}
const minOneSpecialCharacter = (value: string) => {
    const pattern = /([!@$%])/;
    return pattern.test(value) || "Hasło powinno zawierać jeden znak specjalny";
}
const minOneNumber = (value: string) => {
    const pattern = /(?=.*\d)/;
    return pattern.test(value) || "Hasło powinno zawierać jedną cyfrę";
}
const confirmPassword = (value: string) => (value === password.value) || "Hasła są od siebie różne";


</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row class="h-screen" align-content="center">
                    <v-col class="d-flex flex-column justify-center align-center" cols="5" offset="2">
                        <Logo :height="163" :width="567" />
                        <p class="text-on-background fg-display-medium pt-16">Rejestracja</p>
                        <v-card color="bg-background" class="w-100 mx-16 mt-8 rounded-lg">
                            <v-form ref="formRef" class="px-8 pt-8" @submit.prevent>
                                <v-text-field v-model="email" variant="outlined" label="Adres e-mail" class="pr-2 mb-2"
                                    :rules="[required, emailFormat]"></v-text-field>
                                <v-text-field v-model="password" variant="outlined" label="Hasło" class="pr-2 mb-2"
                                    type="password"
                                    :rules="[required, minLength, minOneUppercaseCharacter, minOneSpecialCharacter, minOneNumber]">
                                </v-text-field>
                                <v-text-field v-model="passwordConfirmation" variant="outlined" label="Potwierdź hasło"
                                    class="pr-2 mb-2" type="password" :rules="[confirmPassword, required]">
                                </v-text-field>
                                <div class="d-flex justify-space-between align-center mb-4">
                                    <div class="mr-15 text-primary">
                                        Masz już konto? <RouterLink to="/login" class="text-primary">Załoguj się
                                        </RouterLink>
                                    </div>
                                    <Button class="w-30 py-2" label="Zarejestruj się" @click="register"></Button>
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