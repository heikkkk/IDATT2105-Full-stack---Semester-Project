<script setup>
import '../assets/css/settingsDropdown.css'
</script>

<template>
  <div class="settings-dropdown-container">
    <p class="settings">Settings</p>
    <div class="dropdown-content">
      <RouterLink class="settings-link" to="/change-language">Change Language</RouterLink>
      <RouterLink class="settings-link" to="/help">Help</RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>