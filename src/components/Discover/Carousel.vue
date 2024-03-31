<script setup>
import '../../assets/css/Discover/carousel.css'
import { ref } from 'vue'

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

const sliderRef = ref(null)

const onHandleClicked = (increment) => {
  const slider = sliderRef.value
  const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
  const imagesPerRow = parseInt(getComputedStyle(slider).getPropertyValue('--images-per-row'));
  if (increment > 0 && props.content.length / imagesPerRow < sliderIndex + 1) {
    slider.style.setProperty('--slider-index', 0);
    return;
  }
  if (increment < 0 && sliderIndex-1 < 0) {
    slider.style.setProperty('--slider-index', Math.floor(props.content.length / imagesPerRow));
    return;
  }
  slider.style.setProperty('--slider-index', sliderIndex + increment)
}

</script>

<template>
  <div class="carousel-container">
    <h1>{{ props.title }}</h1>
    <h2 v-if="content.length === 0">No quiz's available!</h2>
    <div class="slider-container">
      <button class="handle left-handle" @click="onHandleClicked(-1)"><span class="arrow">&#8249;</span></button>
      <div class="slider" ref="sliderRef">
        <img v-for="(item, index) in props.content" :key="index" :src="item" alt="placeholder">
      </div>
      <button class="handle right-handle" @click="onHandleClicked(1)"><span class="arrow">&#8250;</span></button>
    </div>
  </div>
</template>

<style scoped>

</style>