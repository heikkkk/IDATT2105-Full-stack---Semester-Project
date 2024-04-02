<script setup>
import VerticalQuestionBar from '@/components/CreateQuiz/VerticalQuestionBar.vue'
import QuestionDetails from '@/components/CreateQuiz/QuestionDetails.vue'
import '../../assets/css/CreateQuiz/createQuiz.css'
</script>

<template>
  <div class="create-quiz-container">
    <VerticalQuestionBar/>
    <RouterView/>
    <QuestionDetails/>
  </div>
</template>