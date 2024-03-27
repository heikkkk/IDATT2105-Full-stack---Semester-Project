<script setup lang="js">
import '../assets/css/footer.css'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footer-container">
    <div id="info">
      <p id="Contacts-header">Info</p>
      <div id="linksCon">
        <RouterLink class="router" to="/about us">About us</RouterLink>
        <RouterLink class="router" to="/terms and policy">Terms and policy</RouterLink>
        <RouterLink class="router" to="/etc">Etc ...</RouterLink>
        <p id="ref">@2024 IDATT2105, Icons by icon8</p>
      </div>
    </div>
    <div id="support">
      <p id="Contacts-header">Support us!</p>
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
    </div>
    </div>
    <div id="leftPart">
      <div id="contacts">
        <p id="Contacts-header">Contacts</p>
      <p class="contacts-body">Phone: 12344565</p>
      <p class="contacts-body">Email: company@mail.com</p>
      <p class="contacts-body">Address: Husveien 23, 9100 Troms</p>
      </div>
    </div>



  </div>



</template>
