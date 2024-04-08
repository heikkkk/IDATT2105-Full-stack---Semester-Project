<script setup>
import '@/assets/css/CreateQuiz/questionDetails.css'

const emit = defineEmits(['questionTitleEvent', 'questionTypeEvent', 'timeLimitEvent',
  'questionTagEvent', 'difficultyEvent', 'explanationEvent']);
const props = defineProps({
  questionTitle: {
    type: String,
    default: ''
  },
  questionType: {
    type: String,
    default: "Multiple Choice"
  },
  timeLimit: {
    type: Number,
    default: 60
  },
  questionTag: {
    type: String,
    default: ''
  },
  difficulty: {
    type: String,
    default: 'Easy'
  },
  explanation: {
    type: String,
    default: ''
  }
})

// Sends emit to CreateQuiz with new question title value
const emitQuestionTitle = (event) => {
  const newValue = event.target.value;
  emit('questionTitleEvent', newValue);
};

// Sends emit to CreateQuiz with new time limit
const emitTimeLimit = (event) => {
  const newValue = event.target.value;
  emit('timeLimitEvent', newValue);
};

// Sends emit to CreateQuiz with new difficulty value
const emitDifficulty = (event) => {
  const newValue = event.target.value;
  emit('difficultyEvent', newValue);
};

// Sends emit to CreateQuiz with new explanation
const emitExplanation = (event) => {
  const newValue = event.target.value;
  emit('explanationEvent', newValue);
};
</script>

<template>
  <div class="question-details-wrapper">

    <div class="question-title-container">
      <h3>Question title (optional)</h3>
      <input data-cy="question-title.input" class="question-title-input" type="text" :value="questionTitle" @input="emitQuestionTitle" placeholder="Enter a title...">
    </div>

    <div class="time-limit-container">
      <h3>Time limit (seconds)</h3>
      <select class="time-limit-selector" :value="timeLimit" @change="emitTimeLimit">
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>30</option>
        <option>45</option>
        <option>50</option>
        <option>60</option>
      </select>
    </div>

    <div class="difficulty-container">
      <h3>Difficulty</h3>
      <select class="difficulty-selector" :value="difficulty" @change="emitDifficulty">
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>

    <div class="explanation-container">
      <h3>Explanation (optional)</h3>
      <textarea class="explanation-textarea" :value="explanation" @input="emitExplanation"></textarea>
    </div>
  </div>
</template>