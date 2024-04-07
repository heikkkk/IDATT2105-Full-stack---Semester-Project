<script setup>
import '../../assets/css/SearchResult/searchResult.css'
import { useQuizStore } from '@/stores/QuizStore.js'
import ResultLink from '@/components/SearchResult/ResultLink.vue'
import { categoryMapper, getCategoryImage } from '@/services/DiscoverService.js'

let resultKey = 0
const results = useQuizStore().getSearchResults

const updateResults = () => {
  resultKey += 1
}

defineExpose({
  updateResults
})

</script>

<template>
  <div class="search-result-wrapper" :key="resultKey">
    <div class="search-result-container">
      <ResultLink class="carousel-image" v-for="(item, index) in results"
                  :key="index"
                  :title="item.quizTitle"
                  :id="item.quizId"
                  :img='getCategoryImage(item.categoryId)'
                  :category="categoryMapper[item.categoryId]"
                  :author="item.author"
      />
    </div>
  </div>
</template>