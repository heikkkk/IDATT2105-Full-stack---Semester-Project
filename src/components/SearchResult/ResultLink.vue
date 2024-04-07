<script setup>
import '../../assets/css/SearchResult/resultLink.css'
import { getQuizById } from '@/services/DiscoverService.js'
import { useQuizStore } from '@/stores/QuizStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  id: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default:''
  },
  img: {
    type: String,
    default: 'src/assets/img/placeholder.png'
  }
})

async function onLinkClicked() {
  try {
    const response = await getQuizById(props.id);
    useQuizStore().setActiveQuiz(response.data);
    if (response && response.status === 200) {
      router.push('/quiz-info');
    }
  } catch (error) {
    throw new Error('An error occurred while fetching quiz : ' + error.response.statusText);
  }
}

</script>

<template>
  <div class="result-link-container" @click="onLinkClicked">
    <div class="result-link-image-container">
      <img :src="img" alt="image">
    </div>
    <div class="result-link-title-container">
      <h2>{{title}}</h2>
      <p>Author: {{author}}</p>
      <p>Category: {{category}}</p>
    </div>
  </div>
</template>