<script setup>
import '../../assets/css/PlayQuiz/questionDisplay.css'
import CountdownTimer from '@/components/PlayQuiz/CountdownTimer.vue'
import AnswerButton from '@/components/PlayQuiz/AnswerButton.vue'
import { ref } from 'vue'
import { useQuizStore } from '@/stores/QuizStore.js'
import { useRouter } from 'vue-router'

const router = useRouter();
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

let buttonText = ref('Next question');
const answerButtons = ref(null);
const timer = ref(null);
const nextQuestionButton = ref(null);
const answerArray = ref([])
const booleanArray = ref([])
const colorArray = ['#35a3e4', '#ff8701', '#01aa6f', '#fbf354']

// Stores answers and correct-booleans in arrays
props.answers.forEach(answer => {
  if (answer.answerText) {
    answerArray.value.push(answer.answerText)
    booleanArray.value.push(answer.isCorrect)
  }
})

// Shuffle answers
for (let i = answerArray.value.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [answerArray.value[i], answerArray.value[j]] = [answerArray.value[j], answerArray.value[i]];
  [booleanArray.value[i], booleanArray.value[j]] = [booleanArray.value[j], booleanArray.value[i]];
}

// Update button text if it's the final question
if (useQuizStore().isFinalQuestion) {
  buttonText.value = 'See results'
}

/**
 * Reveals the next question button.
 */
function revealNextQuestionButton() {
  nextQuestionButton.value.style.display = 'inline-block';
}

/**
 * Handles the event when the next question button is pressed.
 * Emits nextQuestionEvent to parent.
 */
function onNextQuestionPressed() {
  emit('nextQuestionEvent')
}

/**
 * Handles the event when an answer button is pressed.
 * Sets the buttons submit value to false and reveals the correct answers.
 * Stops the timer and music.
 */
function onAnswerPressed() {
  answerButtons.value.forEach((button) => {
    button.setSubmit();
    button.revealAnswers();
  });
  timer.value.onAnswerPressed()
  revealNextQuestionButton()
}

/**
 * Handles the event when the timer reaches zero.
 * Sets the buttons submit value to false and reveals the correct answers.
 */
function onTimerReachedZero() {
  if (answerArray.value.length !== 0) {
    answerButtons.value.forEach((button) => {
      button.setSubmit();
      button.revealAnswers();
    });
  }
  revealNextQuestionButton()
}

/**
 * Handles the event when the exit button is pressed.
 * Stops the timer and music, and navigates to discover.
 */
function onExitButtonPressed() {
  timer.value.onAnswerPressed()
  router.push('/discover')
}
</script>

<template>
  <div class="question-display-wrapper">
    <div class="question-display-text-container">
      <h1>{{props.questionText}}</h1>
      <button @click="onExitButtonPressed()">&#10006;</button>
    </div>

    <div class="question-display-content-container">
      <div class="question-display-timer-container">
        <CountdownTimer :timer-value="timerSeconds"
                        ref="timer"
                        @timerZeroEvent="onTimerReachedZero"/>
      </div>
      <div class="question-display-image-container">
        <img :src="props.questionImage" alt="question image">
      </div>
      <div class="question-display-button-container">
        <button data-cy="next-question-button" class="question-display-next-question-button"
                ref="nextQuestionButton"
                @click="onNextQuestionPressed">{{buttonText}}
        </button>
      </div>
    </div>
    <div class="question-display-answer-container">
      <AnswerButton  v-for="(item, index) in answerArray"
                    :color="colorArray[index]"
                    :answer="item"
                    :is-correct="booleanArray[index]"
                    @answerPressedEvent="onAnswerPressed"
                    ref="answerButtons"/>
    </div>
  </div>
</template>