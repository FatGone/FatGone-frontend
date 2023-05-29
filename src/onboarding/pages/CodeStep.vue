<script setup lang="ts">
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router'

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
              <p class="text-on-background fg-display-medium pt-16">Potwierdź swój adres e-mail</p>
              <v-card color="background" class="w-100 mx-16 mt-8 rounded-lg">
                <v-form class="px-8 pt-8">
                  <v-label class=" pb-2 text-wrap text-center"
                    text="Na twój adres e - mail kon**********@gmail.com wysłaliśmy wiadomość z kodem weryfikacyjnym podaj go w polu poniżej żeby dokończyć rejestrację">
                  </v-label>
                  <v-text-field variant="outlined" label="Kod weryfikacyjny"></v-text-field>
                  <Button class="w-100 py-2" label="Potwierdź" @click="navigationIntent()"></Button>
                </v-form>
              </v-card>
            </div>

            <PaginationDots :step=2 />
          </v-col>
          <v-col cols="5">
            <BackgroundGirl />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>
