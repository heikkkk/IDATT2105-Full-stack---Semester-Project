<script setup>
import '../../assets/css/SearchResult/searchResult.css'
import { useQuizStore } from '@/stores/QuizStore.js'
import ResultLink from '@/components/SearchResult/ResultLink.vue'

let resultKey = 0
const results = useQuizStore().getSearchResults

const updateResults = () => {
  console.log('Hello')
  resultKey += 1
}

defineExpose({
  updateResults
})

</script>

<template>
  <div class="search-result-wrapper" :key="resultKey">
    <div class="search-result-container">
      <ResultLink class="carousel-image" v-for="(item, index) in results" :key="index" :title="item.quizTitle" :id="item.quizId" :img='item.thumbnailFilepath' />
    </div>
  </div>
</template>