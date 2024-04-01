<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CreateMultipleChoice from '@/components/CreateQuiz/CreateMultipleChoice.vue'
import CreateTrueFalse from '@/components/CreateQuiz/CreateTrueFalse.vue'

import CreateQuiz from '@/components/CreateQuiz/CreateQuiz.vue'
import QuestionDetails from '@/components/CreateQuiz/QuestionDetails.vue'
</script>

<template>
  <Header/>

  <!-- Todo CreateQuiz is only here for testing purposes for now-->
  <!--<CreateQuiz :category="['Math', 'Science', 'Food', 'Sport']"></CreateQuiz> -->
  <!-- <CreateQuiz :category="['Math', 'Science', 'Food', 'Sport']"></CreateQuiz> -->
  <CreateMultipleChoice/>
  <CreateTrueFalse/>

  <Footer/>
</template>