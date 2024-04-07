<script setup>
import '../../assets/css/Discover/carouselImage.css'
import { getQuizById } from '@/services/DiscoverService.js'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/QuizStore.js'
import { getQuizzesByCategory } from '@/services/SearchResultService.js'

const router = useRouter();
const props = defineProps({
  id: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: 'src/assets/img/placeholder.png'
  }
})

/**
 * Handles the event when the image is clicked.
 * Fetches quiz data based on image properties and navigates to the appropriate page.
 */
async function onImageClicked() {
  try {
    // If the id === 0 then the image is a category, not a quiz.
    if (props.id === 0) {
      const response = await getQuizzesByCategory(props.title)
      if (response && response.status===200) {
        useQuizStore().setSearchResults(response.data)
        await router.push('/search-result')
      }
    } else {
      // If the id != 0, then the image is an authentic quiz.
      const response = await getQuizById(props.id);
      const quizStore = useQuizStore();
      quizStore.setActiveQuiz(response.data);
      if (response && response.status === 200) {
        await router.push('/quiz-info');
      }
    }
  } catch (error) {
    throw new Error('An error occurred while fetching quiz : ' + error.response.statusText);
  }
}
</script>

<template>
  <div class="carousel-img-container">
    <p>{{title}}</p>
    <img :src="img" alt="cover image" @click="onImageClicked">
  </div>
</template>