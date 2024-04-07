<script setup>
import '../../assets/css/CreateQuiz/question.css'
import { saveQuiz } from '@/services/CreateQuizService.js'
import { useRouter } from 'vue-router'

const router = useRouter()

// Define emits for emitting the update event
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

console.log('Quesiton: ' + props.questionImage)

const emitQuestionText = (event) => {
  const newValue = event.target.value;
  emit('questionTextEvent', newValue);
};

const emitQuestionImage = (event) => {
  const newValue = event.target.value;
  emit('questionImageEvent', newValue);
};

function emitSettingsButtonEvent() {
  router.push('/summary')

};

async function onSaveQuizButtonPressed() {
  const response = await saveQuiz();
  if (response && response.status === 201) {
    console.log(response.status)
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
      <div class="change-question-image-container">
        <!--
        <label class="change-question-image-label" for="change-question-image-input">Select image</label>
        <input id="change-question-image-input" type="file" @input="emitQuestionImage">
        -->
      </div>
    </div>
  </div>
</template>