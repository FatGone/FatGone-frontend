<script lang="ts" setup>
import { ref } from 'vue';
const price = ref('');
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

</script>
<template>
    <div class="itemWrapper">
          <h2>Karnet</h2>
          <h1 class="h1">
            {{ products.map((i)=>i.name) }}
          </h1>
          <!-- <ul>
            <li v-for="item in products">
            {{ products.map((i)=>i.items.map((e)=>e.description)) }}</li>  
          </ul> -->
          <div class="footer">
            <div class="price">{{ price }} zl<div style="color: #FFBA32">/</div>msc</div>
            <button type="submit" class="button">Wybieram</button>
          </div>
        </div>
</template>
<style scoped>
  p {
    color: #EAE1D9;
    font-size: 25px
  }
</style>