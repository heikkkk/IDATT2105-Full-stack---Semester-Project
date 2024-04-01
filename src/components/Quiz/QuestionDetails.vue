<script setup>
import '../../assets/css/Quiz/questionDetails.css'
</script>

<template>
  <div class="question-details-wrapper">

    <div class="question-title-container">
      <h3>Question title (optional)</h3>
      <input class="question-title-input" type="text" placeholder="Enter a title...">
    </div>

    <div class="question-type-container">
      <h3>Question type</h3>
      <select class="question-type-selector">
        <option>Multiple choice</option>
        <option>True or false</option>
      </select>
    </div>

    <div class="time-limit-container">
      <h3>Time limit</h3>
      <select class="time-limit-selector">
        <option>5 seconds</option>
        <option>10 seconds</option>
        <option>15 seconds</option>
        <option>20 seconds</option>
        <option>30 seconds</option>
        <option>45 seconds</option>
        <option>45 seconds</option>
        <option>1 minute</option>
      </select>
    </div>

    <div class="tag-container">
      <h3>Question tag (optional)</h3>
      <input class="tag-input" type="text" placeholder="Enter a tag name...">
    </div>

    <div class="difficulty-container">
      <h3>Difficulty</h3>
      <select class="difficulty-selector">
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>

    <div class="explanation-container">
      <h3>Explanation (optional)</h3>
      <textarea class="explanation-textarea"></textarea>
    </div>

  </div>
</template>