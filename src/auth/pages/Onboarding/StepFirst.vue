<script lang="ts" setup>
import BackgroundGirl from '@/common/components/BackgroundGirl.vue';
import Logo from '@/common/components/Logo.vue';
import { ref } from 'vue';
import router from '@/router';

const price = ref('');
const error = ref('');
const products = [
  {
    id: 1,
    name: "Open",
    items: [
      {id: 1, description: "Dostęp do wszystkich objektów FATGONE"},
      {id: 2, description: "Dostęp do sekcji SPA i Wellness"},
      {id: 3, description: "Wszystkie zajęcia grupowe"},
      {id: 4, description: "Trening przygotowany i nadzorowany przez naszego specjalistę dostosowany do ciebie"},
    ]
  },
  {
    id: 2,
    name: "Half-Open",
    items: [
      {id: 1, description: "Dostęp do wszystkich objektów FATGONE"},
      {id: 2, description: "Dodatkowo płatny dostęp do sekcji SPA i Wellness"},
      {id: 3, description: "4 zajęcia grupowe w miesiącu"},
      {id: 4, description: "1 konsultacja z trenerem personalnym w miesiącu"},
    ]
  }
]

async function select() {
  router.push({ name: 'onboardingStepSecond' });
}
</script>


<template>
  <div class="wrapper h100">
    <div class="content justContCenter" style="margin: 0 10%;">
      <Logo/>
      <div class="content w100 itemsCenter" style="margin-top: 50px">
        <h1 class="flex">Wybierz rodzaj karnetu</h1>
        <div class="flex">
          <div class="itemWrapper" v-for="product in products" :key="product.id">
            <h2>Karnet</h2>
            <h1 class="h1">
              {{ product.name }}
            </h1>
            <ul>
              <li v-for="item in product.items" :key="item.id">
              {{ item.description }}</li>  
            </ul>
            <div class="footer">
              <div class="price">{{ price }} zl<div style="color: #FFBA32">/</div>msc</div>
              <button type="submit" class="button" @click="select()">Wybieram</button>
            </div>
          </div>
        </div>
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