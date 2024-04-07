<script setup>
import '@/assets/css/CreateQuiz/quizSummary.css'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/QuizStore.js'
import { categoryMapper, getCategoryImage } from '@/services/DiscoverService.js'
import { deleteQuiz } from '@/services/CreateQuizService.js'

const router = useRouter();
let refreshKey = ref(0);
let coverImage = ref(null)

const onCancelButtonPressed = () => {
  router.push('/discover')
}

const onContinueButtonPressed = () => {
  router.push('/create-quiz')
}

const onDeleteButtonPressed = () => {
  deleteQuiz(useQuizStore().getActiveQuiz.quizId)
  alert("Quiz deleted")
  router.push('/discover')
}

const activeQuiz = useQuizStore().getActiveQuiz
const title = ref(activeQuiz.title)
const description = ref(activeQuiz.description)
let categoryId = ref(activeQuiz.categoryId)
let imagePath = ref(getCategoryImage(categoryId.value))
let category = ref(categoryMapper[categoryId.value])
const isPublic = ref(activeQuiz.isPublic)

const onTitleChange = (event) => {
  activeQuiz['title'] = event.target.value
}

const onDescriptionChange = (event) => {
  activeQuiz['description'] = event.target.value
}

const onCategoryChange = (event) => {
  if (event.target.value === 'Science') {
    activeQuiz['categoryId'] = 1;
  } else if (event.target.value === 'Math') {
    activeQuiz['categoryId'] = 2;
  } else if (event.target.value === 'History') {
    activeQuiz['categoryId'] = 3;
  }
  coverImage.value.src = getCategoryImage(activeQuiz['categoryId']);
}

const onIsPublicChange = (event) => {
  activeQuiz['isPublic'] = event
  console.log(activeQuiz['isPublic'])
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
            <input data-cy="title-input" :value="title" @input="onTitleChange" class="title-input" type="text" placeholder="Enter quiz title...">
          </div>
          <div class="description-container">
            <h3>Description (optional)</h3>
            <textarea data-cy="description-input" class="description-textarea" :value="description" @input="onDescriptionChange"></textarea>
          </div>
        </div>
        <div class="cover-image-wrapper">
          <h3>Cover image</h3>
          <div class="cover-image-container">
            <img :src="imagePath" ref="coverImage" :key="refreshKey">
            <!--
            <label class="change-quiz-image-label" for="change-quiz-image-input">Select file</label>
            <input id="change-quiz-image-input" type="file">
            -->
          </div>
        </div>
      </div>

      <div class="details-wrapper">
        <div class="category-container">
          <h3>Category</h3>
          <select data-cy="category-selector" class="category-selector" :value="category" @change="onCategoryChange">
            <option data-cy="science-select" >Science</option>
            <option data-cy="math-select" >Math</option>
            <option data-cy="history-select" >History</option>
          </select>
        </div>
        <div class="visibility-container">
          <!--TODO: Add cy-datatypes to control flow -->
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