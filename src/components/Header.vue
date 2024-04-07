<script setup lang="js">
import LogoTitle from '@/components/LogoTitle.vue'
import SearchBar from '@/components/SearchBar.vue'
// import SettingsDropdown from '@/components/SettingsDropdown.vue'
import UserDropdown from '@/components/UserTitle.vue'
import { useUserStore } from '@/stores/UserStore.js'
import '../assets/css/header.css'
import HamburgerMenu from '@/components/HamburgerMenu.vue'

const store = useUserStore()

const emit = defineEmits(['searchEvent']);
const onSearchEventReceived = () => {
  emit('searchEvent')
}

</script>

<template>
  <div class="header-container">

    <LogoTitle data-cy="logo-title-discover" class="logoTitle" color="white"/>
    <SearchBar class="search-bar" @searchEvent="onSearchEventReceived"/>

    <div v-if="store.isActive" class="burger-container">
      <UserDropdown class="userTitle"/>
      <HamburgerMenu/>
    </div>
    <div v-else class="burger-container">
      <div/>
      <HamburgerMenu class="burger"/>
    </div>
    <!--
    <div v-if="store.getUsername==null" class="sign-up">
      <RouterLink to="/sign-up" class="sign-up-link">Sign up</RouterLink>
      <SettingsDropdown class="dropdown-content"/>
    </div>
    <UserDropdown v-else/>
    -->
  </div>
</template>