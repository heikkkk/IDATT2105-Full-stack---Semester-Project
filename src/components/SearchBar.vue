<script setup>
import '../assets/css/SearchBar.css'
</script>

<template>
  <div class="search-bar-container">
    <form class="search-bar-form">
      <input class="search-bar-input" type="text" placeholder="Search for quiz's" name="q">
      <button class="search-bar-button" type="submit"><img src="../assets/img/magnifyingGlass.png" alt="search glass"></button>
    </form>
  </div>
</template>