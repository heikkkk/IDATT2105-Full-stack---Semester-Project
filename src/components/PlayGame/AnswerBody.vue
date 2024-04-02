<script setup>
import '/src/assets/css/PlayGame/playGame.css'
import '/src/assets/css/PlayGame/answerBodyTF.css'
import { ref } from 'vue'

let isPressedId = ref(null);

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
</script>

<template>
  <div class="answerBox">
    <div class="centreBox">
      <div class="firstPart">
        <button id="firstButton" @click="scaleButton('firstButton')" :class="{ 'pressed': isPressedId === 'firstButton'} ">Maine Coon</button>
        <button id="thirdButton" @click="scaleButton('thirdButton')" :class="{  'pressed': isPressedId === 'thirdButton' }">Shepard</button>
      </div>
      <div class="secondPart">
        <button  id="secondButton" @click="scaleButton('secondButton')" :class="{'pressed': isPressedId === 'secondButton'}">1</button>
        <button id="fourthButton" @click="scaleButton('fourthButton')" :class="{ 'pressed': isPressedId === 'fourthButton'}">Perser</button>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>>