<script setup>
import '/src/assets/css/PlayGame/playGame.css'

let props = defineProps({
  question: String
})

</script>

<template>
  <div class="questionHeader">
    <p class="questionText">{{props.question}}</p>
  </div>

</template>

<style scoped>

</style>