<script setup>
import { onMounted, ref } from 'vue'
import Carousel from '@/components/Discover/Carousel.vue'
import '../../assets/css/Discover/discover.css'
import { useRouter } from 'vue-router'
import { getPublicQuizzes, getQuizesByUser } from '@/services/DiscoverService.js'
import { useQuizStore } from '@/stores/QuizStore.js'
import { getIdByUsername } from '@/services/QuizInfoService.js'
import { useUserStore } from '@/stores/UserStore.js'

let quizzesByUser = ref([]);
let publicQuizzes = ref([]);
let categoryQuizzes = ref([
  {
    "categoryId": 1,
    "quizId": 0,
    "quizTitle": "Math",
  },
  {
    "categoryId": 2,
    "quizId": 0,
    "quizTitle": "Science",
  },
  {
    "categoryId": 3,
    "quizId": 0,
    "quizTitle": "History",
  },
  {
    "categoryId": 4,
    "quizId": 0,
    "quizTitle": "Sport",
  },
  {
    "categoryId": 5,
    "quizId": 0,
    "quizTitle": "Food",
  },
])

const router = useRouter();

function onNewQuizButtonPressed() {
  useQuizStore().resetQuiz()
  router.push('/summary')
}

onMounted(async () => {
  try {
    const userResponse = await getQuizesByUser();
    const publicResponse = await getPublicQuizzes();
    const userId = await getIdByUsername(useUserStore().username)
    useUserStore().setUserId(userId.data)
    quizzesByUser.value = userResponse.data;
    publicQuizzes.value = publicResponse.data;
    console.log(userResponse.data)
    console.log(publicResponse.data)
  } catch (error) {
    throw new Error('Could not load quizzes from server : ' + error.response.statusText);
  }
});
</script>

<template>
  <div class="discover-wrapper">
    <div class="discover-container">
      <div class="discover-button-container">
        <button class="create-new-quiz-button" @click="onNewQuizButtonPressed()">Create new quiz</button>
      </div>
      <Carousel class="carousel" title="Your quiz's" v-model:content="quizzesByUser"/>
      <Carousel class="carousel" title="Category" v-model:content="categoryQuizzes"/>
      <Carousel class="carousel" title="Latest" v-model:content="publicQuizzes">
      </Carousel>
    </div>
  </div>
</template>

<style scoped>

</style>