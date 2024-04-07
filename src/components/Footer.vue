<script setup lang="js">
import '../assets/css/footer.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/UserStore.js'

const store = useUserStore();

const isUserActive = () => {
  if (store.isActive) {
    return '/discover'
  }
  return '/login'
}

const isUserOnline = () => {
  if (store.isActive) {
    return '/discover'
  }
  return '/'
}

const isLoggedIn = () => {
  if (store.isActive) {
    store.resetAll()
  }
}



</script>

<template>
  <div class="footer-wrapper">

    <div class="links-wrapper">
      <p class="links-header">Links</p>
      <div class="links-container">
        <RouterLink class="router" id="home" :to="isUserOnline()">Home</RouterLink>
        <RouterLink class="router" id="discover" :to="isUserActive()">Discover</RouterLink>
        <RouterLink class="router" id="login" to="/login" @click="isLoggedIn()">Login</RouterLink>
      </div>
    </div>

    <div class="support-wrapper">
      <p class="support-header">Support us</p>
      <div class="support-container">
        <a href="https://twitter.com" target="_blank">
          <i class="fab fa-twitter"></i>
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank">
          <i class="fab fa-instagram"></i>
           Instagram
        </a>
        <a href="https://facebook.com" target="_blank">
          <i class="fab fa-facebook"></i>
           Facebook
        </a>
        <a href="https://discord.gg" target="_blank">
          <i class="fab fa-discord"></i>
           Discord
        </a>
      </div>
    </div>

    <div class="info-wrapper">
      <p class="info-header">Company</p>
      <div class="info-container">
        <RouterLink class="router" to="/about-us">About us</RouterLink>
        <RouterLink class="router" to="/privacy-policy">Privacy</RouterLink>
      </div>
    </div>

  </div>
</template>
