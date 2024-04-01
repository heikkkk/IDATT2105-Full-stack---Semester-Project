<script setup>
import '../../assets/css/Login/login.css'
import LogoTitle from '@/components/LogoTitle.vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/UserStore.js'
import axios from 'axios'
import { ref, computed } from 'vue'

// TODO implement form validation
const router = useRouter()
const userStore = useUserStore()

const username = ref('')
const password = ref('')

let authenticationError = ref(false);

const authConfig = computed(() => ({
  auth: {
    username: username.value,
    password: password.value
  }
}))

function parseResponse(response) {
  userStore.setUsername(response.data.user_name)
  userStore.setToken(response.data.access_token)
}

const postLoginCredentials = () => {
  axios.post('http://localhost:8080/sign-in',{}, authConfig.value)
  .then(response => {
    parseResponse(response, userStore)
    router.push('/discover')
  })
  .catch(error => {
    //TODO show error message to the user
    authenticationError.value = true
  })
}

const login = () => {
  postLoginCredentials()
};
</script>

<template>
  <div class="login-wrapper">
    <div class="login-container">
      <form class="login-form" @submit.prevent="login">
        <LogoTitle color="#ffffff"></LogoTitle>
        <p v-if="authenticationError" class="error_msg">Incorrect username or password</p>
        <input v-model="username" :class="authenticationError === false ? 'username-input' : 'error'" type="text" placeholder="Username">
        <input v-model="password" :class="authenticationError === false ? 'password-input' : 'error'" type="password" placeholder="Password">
        <div class="login-button-container">
          <button class="login-button" type="submit" @click="login">Login</button>
          <div class="signup-paragraph-container">
            <p >Don't have a user?
              <RouterLink to="/sign-up" style="color: white">Sign up</RouterLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>