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
const onAnswerButtonPressed = () => {
  if (submitted) {
    if (props.isCorrect) {
      useQuizStore().incrementCorrectQuestionCount()
    }
    containerRef.value.style.transform = 'scale(1.1)';
    emit('answerPressedEvent', props.isCorrect)
  }
}

function revealAnswers() {
  if (props.isCorrect) {
    containerRef.value.style.backgroundColor = 'green'
  } else {
    containerRef.value.style.backgroundColor = 'red'
    containerRef.value.style.opacity = 0.3
  }
}

function setSubmit() {
  console.log('Changed')
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
