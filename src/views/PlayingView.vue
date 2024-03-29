<script setup>

import QuestionHeader from '@/components/PlayGame/QuestionHeader.vue'
import ImageContainer from '@/components/PlayGame/ImageContainer.vue'
import AnswerBodyTF from '@/components/PlayGame/AnswerBodyTF.vue'

</script>

<template>
<QuestionHeader></QuestionHeader>
  <ImageContainer></ImageContainer>
  <AnswerBodyTF></AnswerBodyTF>
  <!--TODO: remove change from RouterLink to button -->
  <RouterLink to="/finished" style="color: white">Temp</RouterLink>
</template>

<style scoped>

</style>