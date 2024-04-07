<script setup>
import '@/assets/css/Profile/updateUsername.css'
import { ref } from 'vue'
import { updateUsername } from '@/services/ProfileService.js'
import { useUserStore } from '@/stores/UserStore.js'

let newUsername = ref('')

async function handleSubmit() {
  const response = await updateUsername(useUserStore().getUserId, newUsername.value)
  if (response && response.status === 200) {
    useUserStore().setUsername(newUsername.value)
    alert("Username updated")
  } else {
    alert("The username probably is probably taken, pick another one")
  }
}
</script>

<template>
  <hr>
    <div class="update-username-container">
      <h1>Create new username</h1>
      <form class="update-username-form" @submit.prevent="handleSubmit">
        <input class="new-username-input" v-model="newUsername" type="text" placeholder="New username">
        <button class="update-username-button" type="submit">Update username</button>
      </form>
    </div>
  <hr>
</template>