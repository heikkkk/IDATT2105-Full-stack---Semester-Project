<script setup>
import '/src/assets/css/PlayGame/answerBodyTF.css'
import { ref } from 'vue'
//TODO FIX bug that do hinder animation.

const isAnimated = ref(false)

function DoAnimation(){
  isAnimated.value = !isAnimated.value
}



</script>

<template>
  <div class="answerBox">
    <div class="centreBox">
      <div class="firstPart">
        <button class="trueButton" @click="DoAnimation();"  :class="{'true-animate': isAnimated}">-1</button>
      </div>
      <div class="secondPart">
        <button  class="falseButton" @click="DoAnimation();" :class="{'false-animate': isAnimated}">1</button>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>