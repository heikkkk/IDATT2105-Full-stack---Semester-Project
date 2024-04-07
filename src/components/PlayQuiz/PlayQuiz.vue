<script setup>
import '../../assets/css/PlayQuiz/playQuiz.css'
import {ref} from 'vue'
import { useQuizStore} from '@/stores/QuizStore.js'
import QuestionDisplay from '@/components/PlayQuiz/QuestionDisplay.vue'
import { useRouter } from 'vue-router'
import { getCategoryImage } from '@/services/DiscoverService.js'

// Question key in order to refresh question component
let questionKey = ref(0);
const router = useRouter()

// Initialize score value
useQuizStore().setCorrectQuestionCount(0)
useQuizStore().setFinalQuestion(false)

// Retrieving quiz details
const activeQuiz = useQuizStore().getActiveQuiz;
const questions = activeQuiz.questions
const imagePath = getCategoryImage(activeQuiz.categoryId)
let index = 0
let activeQuestion = null

const questionDisplayRef = ref(null)
const questionText = ref(null)
const timeLimit = ref(null)
const answers = ref(null)

if (questions.length !== 0) {
  activeQuestion = questions[index]
  questionText.value = activeQuestion.questionText
  timeLimit.value = activeQuestion.question_duration
  answers.value = activeQuestion.answers
} else {
  // If there are no questions left in the quiz
  router.push('/quiz-results')
}

// Checking if current question is the last one.
if (index + 2 >= questions.length) {
  useQuizStore().setFinalQuestion(true)
}

// Set reactive values accordingly to next question
const displayNextQuestion = () => {
  if (index + 2 >= questions.length) {
    useQuizStore().setFinalQuestion(true)
  }
  if (index + 1 === questions.length) {
    router.push('/quiz-results')
  } else {
    index += 1
    activeQuestion = questions[index]
    questionText.value = activeQuestion.questionText
    timeLimit.value = activeQuestion.question_duration
    answers.value = activeQuestion.answers
    questionKey.value += 1
  }
}
</script>

<template>
  <div class="play-quiz-wrapper">
    <QuestionDisplay v-model:question-text="questionText"
                     :key="questionKey"
                     :question-image="imagePath"
                     :quiz-title="activeQuiz.title"
                     v-model:timer-seconds="timeLimit"
                     v-model:answers="answers"
                     @nextQuestionEvent="displayNextQuestion"
                     ref="questionDisplayRef">
    </QuestionDisplay>
  </div>
</template>