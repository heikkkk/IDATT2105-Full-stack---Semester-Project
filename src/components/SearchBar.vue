<script setup>
import '../assets/css/searchBar.css'
import { ref } from 'vue'
import { getQuizzesByAuthor, getQuizzesByCategory, getQuizzesByTitleKeyword } from '@/services/SearchResultService.js'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/QuizStore.js'
import { checkBadUserClearance } from '@/services/DiscoverService.js'

// Custom event emitter for emitting search events
const emit = defineEmits(['searchEvent']);
const router = useRouter()

// Reactive references for filter type and search keyword
const filter = ref('Title')
const keyword = ref('')

/**
 * Handles the submission of the search bar form.
 * Checks if the user is logged in, then performs the search based on the selected filter type (title, author, or category).
 * Upon receiving search results from the server, it updates the search results in the quiz store and emits a search event.
 * It then navigates the user to the search result page.
 * @throws Error if an error occurs during the search process.
 */
async function handleSearchBarSubmit() {
  // Check user clearance and prompt login if not logged in
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
    // Update search results in the quiz store and emit search event
    useQuizStore().setSearchResults(response.data)
    emit('searchEvent')
    await router.push('/search-result')
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