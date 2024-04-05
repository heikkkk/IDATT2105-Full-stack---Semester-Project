<script setup>
import '../../assets/css/PlayQuiz/questionDisplay.css'
import CountdownTimer from '@/components/PlayQuiz/CountdownTimer.vue'
import AnswerButton from '@/components/PlayQuiz/AnswerButton.vue'
import { ref } from 'vue'
import { useQuizStore } from '@/stores/QuizStore.js'

const emit = defineEmits(['nextQuestionEvent']);
const props = defineProps({
  quizTitle: {
    type: String,
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  timerSeconds: {
    type: Number,
    default: 60
  },
  questionImage: {
    type: String,
    default: 'src/assets/img/questionMark.png'
  },
  answers: {
    type: JSON,
    default: () => []
  }
})
const answerArray = ref([])
const booleanArray = ref([])
const colorArray = ['#35a3e4', '#ff8701', '#01aa6f', '#fbf354']
props.answers.forEach(answer => {
  if (answer.answerText) {
    answerArray.value.push(answer.answerText)
    booleanArray.value.push(answer.isCorrect)
  }
})

// Reactive values
const answerButtons = ref(null);
const timer = ref(null);
const nextQuestionButton = ref(null);

let buttonText = ref('Next question');
if (useQuizStore().isFinalQuestion) {
  buttonText.value = 'See results'
}

function revealNextQuestionButton() {
  nextQuestionButton.value.style.display = 'inline-block';
}

function onNextQuestionPressed() {
  emit('nextQuestionEvent')
}

function onAnswerPressed(value) {
  answerButtons.value.forEach((button) => {
    button.setSubmit();
    button.revealAnswers();
  });
  timer.value.onAnswerPressed()
  revealNextQuestionButton()
  console.log(timer.value)
  console.log('This button was ', value)
}

function onTimerReachedZero() {
  if (answerArray.value.length !== 0) {
    answerButtons.value.forEach((button) => {
      button.setSubmit();
      button.revealAnswers();
    });
  }
  revealNextQuestionButton()
}
</script>

<template>
  <div class="play-quiz-wrapper">

    <div class="play-quiz-title-container">
      <h1>{{props.quizTitle}}</h1>
    </div>

    <div class="play-quiz-text-container">
      <h2>{{props.questionText}}</h2>
    </div>

    <div class="play-quiz-content-container">
      <div class="play-quiz-timer-container">
        <CountdownTimer :timer-value="timerSeconds"
                        ref="timer"
                        @timerZeroEvent="onTimerReachedZero"/>
      </div>
      <div class="play-quiz-image-container">
        <img :src="props.questionImage" alt="question image">
      </div>
      <div class="play-quiz-button-container">
        <button class="play-quiz-next-question-button"
                ref="nextQuestionButton"
                @click="onNextQuestionPressed">{{buttonText}}
        </button>
      </div>
    </div>
    <div class="play-quiz-answer-container">
      <AnswerButton v-for="(item, index) in answerArray"
                    :color="colorArray[index]"
                    :answer="item"
                    :is-correct="booleanArray[index]"
                    @answerPressedEvent="onAnswerPressed"
                    ref="answerButtons"/>
    </div>
  </div>
</template>