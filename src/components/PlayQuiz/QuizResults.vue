<script setup>
import '../../assets/css/PlayQuiz/quizResult.css'
import { useQuizStore } from '@/stores/QuizStore.js'
import { useRouter } from 'vue-router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from '@/App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState);
const app = createApp(App)
app.use(pinia)

const router = useRouter()
const quizStore = useQuizStore()
const correctQuestions = quizStore.getCorrectQuestionCount
const totalQuestions = quizStore.getActiveQuiz.questions.length

/**
 * Redirects to the play quiz page to play the quiz again.
 */
function onPlayAgainButtonPressed() {
  router.push('/play-quiz')
}

/**
 * Redirects to the discover page to exit the quiz.
 */
function onExitQuizButtonPressed() {
  router.push('/discover')
}
</script>

<template>
  <div class="quiz-result-wrapper">
    <div class="quiz-result-container">
      <h1>You got {{correctQuestions}} out of {{totalQuestions}} right!</h1>
      <div class="quiz-result-button-container">
        <button @click="onPlayAgainButtonPressed()">Play again</button>
        <button @click="onExitQuizButtonPressed()">Exit quiz</button>
      </div>
    </div>
  </div>
</template>