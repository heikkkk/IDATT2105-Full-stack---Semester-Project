<script setup>
import '../../assets/css/Discover/carousel.css'
import { ref } from 'vue'
import CarouselImg from '@/components/Discover/CarouselImage.vue'
import { getCategoryImage } from '@/services/DiscoverService.js'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  content: {
    type: Array,
    default: () => []
  }
})

// Reference to the slider element
const sliderRef = ref(null)


/**
 * Handles the event when the handle button is clicked to slide the carousel.
 * @param {number} increment - The amount to increment or decrement the slider index by.
 */
const onHandleClicked = (increment) => {
  const slider = sliderRef.value
  const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
  const imagesPerRow = parseInt(getComputedStyle(slider).getPropertyValue('--images-per-row'));
  // Set the slider index to 0 if it has gone beyond the number of images / imagesPerRow
  if (increment > 0 && props.content.length / imagesPerRow < sliderIndex + 1) {
    slider.style.setProperty('--slider-index', 0);
    return;
  }
  // Sets the slider index to max value if it has gone lower than zero.
  if (increment < 0 && sliderIndex-1 < 0) {
    slider.style.setProperty('--slider-index', Math.floor(props.content.length / imagesPerRow));
    return;
  }
  // Increment/decrement the value if no condition has been met.
  slider.style.setProperty('--slider-index', sliderIndex + increment)
}
</script>

<template>
  <div class="carousel-container">
    <h1>{{ props.title }}</h1>
    <h2 v-if="content.length === 0">No quizzes available!</h2>
    <div class="slider-container">
      <button class="handle left-handle" @click="onHandleClicked(-1)">
        <span class="arrow">&#8249;</span>
      </button>
      <div class="slider" ref="sliderRef">
        <CarouselImg class="carousel-image" v-for="(item, index) in props.content" :key="index" v-model:title="item.quizTitle" v-model:id="item.quizId" :img='getCategoryImage(item.categoryId)'></CarouselImg>
      </div>
      <button data-cy="handle-right-button" class="handle right-handle" @click="onHandleClicked(1)">
        <span data-cy="quizzes" class="arrow">&#8250;</span>
      </button>
    </div>
  </div>
</template>