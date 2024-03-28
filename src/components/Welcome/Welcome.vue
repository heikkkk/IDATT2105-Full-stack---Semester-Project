<script setup lang="js">
import '@/assets/css/Welcome/welcome.css'
import { useRouter } from 'vue-router';

const router = useRouter();
const welcomeComments = ['Test your knowledge!', 'Expand your wisdom!', 'Embrace new knowledge!', 'Make learning fun!']

const navigateToLogin = () => {
  router.push('/login')
};

const randomComment = () => {
  const randomIndex = Math.floor(Math.random() * welcomeComments.length);
  return welcomeComments[randomIndex];
}

</script>

<template>
  <div class="play-container">
    <h1 id="play-title"><i>{{ randomComment() }}</i></h1>
    <button id="join-button" @click="navigateToLogin">Login </button>
  </div>
</template>