<script setup>
import '@/assets/css/Profile/updateUsername.css'
import { ref } from 'vue'
import { refreshToken, updateUsername } from '@/services/ProfileService.js'
import { useUserStore } from '@/stores/UserStore.js'

let newUsername = ref('')
let password = ref('')

async function handleSubmit() {
  // Refresh Token
  await refreshToken(useUserStore().getUsername, password.value)
  // Update username
  const usernameResponse = await updateUsername(useUserStore().getUserId, newUsername.value)
  if (usernameResponse.status === 200) {
    // Generate a new token
    const tokenResponse = await refreshToken(newUsername.value, password.value)
    if (tokenResponse.status === 200) {
      alert("Username updated!")
    }
  }
  // Force reload in order to get correct token
  window.location.reload();

}
</script>

<template>
  <hr>
    <div class="update-username-container">
      <h1>Create new username</h1>
      <form class="update-username-form" @submit.prevent="handleSubmit">
        <input class="new-username-input" v-model="newUsername" type="text" placeholder="New username">
        <input class="password-input" v-model="password" type="text" placeholder="Password">
        <button class="update-username-button" type="submit">Update username</button>
      </form>
    </div>
  <hr>
</template>