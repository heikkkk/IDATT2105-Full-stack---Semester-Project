<script setup>
import  '/src/assets/css/Finished/gameFinishedView.css'
import FinishedHeader from '@/components/Finished/FinishedHeader.vue'
import FinishedFooter from '@/components/Finished/FinishedFooter.vue'
import ExitButton from '@/components/Finished/ExitButton.vue'
</script>

<template>
  <div class="body-wrapper">
    <ExitButton></ExitButton>
  <div class="head-body-wrapper">
  <FinishedHeader></FinishedHeader>
  </div>
  <FinishedFooter></FinishedFooter>
  </div>
</template>

<style scoped>

</style>