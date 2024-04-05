<script setup>
import '../../assets/css/PlayQuiz/quizResult.css'
import { useQuizStore } from '@/stores/QuizStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const quizStore = useQuizStore()
const correctQuestions = quizStore.getCorrectQuestionCount
const totalQuestions = quizStore.getActiveQuiz.questions.length

function onPlayAgainButtonPressed() {
  router.push('/play-quiz')
}

function onExitQuizButtonPressed() {
  router.push('/discover')
}
</script>

<template>
  <div class="quiz-result-wrapper">
    <h1>You got {{correctQuestions}} out of {{totalQuestions}} right!</h1>
    <div class="quiz-result-button-container">
      <button @click="onPlayAgainButtonPressed()">Play again</button>
      <button @click="onExitQuizButtonPressed()">Exit quiz</button>
    </div>
  </div>
</template>