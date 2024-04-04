<script setup>
import '/src/assets/css/PlayGame/playGame.css'
import '/src/assets/css/PlayGame/answerBodyTF.css'
import { onMounted, onUpdated, ref } from 'vue'
import { useQuizStore } from '@/stores/QuizStorage.js'

let isPressedId = ref(null);

const emits = defineEmits(['answerEvent'])

let props = defineProps({
  ans1 : String,
  ans2 : String,
  ans3 : String,
  ans4 : String,
  truthArray : Array
})

let store = useQuizStore()
//let trueArray = store.answers


console.log(props.ans1)
console.log(props.ans2)
console.log(props.ans3)
console.log(props.ans4)


function DoAnimation(){
  document.getElementById("firstButton").style.backgroundColor = 'red';
  document.getElementById("secondButton").style.backgroundColor = 'red';
  document.getElementById("thirdButton").style.backgroundColor = 'red';
  document.getElementById("fourthButton").style.backgroundColor = 'red';
}

const notifyParent = () =>{
  emits('answerEvent')
}



function scaleButton(buttonId) {
  console.log("thruthArray: ", props.truthArray)
  isPressedId.value = buttonId === isPressedId.value ? null : buttonId;
  if(props.truthArray.includes(document.getElementById(buttonId).textContent)){
    console.log(document.getElementById(buttonId).textContent)
    document.getElementById(buttonId).style.backgroundColor = 'green'
    store.setPoints(store.getPoints +1)
    console.log("points", store.getPoints)
    notifyParent()

  }else{
    console.log("The buttons texElement: ",document.getElementById(buttonId).textContent)
    console.log("scaleButton does not work")
    document.getElementById(buttonId).style.backgroundColor = 'red'
  }

}





</script>

<template>
  <div class="answerBox">
    <div class="centreBox">
      <div  class="firstPart">
        <button v-if="props.ans1 !== undefined" id="firstButton" @click="scaleButton('firstButton')" :class="{ 'pressed': isPressedId === 'firstButton'} ">{{props.ans1}}</button>
        <button v-if="props.ans3 !== undefined" id="thirdButton" @click="scaleButton('thirdButton')" :class="{  'pressed': isPressedId === 'thirdButton' }">{{props.ans3}}</button>
      </div>
      <div class="secondPart">
        <button v-if="props.ans2 !== undefined" id="secondButton" @click="scaleButton('secondButton')" :class="{'pressed': isPressedId === 'secondButton'}">{{props.ans2}}</button>
        <button v-if="props.ans4 !== undefined" id="fourthButton" @click="scaleButton('fourthButton')" :class="{ 'pressed': isPressedId === 'fourthButton'}">{{props.ans4}}</button>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>>