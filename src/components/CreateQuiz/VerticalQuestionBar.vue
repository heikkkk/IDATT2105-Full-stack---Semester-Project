<script setup>
import QuestionBlock from '@/components/CreateQuiz/QuestionBlock.vue'
import '../../assets/css/CreateQuiz/verticalQuestionBar.css'
import { useQuizStore } from '@/stores/QuizStore.js'
import { getNewQuestion } from '@/services/CreateQuizService.js'
import { getCategoryImage } from '@/services/DiscoverService.js'

const image = getCategoryImage(useQuizStore().getActiveQuiz.categoryId)
const emit = defineEmits(['toggleNextQuizEvent']);
const props = defineProps({
  questionArray: {
    type: Array,
    default: () => []
  }
})

/**
 * Handles the event when the "New Question" button is clicked.
 * Adds a new question to the active quiz.
 */
function onNewQuestionClicked() {
  const quizStore = useQuizStore();
  quizStore.getActiveQuiz.questions.push(getNewQuestion())
}

/**
 * Emits an event to toggle the display of the next quiz.
 * @param {number} id - The ID of the question.
 */
const emitNextQuiz = (id) => {
  emit('toggleNextQuizEvent', id)
}
</script>

<template>
  <div class="vertical-question-bar-wrapper">
    <QuestionBlock v-for="(item, index) in props.questionArray"
                   :title="item.questionText"
                   :id="item.questionId"
                   :index="index"
                   :image="image"
                   @toggleQuestionEvent="emitNextQuiz"/>
    <div class="new-question-container">
      <button class="new-question-button" @click="onNewQuestionClicked">&#43;</button>
    </div>
  </div>
</template>