<script setup>
import '../../assets/css/PlayQuiz/countdownTimer.css'
import { ref } from 'vue'

// Displays quiz audio
const audio = new Audio('src/assets/sound/BeAsYoung.mp3');
audio.play()

const emit = defineEmits(['timerZeroEvent']);
const props = defineProps({
  timerValue: {
    type: Number,
    default: 60
  }
})

let time = props.timerValue
const timerRef = ref(null)

// Starts the countdown timer
const interval = setInterval(updateCountdown, 1000)
function updateCountdown() {
  timerRef.value.innerText = time;
  time--
  if(time < 0) {
    clearInterval(interval)
    audio.pause()
    emit('timerZeroEvent')
    audio.currentTime = 0;
    audio.src = '';
  }
}

function onAnswerPressed() {
  clearInterval(interval)
  audio.pause()
  emit('timerZeroEvent')
  audio.currentTime = 0;
  audio.src = '';
}

defineExpose({
  onAnswerPressed
})

</script>

<template>
  <div class="countdown-timer-wrapper">
    <div class="countdown-timer-container">
      <label ref="timerRef">{{props.timerValue}}</label>
    </div>
  </div>
</template>