<script setup lang="js">
import LogoTitle from '@/components/LogoTitle.vue'
import '../assets/css/header.css'
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
    <div class="sign-up">
      <RouterLink to="/sign-up" id="sign-up-link">Sign up</RouterLink>
    </div>
  </div>
</template>