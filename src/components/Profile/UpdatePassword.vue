<script setup>
import '@/assets/css/Profile/updatePassword.css'
</script>

<template>
  <hr>
    <div class="update-password-container">
      <h1>Create new password</h1>
      <form class="update-password-form">
        <input class="new-password-input" type="password" placeholder="New password">
        <input class="confirm-password-input" type="password" placeholder="Confirm password">
        <button class="update-password-button" type="submit">Update password</button>
      </form>
    </div>
  <hr>
</template>