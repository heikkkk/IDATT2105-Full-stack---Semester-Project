<script setup>
import '../assets/css/searchBar.css'
import { ref } from 'vue'

const filter = ref('Quiz title')
const keyword = ref('')

async function handleSubmit() {
  console.log(filter.value)
  console.log(keyword.value)
  try {
    /*

     */
  } catch (error) {
    throw new Error('Could not load quizzes from server : ' + error.response.statusText);
  }
}
</script>

<template>
  <div class="search-bar-container">
    <form class="search-bar-form" @submit.prevent="handleSubmit(filter)">
      <select class="search-bar-filter" v-model="filter">
        <option>Quiz title</option>
        <option>Authors</option>
        <option>Categories</option>
      </select>
      <input class="search-bar-input" type="text" placeholder="Search for quiz's" v-model="keyword">
      <button class="search-bar-button" type="submit"><img src="../assets/img/magnifyingGlass.png" alt="search glass"></button>
    </form>
  </div>
</template>