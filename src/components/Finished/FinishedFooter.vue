<script setup>
import "/src/assets/css/Finished/finishedFooter.css"

//todo write function that handles
// events that depends on number of rights.

import { ref } from 'vue'
import { useQuizStore } from '@/stores/QuizStorage.js'

let store = useQuizStore()

let correct = ref(store.getPoints);
let questions = ref(store.questions);


</script>

<template>
  <div class="finishedFooterContainer">
    <div class="">
      <div class="footer-text-container">
      <p class="footer-text">You got {{correct}} of {{questions}} correct!</p>
      </div>
      <button id="newGame-button">Rate Game</button>
      <button id="newGame-button">New Game</button>
      <button id="newGame-button">Back to menu</button>
    </div>
  </div>
</template>

<style scoped>

</style>