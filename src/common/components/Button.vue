<script lang="ts" setup>

import { ref, type PropType } from 'vue';

type TVariant = 'primary' | 'secondary' ;

const button = ref<Element | null>(null);

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<TVariant>,
    required: false,
    default: 'primary',
  },
})

</script>

<template>
  <button class="" :class="props.variant" ref="button">
    <span class="buttonLabel">{{ props.label }}</span>
  </button>
</template>

<style lang="scss">

button {
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;
  width: 100%;
}

button.primary {
  background: #FFBA32;
  border: 1px solid black;
}

button.primary:hover{
  background-color: #4e4e4e;
  color: #FFBA32;
}

button.secondary {
  color: #FFBA32;
  border: 1px solid #EAE1D9;
  background: none;
}

//TODO bordless button
// button.secondary {
//   color: #FFBA32;
//   border: none;
//   background: none;
//   width: 50%;
// }

button.secondary:hover {
  background-color: #4e4e4e;
}

</style>