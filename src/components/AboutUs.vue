<script setup>
import '../assets/css/aboutUs.css'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { marked } from 'marked'

const aboutUsText = "# About Us\n" +
  "\n" +
  "We are a dynamic team of data engineer students united by our passion for technology and programming. With diverse backgrounds and expertise, we bring a unique blend of skills to every project we undertake.\n" +
  "\n" +
  "### Purpose\n" +
  "\n" +
  "This project serves as our delivery for the 2024 Semester Project IDATT2105 Full-stack-application .\n" +
  "\n" +
  "### Meet the Team\n" +
  "- **Anders Høvik**: With a keen eye for detail and a knack for problem-solving, Anders is our go-to expert for front-end development.\n" +
  "\n" +
  "- **Andreas Kluge Svendsrud**: A master of back-end architecture and database management, Andreas ensures our projects are robust and scalable.\n" +
  "\n" +
  "- **Henrik Henrik Teksle Sandok**: Henrik brings a lot of experience in back-end and security, ensuring integrety and control in our project .\n" +
  "\n" +
  "- **Jens Christian Aanestad**: Jens, renowned for his prowess in solving intricate problems with creative and innovative solutions in front-end.\n" +
  "\n"

const htmlContent = marked(aboutUsText)
</script>

<template>
  <Header/>
  <div class="about-us-wrapper">
    <div class="about-us-container" v-html="htmlContent"></div>
  </div>
  <Footer/>
</template>