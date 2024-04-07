<script setup>
import '../../assets/css/CreateQuiz/question.css'
import { saveQuiz } from '@/services/CreateQuizService.js'
import { useRouter } from 'vue-router'

const router = useRouter()
// Defining emits and props for communication with the parent component
const emit = defineEmits(['questionTextEvent', 'questionImageEvent', 'settingsButtonEvent']);
const props = defineProps({
  questionText: {
    type: String,
    default: ''
  },
  questionImage: {
    type: String,
    default: "src/assets/img/questionMark.png"
  }
})

/**
 * Emits an event to update the question text in the parent component.
 * @param {Event} event - The input event triggered by changing the question text.
 */
const emitQuestionText = (event) => {
  const newValue = event.target.value;
  emit('questionTextEvent', newValue)
}

/**
 * Navigates to the quiz summary page.
 */
function emitSummaryButtonEvent() {
  router.push('/summary')
}

/**
 * Saves the quiz when the "Save quiz" button is pressed.
 */
async function onSaveQuizButtonPressed() {
  const response = await saveQuiz();
  if (response && response.status === 201) {
    alert("Quiz saved")
  }
}

</script>

<template>
  <div class="question-wrapper">

    <div class="create-question-button-container">
      <button @click="emitSummaryButtonEvent()">Settings</button>
      <button @click="onSaveQuizButtonPressed()">Save quiz</button>
    </div>

    <div class="create-question-container">
      <input cy-data="input-question" class="create-question-input" type="text" :value="questionText" @input="emitQuestionText" placeholder="Type your question here">
    </div>

    <div class="create-question-image-wrapper">
      <div class="create-question-image-container">
        <img :src="questionImage" alt="question image">
      </div>
      <div class="change-question-image-container"></div>
    </div>
  </div>
</template>