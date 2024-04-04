<script setup>
import '/src/assets/css/Discover/discover.css'
import QuestionHeader from '@/components/PlayGame/QuestionHeader.vue'
import ImageContainer from '@/components/PlayGame/ImageContainer.vue'
import AnswerBody from '@/components/PlayGame/AnswerBody.vue'
import Timer from '@/components/PlayGame/Timer.vue'

</script>

<template>
  <div class="playing-wrapper">
    <QuestionHeader></QuestionHeader>
    <Timer></Timer>
    <ImageContainer></ImageContainer>
    <AnswerBody></AnswerBody>
    <!--TODO: remove change from RouterLink to button -->
    <RouterLink to="/finished" style="color: white">Temp</RouterLink>
  </div>
</template>

<style scoped>

</style>