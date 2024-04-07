<script setup>
import '@/assets/css/CreateQuiz/createMultipleChoice.css'

const emit = defineEmits(['answer1Event', 'answer2Event', 'answer3Event', 'answer4Event',
  'answer1CheckedEvent', 'answer2CheckedEvent', 'answer3CheckedEvent', 'answer4CheckedEvent']);
const props = defineProps({
  answer1: {
    type: String,
    default: ''
  },
  answer2: {
    type: String,
    default: ''
  },
  answer3: {
    type: String,
    default: ''
  },
  answer4: {
    type: String,
    default: ''
  },
  answer1Checked: {
    type: Boolean,
    default: false
  },
  answer2Checked: {
    type: Boolean,
    default: false
  },
  answer3Checked: {
    type: Boolean,
    default: false
  },
  answer4Checked: {
    type: Boolean,
    default: false
  }
})

// Emit changes on answer content and values:
const emitAnswer1 = (event) => {
  const newValue = event.target.value;
  emit('answer1Event', newValue);
};

const emitAnswer2 = (event) => {
  const newValue = event.target.value;
  emit('answer2Event', newValue);
};

const emitAnswer3 = (event) => {
  const newValue = event.target.value;
  emit('answer3Event', newValue);
};

const emitAnswer4 = (event) => {
  const newValue = event.target.value;
  emit('answer4Event', newValue);
};

const emitAnswer1Checked = (event) => {
  const newValue = event.target.checked;
  emit('answer1CheckedEvent', newValue);
};

const emitAnswer2Checked = (event) => {
  const newValue = event.target.checked;
  emit('answer2CheckedEvent', newValue);
};

const emitAnswer3Checked = (event) => {
  const newValue = event.target.checked;
  emit('answer3CheckedEvent', newValue);
};

const emitAnswer4Checked = (event) => {
  const newValue = event.target.checked;
  emit('answer4CheckedEvent', newValue);
};
</script>

<template>
  <div class="create-multiple-choice-wrapper">
    <div class="alternative-answer-container">
      <div class="alternative-1-container">
        <input type="text" id="alternative-1" :value="answer1" @input="emitAnswer1" placeholder="Add answer 1">
        <div class="alternative-checkbox-container">
          <input cy-data="correct answer 1" type="checkbox" id="correct-answer-1" :checked="answer1Checked" @change="emitAnswer1Checked">
          <label  for="correct-answer-1">&#x2714;</label>
        </div>
      </div>

      <div class="alternative-2-container">
        <input type="text" id="alternative-2" :value="answer2" @input="emitAnswer2" placeholder="Add answer 2">
        <div class="alternative-checkbox-container">
          <input cy-data="correct-answer-2" type="checkbox" id="correct-answer-2" :checked="answer2Checked" @change="emitAnswer2Checked">
          <label for="correct-answer-2">&#x2714;</label>
        </div>
      </div>

      <div class="alternative-3-container">
        <input type="text" id="alternative-3" :value="answer3" @input="emitAnswer3" placeholder="Add answer 3 (optional)">
        <div class="alternative-checkbox-container">
          <input cy-data="correct-answer-3" type="checkbox" id="correct-answer-3" :checked="answer3Checked" @change="emitAnswer3Checked">
          <label for="correct-answer-3">&#x2714;</label>
        </div>
      </div>

      <div class="alternative-4-container">
        <input type="text" id="alternative-4" :value="answer4" @input="emitAnswer4" placeholder="Add answer 4 (optional)">
        <div class="alternative-checkbox-container">
          <input cy-data="correct-answer-4" type="checkbox" id="correct-answer-4" :checked="answer4Checked" @change="emitAnswer4Checked">
          <label for="correct-answer-4">&#x2714;</label>
        </div>
      </div>

    </div>
  </div>
</template>