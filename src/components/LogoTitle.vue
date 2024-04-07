<script setup>
import '../assets/css/logoTitle.css'
import { useUserStore } from '@/stores/UserStore.js'

const store = useUserStore();
const props = defineProps({
  content: {
    type: String,
    default: "uizopia"
  }
})

/**
 * Determines the URL to which the user should be redirected based on their login status.
 * If the user is active (logged in), it returns the URL for the discover page.
 * If the user is not active, it returns the URL for the home page.
 * @returns {string} The URL to redirect the user based on their login status.
 */
const userIsActive = () => {
  if (store.isActive) {
    return '/discover'
  }
  return '/'
}

</script>

<template>
  <RouterLink :to="userIsActive()" id="logo-link">
    <div>
      <img src="@/assets/img/logo.png" alt="logo" id="logo">
    </div>
    <h1>{{ props.content }}</h1>
  </RouterLink>
</template>