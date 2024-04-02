<script setup>
import '../../assets/css/CreateQuiz/questionBlock.css'

const props = defineProps({
  id:{

  },
  title: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: 'src/assets/img/questionMark.png'
  }
})

</script>

<template>
  <div class="question-block-wrapper">

    <div class="question-block-button-container">
      <button class="question-delete-button"><i class="fas fa-trash"></i></button>
    </div>

    <div class="question-block-container">
      <div class="question-block-title-container">
        <p>{{props.title}}</p>
      </div>
      <div class="question-block-image-container">
        <img :src="props.image" alt="">
      </div>
    </div>

  </div>
</template>