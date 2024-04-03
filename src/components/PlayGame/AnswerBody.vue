<script setup>
import '/src/assets/css/PlayGame/playGame.css'
import '/src/assets/css/PlayGame/answerBodyTF.css'
import { ref } from 'vue'

let isPressedId = ref(null);

let props = defineProps({
  ans1 : String,
  ans2 : String,
  ans3 : String,
  ans4 : String
})

function DoAnimation(){
  document.getElementById("firstButton").style.backgroundColor = 'red';
  document.getElementById("secondButton").style.backgroundColor = 'red';
  document.getElementById("thirdButton").style.backgroundColor = 'red';
  document.getElementById("fourthButton").style.backgroundColor = 'green';
}

function scaleButton(buttonId) {
  isPressedId.value = buttonId === isPressedId.value ? null : buttonId;
  DoAnimation()
}

function setTrue(){

}




</script>

<template>
  <div class="answerBox">
    <div class="centreBox">
      <div class="firstPart">
        <button v-if="props.ans1" id="firstButton" @click="scaleButton('firstButton')" :class="{ 'pressed': isPressedId === 'firstButton'} ">{{props.ans1}}</button>
        <button v-if="props.ans3" id="thirdButton" @click="scaleButton('thirdButton')" :class="{  'pressed': isPressedId === 'thirdButton' }">{{props.ans3}}</button>
      </div>
      <div class="secondPart">
        <button v-if="props.ans2" id="secondButton" @click="scaleButton('secondButton')" :class="{'pressed': isPressedId === 'secondButton'}">{{props.ans2}}</button>
        <button v-if="props.ans4" id="fourthButton" @click="scaleButton('fourthButton')" :class="{ 'pressed': isPressedId === 'fourthButton'}">{{props.ans4}}</button>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>>