<script setup>

import "/src/assets/css/Finished/finishedContainer.css"
import "/src/assets/css/Finished/finishedFooter.css"



import { useQuizStore } from '@/stores/QuizStorage.js'
import { ref } from 'vue'

import '/src/assets/css/Finished/exitButton.css'
import { useRouter } from 'vue-router'


const router = useRouter();

function toDashBoard(){
  router.push("/discover");
}

// Store to access the points the finished place

let store = useQuizStore()

let correct = ref(store.getPoints);
let questions = ref(store.questions);

</script>

<template>
  <div class="body-wrapper">
  <div class="button-placement">
    <button class="exitButton" @click="toDashBoard">X</button>
  </div>
  <div class="head-body-wrapper">
  <div class="finishedContainer">
    <div class="header">
      <p class="headerText">Congrats you finished!</p>
    </div>
  </div>
  </div>
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
  </div>
</template>

<style scoped>

</style>