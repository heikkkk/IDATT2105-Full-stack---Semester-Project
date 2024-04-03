<script setup>
import QuestionBlock from '@/components/CreateQuiz/QuestionBlock.vue'
import '../../assets/css/CreateQuiz/verticalQuestionBar.css'

const props = defineProps({
  questionArray: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="vertical-question-bar-wrapper">
    <QuestionBlock v-for="(item, index) in props.questionArray" :key="index" title="Question 1"></QuestionBlock>
    <QuestionBlock title="question 2" image="src/assets/img/categories/math.png"/>
    <div class="new-question-container">
      <button class="new-question-button">&#43;</button>
    </div>
  </div>
</template>