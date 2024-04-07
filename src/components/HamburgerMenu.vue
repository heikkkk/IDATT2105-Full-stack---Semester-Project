<script setup>
import '../assets/css/hamburgerMenu.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { useUserStore } from '@/stores/UserStore.js'
import { ref } from 'vue'

const store = useUserStore();
const menuRef = ref(null);
const onBurgerClicked = () => {
  const menu = menuRef.value;
  console.log(getComputedStyle(menu).getPropertyValue('right'))
  if (parseInt(getComputedStyle(menu).getPropertyValue('right')) < 0) {
    menu.style.setProperty('right', 0);
    return;
  }
  menu.style.setProperty('right', '-222px');
}

</script>

<template>
  <div class="hamburger-container">
    <i class="fas fa-bars fa-2x" @click="onBurgerClicked"></i>
  </div>
  <div class="hamburger-menu" ref="menuRef">
    <ul>
      <li v-if="store.isActive"><RouterLink class="hamburger-menu-link" to="/profile">Profile settings</RouterLink></li>
      <li v-if="store.isActive"><RouterLink class="hamburger-menu-link" to="/" @click="store.resetAll()">Log out</RouterLink></li>
      <li v-if="store.isActive"><RouterLink class="hamburger-menu-link" to="/discover">Discover</RouterLink></li>
      <li v-if="!store.isActive"><RouterLink class="hamburger-menu-link" to="/login">Login</RouterLink></li>
      <li v-if="!store.isActive"><RouterLink class="hamburger-menu-link" to="/sign-up">Sign up</RouterLink></li>
    </ul>
  </div>
</template>