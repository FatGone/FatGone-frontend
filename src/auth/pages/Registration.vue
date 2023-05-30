<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import router from '@/router'
const email = ref('');
const password = ref('');
const error = ref('');
const formRef = ref<HTMLFormElement | null>(null);
function navigate() {
    router.push('/login');
}

async function signUp(): Promise<void> {
    const { valid } = formRef.value!.validate();
    console.log(password.value)
    if(valid) {
        navigate();
    }
}



const required = (value: string) => !!value || "Pole jest wymagane";
const emailFormat = (value: string) => {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    console.log(pattern)
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
// const confirmPassword = (value: string) => (value === password) || "Hasła są różne";


</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="5" offset="2" align-self="center">
                        <Logo :width="567" />
                        <div class="d-flex flex-column align-center">
                            <h1 color="background" class="text-on-background fg-display-medium pt-16">Rejestracja</h1>
                            <v-card color="background" class="w-100 mx-16 mt-8 rounded-lg">
                              <v-form ref="formRef" class="px-8 pt-8" @submit.prevent>
                                <v-text-field variant="outlined" label="Adres e-mail" class="pr-2" :rules="[required, emailFormat]"></v-text-field>
                                <v-text-field variant="outlined" label="Password" class="pr-2" type="password"
                                    :rules="[required, min6characters, minOneUppercaseCharacters,minOneSpecialCharacter, minOneNumber]">
                                </v-text-field>
                                <v-text-field variant="outlined" label="Potwierdź hasło" class="pr-2" type="password" >
                                </v-text-field>
                                <div class="d-flex justify-space-between align-center">
                                    <div class="login text-primary">
                                        Masz już konto? <RouterLink to="/login" class="text-primary">Załoguj się</RouterLink>
                                    </div>
                                    <Button class="w-30 py-2" label="Zarejestruj się" @click="signUp"></Button>
                                </div>
                              </v-form>
                            </v-card>
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
    h1{
        font-weight: 400;
        font-size: 45px;
        line-height: 52px;
    }

    .v-btn--none {
    border: none;
    
    }

    .login,
    .login>a {
      font-size: 16px;
      line-height: 25px;
      font-weight: 500;
    }
    
    .login {
      margin-right: 15px;
    }
</style>