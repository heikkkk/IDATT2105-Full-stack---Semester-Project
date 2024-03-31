<script setup>
import '@/assets/css/Profile/profile.css'
import { useUserStore } from '@/stores/UserStore.js'
import Carousel from '@/components/Discover/Carousel.vue'
import { useRouter } from 'vue-router'

const store = useUserStore();
const profileImage = "src/assets/img/defaultUserPicture.png";
const router = useRouter();

const showUpdatePassword = () => {
  if (router.currentRoute.value.path === '/update-password') {
    router.push('profile')
  }
  else {
    router.push('update-password');
  }
}

const showUpdateUsername = () => {
  if (router.currentRoute.value.path === '/update-username') {
    router.push('profile')
  }
  else {
    router.push('update-username');
  }
}

const showUpdateProfileImage = () => {
  if (router.currentRoute.value.path === '/update-Profile-image') {
    router.push('profile')
  }
  else {
    router.push('/update-Profile-image');
  }
}
</script>

<template>
  <div class="profile-wrapper">
    <div class="profile-details-container">
      <img :src=profileImage class="profile-image" alt="profileImage" @click="showUpdateProfileImage">
      <div class="profile-username-container">
        <h1 class="profile-username">{{store.getUsername}}</h1>
      </div>
    </div>
    <div class="profile-button-container">
      <button class="update-profile-image" @click="showUpdateProfileImage">Update image</button>
      <button class="update-password" @click="showUpdatePassword">Update password</button>
      <button class="update-username" @click="showUpdateUsername">Update username</button>
    </div>
    <div class="profile-router-view-container">
      <RouterView class="profile-router-view"></RouterView>
    </div>
    <Carousel title="Your quiz's"></Carousel>
  </div>
</template>