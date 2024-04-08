<script setup>
import '../../assets/css/PlayQuiz/countdownTimer.css'
import { ref } from 'vue'

// Initialize audio for timer
const audio = new Audio('src/assets/sound/BeAsYoung.mp3');
// Play the audio
audio.play()

// Define emitted events and props for timer
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
/**
 * Updates the countdown timer display and handles actions when the timer reaches zero.
 */
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

/**
 * Handles the event when an answer is pressed.
 * Stops the timer, pauses audio, and emits the timer zero event.
 */
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