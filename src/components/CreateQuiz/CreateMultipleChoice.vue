<script setup>
import '@/assets/css/CreateQuiz/createMultipleChoice.css'
import Question from '@/components/CreateQuiz/Question.vue'
</script>

<template>
  <div class="create-multiple-choice-wrapper">

    <Question/>

    <div class="alternative-answer-container">
      <div class="alternative-1-container">
        <input type="text" id="alternative-1" placeholder="Add answer 1">
        <div class="alternative-checkbox-container">
          <input type="checkbox" id="correct-answer-1" value="correct" name="correct-answer">
          <label for="correct-answer-1">&#x2714;</label>
        </div>
      </div>

      <div class="alternative-2-container">
        <input type="text" id="alternative-2" placeholder="Add answer 2">
        <div class="alternative-checkbox-container">
          <input type="checkbox" id="correct-answer-2" value="correct" name="correct-answer">
          <label for="correct-answer-2">&#x2714;</label>
        </div>
      </div>

      <div class="alternative-3-container">
        <input type="text" id="alternative-3" placeholder="Add answer 3 (optional)">
        <div class="alternative-checkbox-container">
          <input type="checkbox" id="correct-answer-3" value="correct" name="correct-answer">
          <label for="correct-answer-3">&#x2714;</label>
        </div>
      </div>

      <div class="alternative-4-container">
        <input type="text" id="alternative-4" placeholder="Add answer 4 (optional)">
        <div class="alternative-checkbox-container">
          <input type="checkbox" id="correct-answer-4" value="correct" name="correct-answer">
          <label for="correct-answer-4">&#x2714;</label>
        </div>
      </div>

    </div>
  </div>
</template>