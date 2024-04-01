<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

// import CreateQuiz from '@/components/Quiz/CreateQuiz.vue'
import QuestionDetails from '@/components/Quiz/QuestionDetails.vue'
</script>

<template>
  <Header/>

  <!-- Todo CreateQuiz is only here for testing purposes for now-->
  <!--<CreateQuiz :category="['Math', 'Science', 'Food', 'Sport']"></CreateQuiz> -->
  <QuestionDetails></QuestionDetails>

  <Footer/>
</template>