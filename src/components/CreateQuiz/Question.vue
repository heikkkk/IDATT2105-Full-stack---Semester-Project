<script setup>
import '../../assets/css/CreateQuiz/question.css'
import { saveQuiz } from '@/services/CreateQuizService.js'
import { useRouter } from 'vue-router'

const router = useRouter()
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

const emitQuestionText = (event) => {
  const newValue = event.target.value;
  emit('questionTextEvent', newValue)
}

function emitSettingsButtonEvent() {
  router.push('/summary')
}

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
      <button @click="emitSettingsButtonEvent()">Settings</button>
      <button @click="onSaveQuizButtonPressed()">Save quiz</button>
    </div>

    <div class="create-question-container">
      <input class="create-question-input" type="text" :value="questionText" @input="emitQuestionText" placeholder="Type your question here">
    </div>

    <div class="create-question-image-wrapper">
      <div class="create-question-image-container">
        <img :src="questionImage" alt="question image">
      </div>
      <div class="change-question-image-container"></div>
    </div>
  </div>
</template>