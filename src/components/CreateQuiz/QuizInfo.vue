<script setup>
import '../../assets/css/CreateQuiz/quizInfo.css'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/UserStore.js'
import { useQuizStore } from '@/stores/QuizStore.js'
import { onMounted, ref } from 'vue'
import { getCategoryById, getIdByUsername, getUsernameById } from '@/services/QuizInfoService.js'
import { getCategoryImage } from '@/services/DiscoverService.js'

const router = useRouter();
const userStore = useUserStore();
const activeUserId = ref('');

const quizStore = useQuizStore();
const quiz = quizStore.getActiveQuiz;
const title = quiz.title;
const author = ref('');
const imagePath = getCategoryImage(quiz.categoryId)
let numberOfQuestions;
try {
  numberOfQuestions = quiz.questions.length;
} catch (error) {
  numberOfQuestions = 0;
}
console.log(quiz)
const createdAt = quiz.createdAt;
const category = ref('');
const description = quiz.description;

onMounted(async () => {
  try {
    activeUserId.value = (await getIdByUsername(userStore.getUsername)).data
    console.log(activeUserId.value)
    author.value = await getUsernameById(quiz.userId);
    category.value = await getCategoryById(quiz.categoryId);
  } catch (error) {
    console.error('An error occurred while fetching author or category:', error);
  }
});

const navigateToDiscover = () => {
  router.push('/discover')
}

const navigaateToPlayQuiz = () => {
  router.push('/play-quiz')
}

const navigaateToCreateQuiz = () => {
  router.push('/create-quiz')
}

</script>

<template>
  <div class="quiz-info-wrapper">

    <div class="quiz-title-container">
      <h1>{{title}}</h1>
    </div>

    <div class="quiz-info-content-container">
      <div class="quiz-info-image-container">
        <img class="quiz-info-image" :src='imagePath' alt="questionMark">
      </div>

      <div class="quiz-info-details-container">
        <p>Author: {{author}}</p>
        <p>Number of questions: {{numberOfQuestions}}</p>
        <p>Created: {{createdAt}}</p>
        <p>Category: {{category}}</p>
        <p>Description: {{description}}</p>
      </div>
    </div>

    <div class="quiz-info-button-container">
      <button @click="navigateToDiscover">Go back</button>
      <button @click="navigaateToPlayQuiz">Play Quiz</button>
      <button @click="navigaateToCreateQuiz" v-if="quiz.userId === activeUserId">Edit Quiz</button>
    </div>

  </div>
</template>