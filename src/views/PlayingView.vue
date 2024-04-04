<script setup>
import '/src/assets/css/Discover/discover.css'
import QuestionHeader from '@/components/PlayGame/QuestionHeader.vue'
import ImageContainer from '@/components/PlayGame/ImageContainer.vue'
import AnswerBody from '@/components/PlayGame/AnswerBody.vue'
import Timer from '@/components/PlayGame/Timer.vue'
import { onUpdated, ref, watchEffect } from 'vue'
import { useQuizStore } from '@/stores/QuizStorage.js'
import { useRoute, useRouter } from 'vue-router'
import { login } from '@/assets/services/loginService.js'

let route = useRouter()
let quizStorage = useQuizStore()
let quiz = quizStorage.activeQuiz


let jsQuestionsLength = quiz['questions']['length']
let jsQuestions = quiz['questions']

quizStorage.setQuestionsLength(jsQuestionsLength)

let jsAnswers = quiz['questions'][0]['answers']
console.log(jsAnswers)
let jsImages = quiz['questions']
let jsAnswersLength = quiz['questions'][0]['answers']['length']
let jsTrue = quiz['questions'][0]['answers'][0]['isCorrect']

let trueArray =[]


console.log("gap2")
setTrue(0)
console.log("gap")

console.log(quiz['questions']['length'])
console.log(jsQuestions[0])
console.log(jsQuestions[1])
console.log(jsAnswers)





let quizCounter =  0
let questions = ref (["how many cats are alive", "How do you make bread"])
//todo implement later when other feature is finished
//let images = []

let images = ['/src/assets/img/animal-pet-kitten-cat-feline-mammal-749376-pxhere.com.jpg', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']

let answers = [["1","2","3","4"],["bake","broil","fry","boil"]]

let setAnswers =  []

let questionText = ref("Can i haz cheezburga")

for(let j = 0; j < jsAnswersLength; j++){
  if(quiz['questions'][0]['answers'][j]['answerText'] !== undefined) {
    setAnswers[j] = quiz['questions'][0]['answers'][j]['answerText']
  }else{
    setAnswers[j] = null
  }
}

console.log("bridge")



let image = ref('/src/assets/img/animal-pet-kitten-cat-feline-mammal-749376-pxhere.com.jpg')

console.log(jsQuestions[quizCounter]['questionText'])

//todo: write a function that gets a image by id
//function getImagesById(){

//}

function setTrue(counter){
  console.log("hiii")
for(let i = 0; i < jsAnswersLength; i++){
  if(quiz['questions'][counter]['answers'][i]['isCorrect'] === true){
     trueArray.push(quiz['questions'][counter]['answers'][i]['answerText'])
  }
}
console.log("trueArray:", trueArray)
}


const switchScene = () => {



  quizCounter++

  if (quizCounter === jsQuestionsLength) {
    route.push('/finished')
    quizCounter = 0
  }

  setTrue(quizCounter)




  /*
  let outAnswers = answers.at(quizCounter)

  questionText.value = jsQuestions[quizCounter]['questionText']

  image.value = images.at(1)
  for(let i = 0; i < jsAnswersLength; i++){
    setAnswers[i] = quiz['questions'][quizCounter]['answers'][i]['answerText']
  }

  ans.value = quiz['questions'][quizCounter]['answers'][0]['answerText']
  ans1.value = quiz['questions'][quizCounter]['answers'][1]['answerText']
  ans2.value = quiz['questions'][quizCounter]['answers'][2]['answerText']

  ans3.value = outAnswers.at(3)
*/

  questionText.value = jsQuestions[quizCounter]['questionText']

  for (let i = 0; i < jsAnswersLength; i++) {
    setAnswers[i] = quiz['questions'][quizCounter]['answers'][i]['answerText']
  }


  console.log("It works")

  //console.log(quizCounter)
}
//Set start value points
quizStorage.setPoints(0)




</script>

<template>
  <div class="playing-wrapper">
    <QuestionHeader :question="questionText"></QuestionHeader>
    <Timer :questionsLength="jsQuestionsLength" :counter="quizCounter" @childEvent="switchScene"></Timer>
    <ImageContainer :image="image"></ImageContainer>
    <AnswerBody @answer-event="switchScene" :ans1="setAnswers[0]" :ans2="setAnswers[1]" :ans3="setAnswers[2]" :ans4="setAnswers[3]" :truth-array="trueArray"></AnswerBody>
  <!--TODO: remove change from RouterLink to button -->
    <RouterLink to="/finished" style="color: white">Temp</RouterLink>
  </div>
</template>

<style scoped>

</style>