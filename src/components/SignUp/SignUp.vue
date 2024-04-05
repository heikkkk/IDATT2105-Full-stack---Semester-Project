<script setup>
import '../../assets/css/SignUp/signUp.css'
import LogoTitle from '@/components/LogoTitle.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import axios from 'axios'
import { signUp, username, password, email } from '../../services/SignUpService.js'

// TODO implement form validation
const authenticationError = ref(false)
const repeatPassword = ref('')

const router = useRouter()

const handleSubmit = async () => {
  try {
    const response = await signUp()
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
  <div class="signup-wrapper">
    <div class="signup-container">
      <form class="signup-form" @submit.prevent="handleSubmit">
        <LogoTitle color="#ffffff"></LogoTitle>
        <input v-model="username" :class="authenticationError === false ? 'username-input' : 'error'" class="username-input" type="text" placeholder="Username">
        <input v-model="email" :class="authenticationError === false ? 'email-input' : 'error'" class="email-input" type="email" placeholder="Email">
        <input v-model="password" :class="authenticationError === false ? 'password-input' : 'error'" class="password-input" type="password" placeholder="Password">
        <input v-model="repeatPassword" :class="authenticationError === false ? 'password-input' : 'error'" class="password-input" type="password" placeholder="Repeat password">
        <div class="signup-button-container">
          <button class="signup-button" type="submit">Sign up</button>
          <div class="login-paragraph-container">
            <p>Already created an account?
              <RouterLink to="/login" style="color: white">Login</RouterLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>