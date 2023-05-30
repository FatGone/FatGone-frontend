<script lang="ts" setup>
import backgroundGirl from '@/assets/svg/backgroundGirl.svg'

defineProps ({classes: String})
</script>

<template>
    <v-img :src="backgroundGirl" :class="classes" alt="girl" class="d-none d-sm-flex position"></v-img> 
</template>

<style scoped>

@media only screen and (max-width : 768px) {
  .position {
    display: none;
  }

}

@media only screen and (min-width : 768px) {
  .position {
    width: 550px !important;
    right: 0 !important;
  }

}

@media only screen and (min-width : 992px) {
  .position {
    width: 600px !important;;
  }

}

@media only screen and (min-width : 1200px) {
  .position {
    width: 750px !important;
    right: 0 !important;
  }
}

@media only screen and (min-width : 1920px ) {
  .position {
    width: 900px !important;
    right: 0 !important;
  }
}
</style>