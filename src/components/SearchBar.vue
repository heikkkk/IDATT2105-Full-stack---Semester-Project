<script setup>
import '../assets/css/searchBar.css'
import { ref } from 'vue'
import { getQuizzesByAuthor, getQuizzesByCategory, getQuizzesByTitleKeyword } from '@/services/SearchResultService.js'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/QuizStore.js'
import { checkBadUserClearance } from '@/services/DiscoverService.js'

const emit = defineEmits(['searchEvent']);
const router = useRouter()
const filter = ref('Title')
const keyword = ref('')

// Only allows logged-in users to search in search bar
async function handleSearchBarSubmit() {
  if (checkBadUserClearance()) {
    alert("You have to login in order to search for quizzes.")
    router.push('/')
  }
  try {
    let response;
    if (filter.value === 'Title') {
      response = await getQuizzesByTitleKeyword(keyword.value)
    } else if (filter.value === 'Author') {
      response = await getQuizzesByAuthor(keyword.value)
    } else if (filter.value === 'Category') {
      response = await getQuizzesByCategory(keyword.value)
    }
    useQuizStore().setSearchResults(response.data)
    emit('searchEvent')
    router.push('/search-result')
  } catch (error) {
    throw new Error('Could not load quizzes from server : ' + error.response.statusText);
  }
}
</script>

<template>
  <div class="search-bar-container">
    <form class="search-bar-form" @submit.prevent="handleSearchBarSubmit(filter)">
      <select class="search-bar-filter" v-model="filter">
        <option>Title</option>
        <option>Author</option>
        <option>Category</option>
      </select>
      <input class="search-bar-input" type="text" placeholder="Search for quiz's" v-model="keyword">
      <button class="search-bar-button" type="submit"><img src="../assets/img/magnifyingGlass.png" alt="search glass"></button>
    </form>
  </div>
</template>