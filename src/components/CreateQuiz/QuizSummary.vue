<script setup>
import '@/assets/css/CreateQuiz/quizSummary.css'

const props = defineProps({
  category: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="quiz-summary-wrapper">
    <form class="quiz-summary-form">

      <div class="quiz-title-container">
        <h1>Quiz summary</h1>
      </div>

      <div class="description-wrapper">
        <div class="title-and-description-container">
          <div class="title-container">
            <h3>Title</h3>
            <input class="title-input" type="text" placeholder="Enter quiz title...">
          </div>
          <div class="description-container">
            <h3>Description (optional)</h3>
            <textarea class="description-textarea"></textarea>
          </div>
        </div>
        <div class="cover-image-wrapper">
          <h3>Cover image</h3>
          <div class="cover-image-container">
            <img src="@/assets/img/questionMark.png" ref="coverImage">
            <label class="change-quiz-image-label" for="change-quiz-image-input">Select file</label>
            <input id="change-quiz-image-input" type="file">
          </div>
        </div>
      </div>

      <div class="details-wrapper">
        <div class="category-container">
          <h3>Category</h3>
          <select class="category-selector">
            <option v-for="(item, index) in props.category" :key="index">{{item}}</option>
          </select>
        </div>
        <div class="visibility-container">
          <h3>Visibility</h3>
          <div class="radio-button-container">
            <input type="radio" id="private" value="private" name="visibility">
            <label for="private">Private</label>
            <input type="radio" id="public" value="public" name="visibility">
            <label for="public">Public</label>
          </div>
        </div>
      </div>

      <div class="create-quiz-button-container">
        <button class="cancel-button">Cancel</button>
        <button class="confirm-button">Confirm</button>
        <button class="delete-button">Delete quiz</button>
      </div>
    </form>
  </div>
</template>