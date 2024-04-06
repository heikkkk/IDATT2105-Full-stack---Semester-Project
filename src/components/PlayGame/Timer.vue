<script setup>

import '/src/assets/css/PlayGame/timerComponent.css'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

let route = useRouter()
let time = ref("")

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

</script>

<template>
<div class="timerCon">
  <span class="timer">{{time}}</span>
</div>
</template>

<style scoped>

</style>