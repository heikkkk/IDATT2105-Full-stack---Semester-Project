<script setup>
import { onMounted, ref } from 'vue'
import Carousel from '@/components/Discover/Carousel.vue'
import '../../assets/css/Discover/discover.css'
import { useRouter } from 'vue-router'
import { getPublicQuizzes, getQuizesByUser } from '@/services/DiscoverService.js'

let quizzesByUser = ref([]);
let publicQuizzes = ref([]);
let categoryQuizzes = ref([
  [null, null, 'Math','src/assets/img/categories/math.png'],
  [null, null, 'Science', 'src/assets/img/categories/science.png'],
  [null, null, 'Sport', 'src/assets/img/categories/sport.png'],
  [null, null, 'Film', 'src/assets/img/categories/film.png'],
  [null, null, 'Food', 'src/assets/img/categories/food.png']
])

const router = useRouter();
const navigateToCreateQuiz = () => {
  router.push('/create-quiz')
}

onMounted(async () => {
  try {
    const userResponse = await getQuizesByUser();
    const publicResponse = await getPublicQuizzes();
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
        <button class="create-new-quiz-button" @click="navigateToCreateQuiz">Create new quiz</button>
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