<script setup>
import '@/assets/css/Profile/updatePassword.css'
import { ref } from 'vue'
import { updatePassword } from '@/services/ProfileService.js'
import { useUserStore } from '@/stores/UserStore.js'

let newPassword = ref('')
let confirmPassword = ref('')

/**
 * Handles the submission of the password update form.
 */
async function handleSubmit() {
  if (newPassword.value === confirmPassword.value) {
    const response = await updatePassword(useUserStore().getUserId, confirmPassword.value)
    if (response && response.status === 200) {
      alert("Password updated!")
    } else {
      alert("An error happened while updating passwords")
    }
  } else {
    alert("Make sure that the passwords are equal")
  }
}
</script>

<template>
  <hr>
    <div class="update-password-container">
      <h1>Create new password</h1>
      <form class="update-password-form" @submit.prevent="handleSubmit">
        <input data-cy="new-password-input" class="new-password-input" v-model="newPassword" type="password" placeholder="New password">
        <input data-cy="confirm-password-input" class="confirm-password-input" v-model="confirmPassword" type="password" placeholder="Confirm password">
        <button data-cy="update-password-button-route" class="update-password-button" type="submit">Update password</button>
      </form>
    </div>
  <hr>
</template>