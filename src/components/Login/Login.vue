<script setup>
import '../../assets/css/Login/login.css'
import LogoTitle from '@/components/LogoTitle.vue'
</script>

<template>
  <div class="login-wrapper">
    <div class="login-container">
      <form class="login-form">
        <LogoTitle color="#ffffff"></LogoTitle>
        <input class="username-input" type="text" placeholder="Username">
        <input class="password-input" type="password" placeholder="Password">
        <div class="login-button-container">
          <button class="login-button" type="submit">Login</button>
          <RouterLink to="/playingTF" style="color: white">Temp</RouterLink>
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