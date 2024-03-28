<script setup lang="js">
import '@/assets/css/Welcome/welcome.css'
import { useRouter } from 'vue-router';

const router = useRouter();
const welcomeComments = [
  'Test your knowledge!',
  'Expand your wisdom!',
  'Embrace new knowledge!',
  'Make learning fun!',
  'Ignite your curiosity!',
  'Unlock your potential!',
  'Dive into new ideas!',
  'Discover new horizons!',
  'Challenge yourself!',
  'Broaden your perspective!',
  'Explore new frontiers!',
  'Stimulate your mind!',
  'Feed your intellect!',
  'Fuel your passion for learning!',
  'Engage your intellect!',
  'Elevate your understanding!',
  'Cultivate your intellect!',
  'Nourish your thirst for knowledge!',
  'Empower your mind!',
  'Satisfy your curiosity!',
  'Spark your imagination!',
  'Sharpen your mind!',
  'Foster your love of learning!',
  'Expand your intellectual horizons!',
  'Pursue lifelong learning!'
]

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