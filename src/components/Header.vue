<script setup lang="js">
import LogoTitle from '@/components/LogoTitle.vue'
import { useUserStore } from '@/stores/UserStore.js'
import SettingsDropdown from '@/components/SettingsDropdown.vue'
import UserDropdown from '@/components/UserDropdown.vue'
import '../assets/css/header.css'

const store = useUserStore()
</script>

<template>
  <div class="header-container">
    <LogoTitle color="white"></LogoTitle>
    <div class="search">
      <form class="search-form">
        <input type="text" id="searchInput" placeholder="Search Quizes">
        <button type="button" id="searchButton"><i class="fa fa-search"></i>Search</button>
      </form>
    </div>
    <div v-if="store.getUsername==null" class="sign-up">
      <RouterLink to="/sign-up" class="sign-up-link">Sign up</RouterLink>
      <SettingsDropdown/>
    </div>
    <UserDropdown v-else></UserDropdown>
  </div>
</template>