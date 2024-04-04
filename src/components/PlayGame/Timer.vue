<script setup>
import '/src/assets/css/PlayGame/timerComponent.css'
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { usePlayingStore } from '@/stores/PlayStore.js';

let time = ref('00:00');
let timerInterval;
let route = useRouter();
let { questionsLength, counter } = defineProps({
  questionsLength: Number,
  counter: Number
});

const emits = defineEmits(['childEvent'])

function startTimer(minutes) {
  let timeLimitInSecounds = minutes * 60;

  timerInterval = setInterval(() => {
    timeLimitInSecounds--;

    if (timeLimitInSecounds <= 0) {
      clearInterval(timerInterval);
      handleTimerEnd();
    }

    updateTimeDisplay(timeLimitInSecounds);
  }, 1000);

  return timerInterval;
}

// Function to update time display
function updateTimeDisplay(timeLimitInSecounds) {
  let minutes = Math.floor(timeLimitInSecounds / 60);
  let seconds = timeLimitInSecounds % 60;
  time.value = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Function to handle timer end
function handleTimerEnd() {
  if (questionsLength !== counter) {
    //todo memory leaks
    startTimer(0.2);
    notifyParent()
  } else {
    route.push('/finished');
  }
}

const notifyParent = () =>{
  emits('childEvent')
}


watch([questionsLength, counter], ([newQuestionsLength, newCounter], [oldQuestionsLength, oldCounter]) => {
  if (newQuestionsLength !== oldQuestionsLength || newCounter !== oldCounter) {
    clearInterval(timerInterval);
    startTimer(0.2);
  }
});


startTimer(0.2);
</script>

<template>
  <div class="timerCon">
    <span class="timer">{{ time }}</span>
  </div>
</template>

<style scoped>
/* Your CSS styles here */
</style>