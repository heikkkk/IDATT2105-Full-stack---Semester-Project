<script setup>
import '../../assets/css/PlayQuiz/playQuiz.css'
import {ref} from 'vue'
import { useQuizStore} from '@/stores/QuizStore.js'
import QuestionDisplay from '@/components/PlayQuiz/QuestionDisplay.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
useQuizStore().setCorrectQuestionCount(0)
useQuizStore().setFinalQuestion(false)
let questionKey = 0;

const activeQuiz = useQuizStore().getActiveQuiz;
const questions = activeQuiz.questions
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
  // No questions in the quiz
  router.push('/quiz-results')
}

const displayNextQuestion = () => {
  if (index + 2 === questions.length) {
    useQuizStore().setFinalQuestion(true)
  }
  // If there is no more questions
  if (index + 1 === questions.length) {
    router.push('/quiz-results')
  } else {
    index += 1
    activeQuestion = questions[index]
    questionText.value = activeQuestion.questionText
    timeLimit.value = activeQuestion.question_duration
    answers.value = activeQuestion.answers
    questionKey += 1
  }
}
</script>

<template>
  <div class="play-quiz-wrapper">
    <QuestionDisplay v-model:question-text="questionText"
                     :key="questionKey"
                     :quiz-title="activeQuiz.title"
                     v-model:timer-seconds="timeLimit"
                     v-model:answers="answers"
                     @nextQuestionEvent="displayNextQuestion"
                     ref="questionDisplayRef">
    </QuestionDisplay>
  </div>
</template>