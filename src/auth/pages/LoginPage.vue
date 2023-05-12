<script lang="ts" setup>
import { ref } from 'vue';
import Logo from '@/common/components/Logo.vue';
import BackgroundGirl from '@/common/components/BackgroundGirl.vue';

const email = ref('');
const password = ref('');
const error = ref('');
async function login() {
  console.log('login');
  router.replace({ name: 'registration' });
}
</script>

<template>
  <div class="wrapper h100">
    <div class="content justContCenter" style="margin: 0 10%;">
      <Logo />
      <div class="content w100 itemsCenter" style="margin-top: 50px">
        <h1 class="flex">Logowanie</h1>
        <div class="formWrapper">
            <form class="form" @submit.prevent="">
              <input class="input" v-model="email"/>
              <label class="floatingLabel" style="top: 20px;">Adres e-mail</label>
              <input class="input" type="password" v-model="password"/>
              <label class="floatingLabel" style="top: 75px;">Password</label>
              <span>{{ error }}</span>
              <div class="buttonsWrapper">
                <button type="submit" class="button buttonSecondary">Przypomnij hasło</button>
                <button type="submit" class="button buttonPrimary" @click="login()">Zaloguj</button>
              </div>
            </form>
        </div>
        <div class="registration">Nie masz jeszcze konta? <a href="">Zarejestruj się!</a></div>
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
    width: 70%;
    border-radius: 5px;
    margin-top: 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 30px 0 30px 0;
  }

  .buttonsWrapper {
    display: flex;
    justify-content: flex-end;
  }

  .button {
    font-size: 13px;
    line-height: 25px;
    font-weight: 500;
    cursor: pointer;
  }

  .buttonPrimary {
    background: #FFBA32;
    border: 1px solid black;
    border-radius: 20px;
    width: 30%;
  }

  .buttonSecondary {
    color: #FFBA32;
    border: none;
    background: none;
    width: 50%;
  }

  .buttonPrimary:hover {
    background-color: #4e4e4e;
    color: #FFBA32;
  }

  .buttonSecondary:hover{
    color: #CDC5BD;
  }

  .input {
    background: none;
    width: 100%;
    max-width: 300px;
    box-sizing: border-box;
    outline: none;
    padding: 10px;
    border: 1px solid #CDC5BD;
    margin-bottom: 15px;
    border-radius: 5px;
    color: #CDC5BD;
  }

  .floatingLabel {
    position: absolute;
    pointer-events: none;
    left: 10px;
    color: #CDC5BD;
    font-size: 10px;
    transition: 0.2s;
    padding: 0 5px;
    background: linear-gradient(0deg, rgba(211, 187, 255, 0.05), rgba(211, 187, 255, 0.05)), #1D1B1E;
  }

  h1 {
    color: #EAE1D9;
  }

  .registration, .registration > a  {
    color: #DBC3A1;
  }

  .registration > a :hover {
    color: #ffffff; 
    /* //TODO doesnt work */
  }

  .registration {
    margin-top: 20px;
  }

</style>