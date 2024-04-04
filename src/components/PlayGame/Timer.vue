<script setup>

import '/src/assets/css/PlayGame/timerComponent.css'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePlayingStore } from '@/stores/PlayStore.js'
import {defineExpose} from 'vue'

let route = useRouter();

let time = ref("")

let timerCheck = true;

const playingStore = usePlayingStore()

/**
 * A function that calls to the parent-component
 */
const emits = defineEmits(['childEvent']);

const notifyParent = () => {
  emits('childEvent')
}

/**
 * A wrapper-function that takes input in minutes.
 * Which is calculated to seconds
 * @param minutesInt takes the number of minutes the timer will be.
 */
function timerWrapper(minutesInt) {




  let timeLimitInMinutes = ref(minutesInt);
  let timeLimitInSecounds = ref(timeLimitInMinutes.value * 60);
  let timerElement = ref(null);


  let minutes = Math.floor(timeLimitInSecounds.value / 60);
  let seconds = timeLimitInSecounds.value % 60;

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  time.value = minutes + ":" + seconds

  /**
   * Starts the timer until the time runs out
   */
  function startTimer() {
    timeLimitInSecounds.value--;
    let minutes = Math.floor(timeLimitInSecounds.value / 60);
    let seconds = timeLimitInSecounds.value % 60;

    if (timeLimitInSecounds.value < 0) {
      timerElement.value.textContent = '00:00'
      clearInterval(timerInterval);
      if(timerCheck) {
        notifyParent()
        //route.push('/finished')
      }
      return;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

  time.value =  timerElement.value.textContent = minutes + ':' + seconds;
  }

  let timerInterval;

  onMounted(() => {
    timerElement.value = document.querySelector('.timer');
    timerInterval = setInterval(startTimer, 1000);
  });
}

/**
 * This function will turn off the timer when you go backward or forward in the user-history.
 */
window.addEventListener('popstate', function() {
  timerCheck = false
});
/**
 * Executes the timerWrapper that calculates by minutes. for example 0.5 minutes is 30 seconds
 * , 0.1 is 5 seconds
 */
timerWrapper(0.2);
</script>

<template>
<div class="timerCon">
  <span class="timer">{{time}}</span>
</div>
</template>

<style scoped>

</style>