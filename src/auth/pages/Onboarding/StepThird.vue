<script lang="ts" setup>
import BackgroundGirl from '@/common/components/BackgroundGirl.vue';
import Logo from '@/common/components/Logo.vue';
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const street = ref('');
const buildNumber = ref('');
const apartmentNumber = ref('');
const zip = ref('');
const city = ref('');
const card = ref('');
const dateEnd = ref('');
const name = ref('');

async function confirm() {
  console.log('onboarding step 3');
}
</script>

<template>
  <div class="wrapper h100">
    <div class="content justContCenter itemsCenter" style="margin: 0 10%;">
      <Logo/>
      <div class="content w100 itemsCenter" style="margin-top: 50px">
        <h1 class="flex">Potwierdzenie zamówienia</h1>
        <div class="flex columnsWrapper">
          <div class="column">
            <h3>Dane personalne</h3>
            <p>Imię: {{ firstName }}</p>
            <p>Nazwisko: {{ lastName }}</p>
            <p>Ulica: {{ street }}</p>
            <p>Numer domu: {{ buildNumber }}</p>
            <p>Numer mieszkania: {{ apartmentNumber }}</p>
            <p>Kod pocztowy: {{ zip }}</p>
            <p>Miasto: {{ city }}</p>
            <h3>Dane płatności</h3>
            <p>Karta: {{ card }}</p>
            <p>Data ważności: {{ dateEnd }}</p>
            <p>Imię i nazwisko: {{ name }}</p>
          </div>
          <div class="column">
            <h3>Zamówienie</h3>
            <p>Rodzaj karnetu: {{ firstName }}</p>
            <p>Koszt: {{ lastName }}</p>
            <p>Vat (23%): {{ street }}</p>
            <p>Opłata wpisowa: {{ buildNumber }}</p>
            <h3>Podsumowanie</h3>
            <p>Do spłaty: {{ card }}</p>
            <p>Potem: {{ dateEnd }}</p>
            <div class="flex">
              <button type="submit" class="button" @click="confirm()">Potwierdź</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <BackgroundGirl/>
  </div>
</template>

<style scoped>
h3 {
  color: #FFBA32;
  font-family: 'Oswald'; 
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  border-bottom: 1px solid #4E4539;
  margin: 20px 0;
}

.column {
  display: flex;
  flex-direction: column;
  margin: 0 30px 20px 30px;
  justify-content: space-evenly;
  width: 50%;
}

.columnsWrapper{
  background: linear-gradient(0deg, rgba(211, 187, 255, 0.05), rgba(211, 187, 255, 0.05)), #1D1B1E;
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
}

h1, p {
  color: #EAE1D9;
}

p {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.wrapper {
  display: flex;
  justify-content: space-evenly;
}

.content {
  display: flex;
  flex-direction: column;
}
.button {
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  border: 1px solid #EAE1D9;
  border-radius: 20px;
  width: 100%;
  background: none;
  color: #FFBA32;
}
.button:hover {
  background-color: #4e4e4e;
  color: #FFBA32;
}
</style>