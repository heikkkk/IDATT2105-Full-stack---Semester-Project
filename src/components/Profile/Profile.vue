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

onMounted(async () => {
  try {
    const userResponse = await getQuizesByUser();
    quizzesByUser.value = userResponse.data;
    console.log(userResponse.data)
  } catch (error) {
    throw new Error('Could not load quizzes from server : ' + error.response.statusText);
  }
});
</script>

<template>
  <div class="profile-wrapper">
    <div class="profile-details-container">
      <img data-cy="profile-image" :src=profileImage class="profile-image" alt="profileImage" @click="showUpdateProfileImage">
      <div class="profile-username-container">
        <h1 class="profile-username">{{store.getUsername}}</h1>
      </div>
    </div>
    <div class="profile-button-container">
      <button data-cy="update-image-button" class="update-profile-image" @click="showUpdateProfileImage">Update image</button>
      <button data-cy="update-password-button" class="update-password" @click="showUpdatePassword">Update password</button>
      <button data-cy="update-username-button" class="update-username" @click="showUpdateUsername">Update username</button>
    </div>
    <div class="profile-router-view-container">
      <RouterView class="profile-router-view"></RouterView>
    </div>
    <Carousel title="Your quiz's" v-model:content="quizzesByUser"></Carousel>
  </div>
</template>