<script lang="ts" setup>
import BackgroundGirl from '@/common/components/BackgroundGirl.vue';
import Logo from '@/common/components/Logo.vue';
import Membership from '@/common/components/Membership.vue';
</script>


<template>
  <div class="wrapper h100">
    <div class="content justContCenter" style="margin: 0 10%;">
      <Logo/>
      <Membership />
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
</style>