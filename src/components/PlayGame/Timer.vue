<script setup>

import '/src/assets/css/PlayGame/timerComponent.css'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

let route = useRouter();

let time = ref("")

let timerCheck = true;


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

  function startTimer() {
    timeLimitInSecounds.value--;
    let minutes = Math.floor(timeLimitInSecounds.value / 60);
    let seconds = timeLimitInSecounds.value % 60;

    if (timeLimitInSecounds.value < 0) {
      timerElement.value.textContent = '00:00'
      clearInterval(timerInterval);
      if(timerCheck) {
        route.push('/finished')
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
 * This function will turn of the timer when you go backward or forward.
 */
window.addEventListener('popstate', function() {
  // This function will be called whenever the user navigates backward or forward in the browser history
  // You can add your logic here to handle the event
  timerCheck = false
  console.log('User clicked on the go-back-one-page button or navigated backward');
});
/**
 * A wrapper that calculates by minutes. for example 0.5 minutes is 30 seconds
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