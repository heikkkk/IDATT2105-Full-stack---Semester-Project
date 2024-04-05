<script setup>
//todo write function that handles
// events that depends on number of rights.

import { ref } from 'vue'

let correct = ref("10");

</script>

<template>
  <div class="finishedContainer">
    <div class="header">
      <p class="headerText">You got {{correct}} correct! </p>
    </div>
  </div>
</template>

<style scoped>

</style>