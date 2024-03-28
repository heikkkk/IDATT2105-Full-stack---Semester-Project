<script setup>
import Carousel from '@/components/Discover/Carousel.vue'
import '../../assets/css/Discover/discover.css'
import { useRouter } from 'vue-router'

const router = useRouter();

const navigateToCreateQuiz = () => {
  router.push('/create-quiz')
}

</script>

<template>
  <div class="discover-wrapper">
    <div class="discover-container">
      <div class="discover-button-container">
        <button class="create-new-quiz-button" @click="navigateToCreateQuiz">Create new quiz</button>
      </div>

      <Carousel class="carousel" title="Your quiz's" :content="['src/assets/img/placeholder.png',
      'src/assets/img/placeholder.png',
      'src/assets/img/placeholder.png',
      'src/assets/img/placeholder.png',
      'src/assets/img/placeholder.png',
      'src/assets/img/placeholder.png',
      'src/assets/img/placeholder.png',
      'src/assets/img/placeholder.png',
      'src/assets/img/placeholder.png',
      'src/assets/img/placeholder.png'
      ]">
      </Carousel>
      <Carousel class="carousel" title="Category" :content="['src/assets/img/categories/math.png',
      'src/assets/img/categories/science.png',
      'src/assets/img/categories/sport.png',
      'src/assets/img/categories/film.png',
      'src/assets/img/categories/food.png'
      ]">

      </Carousel>
      <Carousel class="carousel" title="Trending" :content="[
        'src/assets/img/placeholder.png',
        'src/assets/img/placeholder.png',
        'src/assets/img/placeholder.png',
        'src/assets/img/placeholder.png'
      ]">

      </Carousel>
    </div>
  </div>
</template>

<style scoped>

</style>