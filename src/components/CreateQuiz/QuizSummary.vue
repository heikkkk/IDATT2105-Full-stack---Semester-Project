<script setup>
import '@/assets/css/CreateQuiz/quizSummary.css'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/QuizStore.js'
import { categoryMapper, getCategoryImage, reversedCategoryMapper } from '@/services/DiscoverService.js'
import { deleteQuiz } from '@/services/CreateQuizService.js'

const router = useRouter();
// Reference to trigger reactivity when cover image changes
let refreshKey = ref(0);
let coverImage = ref(null)

/**
 * Handles the event when the cancel button is pressed.
 * Redirects the user to the Discover page.
 */
const onCancelButtonPressed = () => {
  router.push('/discover')
}

/**
 * Handles the event when the continue button is pressed.
 * Redirects the user to the Create Quiz page.
 */
const onContinueButtonPressed = () => {
  router.push('/create-quiz')
}

/**
 * Handles the event when the delete button is pressed.
 * Deletes the active quiz and redirects the user to the Discover page.
 */
const onDeleteButtonPressed = () => {
  deleteQuiz(useQuizStore().getActiveQuiz.quizId)
  alert("Quiz deleted")
  router.push('/discover')
}

// Get active quiz details
const activeQuiz = useQuizStore().getActiveQuiz
const title = ref(activeQuiz.title)
const description = ref(activeQuiz.description)
let categoryId = ref(activeQuiz.categoryId)
let imagePath = ref(getCategoryImage(categoryId.value))
let category = ref(categoryMapper[categoryId.value])
const isPublic = ref(activeQuiz.isPublic)

/**
 * Updates the title of the active quiz.
 * @param {Event} event - The input event containing the new title value.
 */
const onTitleChange = (event) => {
  activeQuiz['title'] = event.target.value
}

/**
 * Updates the description of the active quiz.
 * @param {Event} event - The input event containing the new description value.
 */
const onDescriptionChange = (event) => {
  activeQuiz['description'] = event.target.value
}

/**
 * Updates the category of the active quiz.
 * @param {Event} event - The change event containing the new category value.
 */
const onCategoryChange = (event) => {
  activeQuiz['categoryId'] = reversedCategoryMapper[event.target.value]
  coverImage.value.src = getCategoryImage(activeQuiz['categoryId']);
}

/**
 * Updates the visibility of the active quiz.
 * @param {boolean} event - The boolean value indicating the new visibility (true for public, false for private).
 */
const onIsPublicChange = (event) => {
  activeQuiz['isPublic'] = event
}
</script>

<template>
  <div class="quiz-summary-wrapper">
    <div class="quiz-summary-form">

      <div class="quiz-title-container">
        <h1>Quiz summary</h1>
      </div>

      <div class="description-wrapper">
        <div class="title-and-description-container">
          <div class="title-container">
            <h3>Title</h3>
            <input :value="title" @input="onTitleChange" class="title-input" type="text" placeholder="Enter quiz title...">
          </div>
          <div class="description-container">
            <h3>Description (optional)</h3>
            <textarea class="description-textarea" :value="description" @input="onDescriptionChange"></textarea>
          </div>
        </div>
        <div class="cover-image-wrapper">
          <h3>Cover image</h3>
          <div class="cover-image-container">
            <img :src="imagePath" ref="coverImage" :key="refreshKey">
          </div>
        </div>
      </div>

      <div class="details-wrapper">
        <div class="category-container">
          <h3>Category</h3>
          <select class="category-selector" :value="category" @change="onCategoryChange">
            <option>Science</option>
            <option>Math</option>
            <option>History</option>
            <option>Sport</option>
            <option>Film</option>
            <option>Food</option>
          </select>
        </div>
        <div class="visibility-container">
          <h3>Visibility</h3>
          <div class="radio-button-container">
            <input type="radio" id="private" name="visibility" :checked="!isPublic" @change="onIsPublicChange(false)">
            <label for="private">Private</label>
            <input type="radio" id="public" name="visibility" :checked="isPublic" @change="onIsPublicChange(true)">
            <label for="public">Public</label>
          </div>
        </div>
      </div>

      <div class="create-quiz-button-container">
        <button class="cancel-button" @click="onCancelButtonPressed">Cancel</button>
        <button class="confirm-button" @click="onContinueButtonPressed">Continue</button>
        <button class="delete-button" @click="onDeleteButtonPressed">Delete quiz</button>
      </div>
    </div>
  </div>
</template>