<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import router from '@/router'
import { AuthController } from '../controllers/AuthController';
import { isLeft } from 'fp-ts/lib/Either';
import { AccountController } from '@/account/controllers/AccountController';

const accountController = new AccountController();
const email = ref('');
const password = ref('');
const formRef = ref<HTMLFormElement | null>(null);
const authController = new AuthController();
const error = ref('');

const required = (value: string) => !!value || "Pole jest wymagane";

async function login(): Promise<void> {



    if (email.value.length != 0 && password.value.length != 0) {
        const response = await authController.login(email.value, password.value);
        error.value = '';
        if (isLeft(response)) {
            error.value = response.left;
        } else {
            await accountController.get();
            router.push('/');
        }
    }
}

</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row class="h-screen" align-content="center">
                    <v-col class="d-flex flex-column justify-center align-center" cols="5" offset="2">
                        <Logo :height="163" :width="567" />
                        <p class="text-on-background fg-display-medium pt-16">Logowanie</p>
                        <v-card color="bg-background" class="w-100 mx-16 mt-8 rounded-lg">
                            <v-form ref="formRef" class="px-8 pt-8" @submit.prevent>
                                <v-text-field v-model="email" variant="outlined" label="Adres e-mail" class="pr-2"
                                    :rules="[required]"></v-text-field>
                                <v-text-field v-model="password" variant="outlined" label="Password" class="pr-2"
                                    type="password" :rules="[required]"></v-text-field>
                                <v-label v-if="error" :text="error"></v-label>
                                <div class="d-flex justify-end align-center mb-4">
                                    <RouterLink to="/registration" class="text-primary text-decoration-none pr-8">Przypomnij
                                        hasło</RouterLink>
                                    <Button class="w-30 py-2" label="Zaloguj" @click="login()"></Button>
                                </div>
                            </v-form>
                        </v-card>
                        <div class="mr-15 text-secondary mt-8">
                            Nie masz jeszcze konta? <RouterLink to="/register" class="text-primary">Zarejestruj się!
                            </RouterLink>
                        </div>
                    </v-col>
                    <BackgroundGirl style="position: absolute; right: 250px; bottom:0px" />
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