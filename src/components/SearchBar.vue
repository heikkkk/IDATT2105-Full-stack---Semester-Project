<script setup>
import '../assets/css/searchBar.css'
</script>

<template>
  <div class="search-bar-container">
    <form class="search-bar-form">
      <select class="search-bar-filter">
        <option>No filter</option>
        <option>Authors</option>
        <option>Categories</option>
        <option>Name</option>
        <option>Tags</option>
      </select>
      <input class="search-bar-input" type="text" placeholder="Search for quiz's" name="q">
      <button class="search-bar-button" type="submit"><img src="../assets/img/magnifyingGlass.png" alt="search glass"></button>
    </form>
  </div>
</template>