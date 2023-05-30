<script setup lang="ts">
// import { ref } from 'vue';
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'

// const email = ref('');
// const password = ref('');
// const error = ref('');
// async function login() {
//   console.log('login');
// }
</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="5" offset="2" align-self="center">
                        <Logo :width="567" />
                        <div class="d-flex flex-column align-center">
                            <h1 class="pt-8">Logowanie</h1>
                            <v-card class="pa-8 rounded-lg">
                                <v-form>
                                    <v-text-field label="Adres e-mail"></v-text-field>
                                    <v-text-field label="Password"></v-text-field>
                                    <Button label="Przypomnij hasło"></Button>
                                    <Button label="Zaloguj"></Button>
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
h1 {
    font-weight: 400;
    font-size: 45px;
    line-height: 52px;
}
</style>