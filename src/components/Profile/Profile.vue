<script setup>
import '@/assets/css/Profile/profile.css'
import { useUserStore } from '@/stores/UserStore.js'
import Carousel from '@/components/Discover/Carousel.vue'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getQuizesByUser } from '@/services/DiscoverService.js'

const store = useUserStore();
const profileImage = "src/assets/img/defaultUserPicture.png";
const router = useRouter();
let quizzesByUser = ref([]);

/**
 * Redirects to the update password form page.
 * If already on the update password page, redirects back to the profile page.
 */
const showUpdatePassword = () => {
  if (router.currentRoute.value.path === '/update-password') {
    router.push('profile')
  }
  else {
    router.push('update-password');
  }
}

/**
 * Redirects to the update username form page.
 * If already on the update username page, redirects back to the profile page.
 */
const showUpdateUsername = () => {
  if (router.currentRoute.value.path === '/update-username') {
    router.push('profile')
  }
  else {
    router.push('update-username');
  }
}

// Fetches quizzes associated with the user on component mount
onMounted(async () => {
  try {
    const userResponse = await getQuizesByUser();
    quizzesByUser.value = userResponse.data;
  } catch (error) {
    throw new Error('Could not load quizzes from server : ' + error.response.statusText);
  }
});
</script>

<template>
  <div class="profile-wrapper">
    <div class="profile-details-container">
      <img :src=profileImage class="profile-image" alt="profileImage">
      <div class="profile-username-container">
        <h1 class="profile-username">{{store.getUsername}}</h1>
      </div>
    </div>
    <div class="profile-button-container">
      <button class="update-password" @click="showUpdatePassword">Update password</button>
      <button class="update-username" @click="showUpdateUsername">Update username</button>
    </div>
    <div class="profile-router-view-container">
      <RouterView class="profile-router-view"></RouterView>
    </div>
    <Carousel title="Your quiz's" v-model:content="quizzesByUser"></Carousel>
  </div>
</template>