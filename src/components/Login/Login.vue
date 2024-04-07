<script setup>
import '../../assets/css/Login/login.css'
import LogoTitle from '@/components/LogoTitle.vue'
import { useRouter } from 'vue-router';
import { login, usernameRef, passwordRef } from '../../services/LoginService.js'
import { ref } from 'vue'

const authenticationError = ref(false)
const router = useRouter()

/**
 * Handles the form submission for login. If the promise from
 * the login function gives status code 200, then navigates to discover.
 */
const handleSubmit = async () => {
  try {
    const response = await login()
    if (response && response.status === 200) {
      await router.push('/discover')
      window.location.reload()
    } else {
      authenticationError.value = true
    }
  } catch (error) {
    authenticationError.value = true
  }
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-container">
      <form class="login-form" @submit.prevent="handleSubmit">
        <LogoTitle data-cy="logo-title-login" color="#ffffff"></LogoTitle>
        <p v-if="authenticationError" class="error_msg">Incorrect username or password</p>
        <input v-model="usernameRef" :class="authenticationError === false ? 'username-input' : 'error'" type="text" placeholder="Username">
        <input v-model="passwordRef" :class="authenticationError === false ? 'password-input' : 'error'" type="password" placeholder="Password">
        <div class="login-button-container">

          <button data-cy="login-button" class="login-button" type="submit">Login</button>
          <div class="signup-paragraph-container">
            <p >Don't have a user?
              <RouterLink data-cy="sign-up-button" to="/sign-up" style="color: white">Sign up</RouterLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>