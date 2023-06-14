<script setup lang="ts">
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router'
import { useOnboardingStore } from '../stores/OnboardingStore'
import { ref } from 'vue'

const onboardingStore = useOnboardingStore();
const code = ref(onboardingStore.code);
const email = ref(onboardingStore.email);
const error = ref('');

function _navigationIntent(): void {
  router.push('/onboarding/personal-details');
}
function updateCode(): void {
  error.value = '';
  if (_isFormValid(code.value)) {
    if (code.value == '619741') {
      onboardingStore.updateCode(code.value);
      _navigationIntent();
    } else {
      error.value = 'Niepoprawny kod';
    }
  }
}
const _isFormValid = function (code: string): boolean {
  const pattern = /^[0-9]*$/;
  return !!code && code.length <= 6 && pattern.test(code)
}

</script>
<template>
  <v-layout>
    <v-main>
      <v-container>
        <v-row class="h-screen" align-content="center">
          <v-col class="d-flex flex-column justify-center align-center" cols="5" offset="2">
            <Logo :height="163" :width="567" />
            <p class="text-on-background fg-display-medium pt-16">Potwierdź swój adres e-mail</p>
            <v-card color="bg-background" class="w-100 mx-16 mt-8 rounded-lg pa-8">
              <v-form class="" @submit.prevent>
                <v-label class=" pb-2 text-wrap text-center fb-body-large"
                  :text='"Na twój adres e - mail " + email + " wysłaliśmy wiadomość z kodem weryfikacyjnym podaj go w polu poniżej żeby dokończyć rejestrację"'>
                </v-label>
                <v-text-field class="mb-2" :rules="[rules.required, rules.codeLength, rules.number]" clearable
                  variant="outlined" label="Kod weryfikacyjny" v-model="code"></v-text-field>
                <v-label class=" pb-2 text-wrap text-center fb-body-large text-error" v-if="error"
                  :text='error'></v-label>
                <v-btn height="40" class="bg-primary w-100" text="Potwierdź" @click="updateCode"></v-btn>
              </v-form>
            </v-card>
            <PaginationDots :step=2 />
          </v-col>
          <BackgroundGirl :width="750" style="position: absolute; right: 250px; bottom:0px" />
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
export default {
  data: () => ({
    rules: {
      required: (code: string) =>
        !!code || 'Pole jest wymagane',
      codeLength: (code: string) => !!code && code.length <= 6 || 'Kod weryfikacyjny składa się z 6 znaków',
      number: function (code: string) {
        const pattern = /^[0-9]*$/;
        return pattern.test(code) || 'Niepoprawny format';
      }
    },
  }),
}
</script>