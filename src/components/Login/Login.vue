<script setup>
import '../../assets/css/Login/login.css'
import LogoTitle from '@/components/LogoTitle.vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/UserStore.js'

// TODO implement form validation
const router = useRouter();
const store = useUserStore()
const login = () => {
  store.setUsername("Username") //Todo remove this testing line
  router.push('/dashboard')
};
</script>

<template>
  <div class="login-wrapper">
    <div class="login-container">
      <form class="login-form" @submit.prevent="login">
        <LogoTitle color="#ffffff"></LogoTitle>
        <input class="username-input" type="text" placeholder="Username">
        <input class="password-input" type="password" placeholder="Password">
        <div class="login-button-container">
          <button class="login-button" type="submit">Login</button>
          <div class="signup-paragraph-container">
            <p>Don't have a user?
              <RouterLink to="/sign-up" style="color: white">Sign up</RouterLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>