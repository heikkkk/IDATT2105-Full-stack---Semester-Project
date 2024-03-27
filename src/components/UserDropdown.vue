<script setup>
import '../assets/css/userDropdown.css'
import { useUserStore } from '@/stores/UserStore.js'

const store = useUserStore()
</script>

<template>
  <div class="user-dropdown-wrapper">
    <div class="user-dropdown-container">
      <img v-if="store.getPath==null" src="../assets/img/defaultUserPicture.png" alt="default picture" class="user-pic">

      <!-- TODO fix this mess! -->
      <h2 v-if="store.getUsername==null" class="username-text">username</h2>
      <h2 v-else class="username-text"> {{ store.getUsername }} </h2>
    </div>
    <div class="dropdown-content">
      <RouterLink class="user-link" to="/change-language">Change Language</RouterLink>
      <RouterLink class="user-link" to="/profile">Profile settings</RouterLink>
      <RouterLink class="user-link" to="/" @click="store.resetAll()">Log out</RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>