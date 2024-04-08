<script setup>
import '../../assets/css/PlayQuiz/answerButton.css'
import { ref } from 'vue'
import { useQuizStore } from '@/stores/QuizStore.js'

const emit = defineEmits(['answerPressedEvent']);
const props = defineProps({
  answer: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

let submitted = true;
const containerRef = ref(null)

/**
 * Handles the event when the answer button is pressed.
 * Emits the 'answerPressedEvent' with the correctness of the answer.
 */
const onAnswerButtonPressed = () => {
  if (submitted) {
    if (props.isCorrect) {
      useQuizStore().incrementCorrectQuestionCount()
    }
    containerRef.value.style.transform = 'scale(1.1)';
    emit('answerPressedEvent', props.isCorrect)
  }
}

/**
 * Reveals the correct or incorrect appearance of the answer button.
 */
function revealAnswers() {
  if (props.isCorrect) {
    containerRef.value.style.backgroundColor = 'green'
  } else {
    containerRef.value.style.backgroundColor = 'red'
    containerRef.value.style.opacity = 0.3
  }
}

/**
 * Sets the answer button to the submitted state false.
 */
function setSubmit() {
  submitted = false
}

defineExpose({
  revealAnswers,
  setSubmit
})

</script>

<template>
  <div data-cy="answer-buttons" class="answer-button-wrapper">
    <div class="answer-button-container" :style="{ backgroundColor: props.color }" @click="onAnswerButtonPressed" ref="containerRef">
      <label class="answer-button-label">{{props.answer}}</label>
    </div>
  </div>
</template>
