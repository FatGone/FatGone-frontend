<script lang="ts" setup>
import BackgroundGirl from '@/common/components/BackgroundGirl.vue';
import Logo from '@/common/components/Logo.vue';
import { ref } from 'vue';
import router from '@/router';


const price = ref('');
const error = ref('');
const products = [
  {
    name: "Open",
    items: [
      {description: "Dostęp do wszystkich objektów FATGONE"},
      {description: "Dostęp do sekcji SPA i Wellness"},
      {description: "Wszystkie zajęcia grupowe"},
      {description: "Trening przygotowany i nadzorowany przez naszego specjalistę dostosowany do ciebie"},
  ]
  }
]
async function select() {
  console.log('onboarding');
  router.replace({ name: 'registration' });
}
</script>

<template>
  <div class="wrapper h100">
    <div class="content justContCenter" style="margin: 0 10%;">
      <Logo/>
      <div class="content w100 itemsCenter" style="margin-top: 50px">
        <h1 class="flex">Wybierz rodzaj karnetu</h1>
        <div class="flex">
        <div class="itemWrapper">
          <h2>Karnet</h2>
          <h1 class="h1">
            HALF-OPEN
          </h1>
          <ul>
            <li>Dostęp do wszystkich objektów FATGONE</li>
            <li>Dodatkowo płatny dostęp do sekcji SPA i Wellness</li>
            <li>4 zajęcia grupowe w miesiącu</li>
            <li>1 konsultacja z trenerem personalnym w miesiącu</li>
          </ul>
          <div class="footer">
            <div class="price">{{ price }} zl<div style="color: #FFBA32">/</div>msc</div>
            <button type="submit" class="button" @click="select()">Wybieram</button>
          </div>
        </div>
        <div class="itemWrapper">
          <h2>Karnet</h2>
          <h1 class="h1">
            OPEN
          </h1>
          <ul>
            <li>Dostęp do wszystkich objektów FATGONE</li>
            <li>Dostęp do sekcji SPA i Wellness</li>
            <li>Wszystkie zajęcia grupowe</li>
            <li>Trening przygotowany i nadzorowany przez naszego specjalistę dostosowany do ciebie</li>
          </ul>
          <div class="footer">
            <div class="price">{{ price }} zl<div style="color: #FFBA32">/</div>msc</div>
            <button type="submit" class="button" @click="select()">Wybieram</button>
          </div>
        </div>
        </div>
        <!-- <div class="itemWrapper">
          <h2>Karnet</h2>
          <h1 class="h1">
            {{ products.map((i)=>i.name) }}
          </h1>
          <ul>
            <li v-for="item in products">
            {{ products.map((i)=>i.items.map((e)=>e.description)) }}</li>  
          </ul>
          <div class="footer">
            <div class="price">{{ price }} zl<div style="color: #FFBA32">/</div>msc</div>
            <button type="submit" class="button" @click="select()">Wybieram</button>
          </div>
        </div> -->
      </div>
    </div>
    <BackgroundGirl/>
  </div>
</template>

<style scoped>

.h1 {
  font-family: 'ACETONE';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 64px;
color: #FFBA32;

}

ul {
  list-style-type: square;
  list-style-position: outside;
  list-style-image: url('@/assets/img/check.png');
  display: flex;
  flex-direction: column;
  line-height: 1.5em;
}

li {
  font-size: 13px;
  padding: 0 15px 0 5px;
}

.price {
  font-size: 20px;
  display: flex;
}

.descriptionItem {
  align-items: center;
  padding: 5px 10px;
}

.descriptionItem p {
  font-size: 14px;
  padding-left: 10px;
}
  .wrapper {
    display: flex;
    justify-content: space-evenly;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .itemWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(0deg, rgba(211, 187, 255, 0.05), rgba(211, 187, 255, 0.05)), #1D1B1E;
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
    width: 100%;
    border-radius: 5px;
    margin: 20px 10px;
    padding: 20px 20px 20px 10px;
    justify-content: space-between;
  }
 
  .button {
    font-size: 13px;
    line-height: 30px;
    font-weight: 600;
    cursor: pointer;
    background: #FFBA32;
    border: 1px solid black;
    border-radius: 20px;
    width: 80%;
    margin: 10px 0;
  }

  h1, h2, li, .price {
    color: #EAE1D9;
  }

  .footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

</style>