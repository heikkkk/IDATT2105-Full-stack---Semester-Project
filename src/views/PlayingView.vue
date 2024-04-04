<script setup>
import '/src/assets/css/Discover/discover.css'
import QuestionHeader from '@/components/PlayGame/QuestionHeader.vue'
import ImageContainer from '@/components/PlayGame/ImageContainer.vue'
import AnswerBody from '@/components/PlayGame/AnswerBody.vue'
import Timer from '@/components/PlayGame/Timer.vue'
import { ref } from 'vue'


//todo Add props to the components that is used

let cat = ref("Can i haz cheezburga")

let points = 0;
let questionsLength = 0;

let counter = 0;

let questions =ref (["how many cats are alive", "How do you make bread"])
//todo implement later when other feature is finished
//let images = []

let images = ['/src/assets/img/animal-pet-kitten-cat-feline-mammal-749376-pxhere.com.jpg', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']

let answers = [["1","2","3","4"],["bake","broil","fry","boil"]]

let ans = ref("soccer")
let ans1 = ref("baseball")
let ans2 = ref("football")
let ans3 = ref("basketball")

let image = ref('/src/assets/img/animal-pet-kitten-cat-feline-mammal-749376-pxhere.com.jpg')
function switchScene(){
  counter++
  let outAnswers = answers.at(counter)

  cat.value = questions.value.at(counter)

  image.value = images.at(1)

  ans.value = outAnswers.at(0);
  ans1.value = outAnswers.at(1)
  ans2.value = outAnswers.at(2)
  ans3.value = outAnswers.at(3)
  console.log("It works")
  cat.value = "It changed"

}


</script>

<template>
  <div class="playing-wrapper">
    <QuestionHeader :question="cat"></QuestionHeader>
    <Timer @childEvent="switchScene"></Timer>
    <ImageContainer :image="image"></ImageContainer>
    <AnswerBody :ans1="ans" :ans2="ans1" :ans3="ans2" :ans4="ans3"></AnswerBody>
  <!--TODO: remove change from RouterLink to button -->
    <RouterLink to="/finished" style="color: white">Temp</RouterLink>
  </div>
</template>

<style scoped>

</style>