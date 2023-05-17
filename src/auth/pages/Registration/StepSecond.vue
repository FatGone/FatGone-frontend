<script lang="ts" setup>
import BackgroundGirl from '@/common/components/BackgroundGirl.vue';
import Logo from '@/common/components/Logo.vue';
import { ref } from 'vue';
import router from '@/router';

const verificationCode = ref('');
const error = ref('');
async function confirm() {
  router.push({ name: 'registrationStepThird' });
}
</script>

<template>
  <div class="wrapper h100">
    <div class="content justContCenter itemsCenter" style="margin: 0 10%;">
      <Logo />
      <div class="content w100 itemsCenter" style="margin-top: 50px">
        <h1 class="flex">Potwierdź swój adres e-mail</h1>
        <div class="formWrapper">
          <form class="form" @submit.prevent="">
            <p>Na twój adres e-mail kon**********@gmail.com wysłaliśmy wiadomość z kodem weryfikacyjnym podaj go w polu
              poniżej żeby dokończyć rejestrację</p>
            <input class="input" v-model="verificationCode" placeholder="Kod weryfikacyjny" />
            <span>{{ error }}</span>
            <button type="submit" class="button buttonPrimary" @click="confirm()">Potwierdz</button>
          </form>
        </div>
      </div>
    </div>
    <BackgroundGirl />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-evenly;
}

.content {
  display: flex;
  flex-direction: column;
}

.formWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(0deg, rgba(211, 187, 255, 0.05), rgba(211, 187, 255, 0.05)), #1D1B1E;
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
  width: 50%;
  border-radius: 5px;
  margin-top: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 30px 0 30px 0;
}

.buttonsWrapper {
  display: flex;
  justify-content: flex-end;
}

.button {
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  cursor: pointer;
}

.buttonPrimary {
  background: #FFBA32;
  border: 1px solid black;
  border-radius: 20px;
  width: 100%;
}

.buttonPrimary:hover {
  background-color: #4e4e4e;
  color: #FFBA32;
}

.input {
  background: none;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  padding: 10px;
  border: 1px solid #CDC5BD;
  margin: 15px 0;
  border-radius: 5px;
  color: #CDC5BD;
}


h1,
p {
  color: #EAE1D9;
}

p {
  font-size: 13px;
  line-height: 25px;
}
</style>