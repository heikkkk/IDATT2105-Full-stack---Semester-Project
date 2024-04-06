<script setup>
import Question from '@/components/CreateQuiz/Question.vue'
import '../../assets/css/CreateQuiz/createTrueFalse.css'
import { ref } from 'vue'

const trueChecked = ref(false);
const falseChecked = ref(false);

</script>

<template>
  <div class="create-true-false-wrapper">
    <Question/>

    <div class="true-false-answer-container">
      <div class="true-container">
        <label class="true-label">True</label>
        <div class="true-checkbox-container">
          <input type="radio" id="true" v-model="trueChecked" name="true-false">
          <label for="true">&#x2714;</label>
        </div>
      </div>

      <div class="false-container">
        <label class="false-label">False</label>
        <div class="false-checkbox-container">
          <input type="radio" id="false" v-model="falseChecked" name="true-false">
          <label for="false">&#x2714;</label>
        </div>
      </div>
    </div>
  </div>
</template>