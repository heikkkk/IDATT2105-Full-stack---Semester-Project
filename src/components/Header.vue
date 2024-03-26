<script setup lang="js">
import '../assets/css/header.css'
</script>

<template>
  <div class="header-container">
    <div class="logo">
      <RouterLink to="/" id="logo-link">
        <div>
          <!--
          <img src="@/assets/img/logo.png" alt="logo" id="logo">
          -->
        </div>
        <h1>quizopia</h1>
      </RouterLink>
    </div>
    <div class="search">
      <form class="search-form">
        <input type="text" id="searchInput" placeholder="Search Quizes">
        <button type="button" id="searchButton"><i class="fa fa-search"></i>Search</button>
      </form>
    </div>
    <div class="sign-up">
      <RouterLink to="sign up" id="sign-up-link">Sign up</RouterLink>
    </div>
  </div>
</template>