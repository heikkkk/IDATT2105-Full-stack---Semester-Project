<script setup lang="js">
import '../assets/css/footer.css'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footer-container">
    <div id="linksCon">
    <RouterLink class="router" to="/about us">About us</RouterLink>
    <RouterLink class="router" to="/terms and policy">Terms and policy</RouterLink>
    <RouterLink class="router" to="/etc">Etc ...</RouterLink>
    <p id="ref">@2024 IDATT2105, Icons by icon8</p>
    </div>
    <div id="centerPart">
      <div class="imageBackground">
        <div id="imageTwitter">
        </div>
      </div>
      <div class="imageBackground">
        <div id="imageInsta">
        </div>
      </div>
      <div class="imageBackground">
        <div id="imageFacebook">
        </div>
      </div>
      <div id="leftPart">
        <input id="form" placeholder="enter email" />
        <button id="subscribeButton">Subscribe</button>
      </div>
    </div>


  </div>



</template>
