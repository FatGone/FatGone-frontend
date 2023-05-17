<script lang="ts" setup>
import BackgroundGirl from '@/common/components/BackgroundGirl.vue';
import Logo from '@/common/components/Logo.vue';
import { ref } from 'vue';
import router from '@/router';


const card = ref('');
const dateEnd = ref('');
const cvv = ref('');
const name = ref('');
const error = ref('');
async function confirm() {
  console.log('registration step 3');
  router.replace({ name: 'registration' });
}
</script>

<template>
  <div class="wrapper h100">
    <div class="content justContCenter itemsCenter" style="margin: 0 10%;">
      <Logo/>
      <div class="content w100 itemsCenter" style="margin-top: 50px">
        <h1 class="flex">Podaj dane karty</h1>
        <div class="formWrapper">
          <form>
            <div class="flex">
              <input v-model="card"/>
              <label class="floatingLabel" style="top: 0px;">Numer karty</label>
            </div>
            <div class="flex">
              <input v-model="dateEnd"/>
              <label class="floatingLabel" style="top: 0px;">Data ważności</label>
              <input v-model="cvv" style="width: 40%"/>
              <label class="floatingLabel" style="top: 0px; left: 73%;">CVV</label>
            </div>        
            <div class="flex">
              <input v-model="name"/>
              <label class="floatingLabel" style="top: 0px;">Imię i nazwisko posiadacza karty</label>
            </div>
            <span>{{ error }}</span>
            <div class="flex">
              <button type="submit" class="button buttonPrimary" @click="confirm()">Potwierdz</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <BackgroundGirl/>
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
    width: 80%;
    border-radius: 5px;
    margin-top: 20px;
  }

  form {
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
    margin-top: 10px;
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

  input{
    background: none;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    padding: 10px;
    border: 1px solid #CDC5BD;
    margin: 10px 5px;
    border-radius: 5px;
    color: #CDC5BD;
  }


  h1, p {
    color: #EAE1D9;
  }

  p {
    font-size: 13px;
    line-height: 25px;
  }

  .floatingLabel {
    position: absolute;
    pointer-events: none;
    left: 15px;
    color: #CDC5BD;
    font-size: 10px;
    transition: 0.2s;
    padding: 0 5px;
    background: linear-gradient(0deg, rgba(211, 187, 255, 0.05), rgba(211, 187, 255, 0.05)), #1D1B1E;
  }

</style>