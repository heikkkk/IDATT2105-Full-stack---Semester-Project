<script setup lang="js">
import '../assets/css/footer.css'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterLink to="/about us">About us</RouterLink>
    <RouterLink to="/terms and policy">Terms and policy</RouterLink>
    <RouterLink to="/etc">Etc ...</RouterLink>
  </div>
</template>