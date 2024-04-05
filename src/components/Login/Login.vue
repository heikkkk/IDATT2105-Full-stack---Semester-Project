<script setup>
import '../../assets/css/Login/login.css'
import LogoTitle from '@/components/LogoTitle.vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/UserStore.js'
import { login, username, password } from '../../assets/services/loginService.js'
import axios from 'axios'
import { ref, computed } from 'vue'

const authenticationError = ref(false)

const router = useRouter()

const handleSubmit = async () => {
  try {
    const response = await login()
    if (response && response.status === 200) {
      router.push('/discover')
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
        <LogoTitle color="#ffffff"></LogoTitle>
        <p v-if="authenticationError" class="error_msg">Incorrect username or password</p>
        <input v-model="username" :class="authenticationError === false ? 'username-input' : 'error'" type="text" placeholder="Username">
        <input v-model="password" :class="authenticationError === false ? 'password-input' : 'error'" type="password" placeholder="Password">
        <div class="login-button-container">

          <button data-cy="login-button" class="login-button" type="submit">Login</button>
          <RouterLink to="/playingTF" style="color: white">Temp</RouterLink>
          <div class="signup-paragraph-container">
            <p >Don't have a user?
              <RouterLink data-cy="" to="/sign-up" style="color: white">Sign up</RouterLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>