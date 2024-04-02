<script setup>
import '/src/assets/css/Finished/exitButton.css'
import { useRouter } from 'vue-router'


const router = useRouter();

function toDashBoard(){
  router.push("/discover");
}

</script>

<template>
  <div class="button-placement">
<button class="exitButton" @click="toDashBoard">X</button>
  </div>
</template>

<style scoped>

</style>