<script setup>
import '../../assets/css/CreateQuiz/question.css'
</script>

<template>
  <div class="question-wrapper">

    <div class="create-question-button-container">
      <button>Settings</button>
      <button>Save quiz</button>
      <button>Delete question</button>
    </div>

    <div class="create-question-container">
      <input class="create-question-input" type="text" placeholder="Type your question here">
    </div>

    <div class="create-question-image-wrapper">
      <div class="create-question-image-container">
        <img src="@/assets/img/questionMark.png" alt="question image">
      </div>
      <div class="change-question-image-container">
        <label class="change-question-image-label" for="change-question-image-input">Select image</label>
        <input id="change-question-image-input" type="file">
      </div>
    </div>
  </div>
</template>