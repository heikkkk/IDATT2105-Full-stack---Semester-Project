<script setup lang="js">
import '../../assets/css/Home/home.css'
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToLogin = () => {
  router.push('/login')
};


</script>

<template>
  <div class="play-container">
    <h1 id="play-title">Play Quiz</h1>
    <button id="join-button" @click="navigateToLogin">Login </button>
  </div>
</template>