<script setup>
import '../assets/css/privacyPolicy.css'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { marked } from 'marked'

const privacyText = "# Privacy Policy\n" +
  "\n" +
  "Welcome to Quizopia! We value your privacy and want to be transparent about how we handle your personal information when you use our service.\n" +
  "\n" +
  "### What Information We Collect\n" +
  "\n" +
  "- **Personal Information**: When you use our Service, we may ask for your name, email address, password, and any other information you choose to provide.\n" +
  "  \n" +
  "- **Usage Data**: We also collect information about how you interact with our Service, such as your browsing activity, IP address, and device information.\n" +
  "\n" +
  "### Sharing Your Information\n" +
  "\n" +
  "We may share your personal information with trusted third-party service providers that help us deliver and improve our Service. We may also disclose your information as required by law or to protect our rights and interests.\n" +
  "\n" +
  "### Security Measures\n" +
  "\n" +
  "We take reasonable steps to safeguard your personal information and prevent unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute protection.\n" +
  "\n" +
  "### Your Rights\n" +
  "\n" +
  "You have the right to access, correct, or delete your personal information. You can also choose to restrict or object to certain types of data processing. If you have any concerns or requests regarding your information, please contact us.\n" +
  "\n" +
  "### Contact Us\n" +
  "\n" +
  "If you have any questions or comments about our Privacy Policy, please feel free to reach out to us at Quizopia@gmail.com.\n"
const htmlContent = marked(privacyText);

</script>

<template>
  <Header/>
  <div class="privacy-policy-wrapper">
    <div class="privacy-policy-container" v-html="htmlContent"></div>
  </div>
  <Footer/>
</template>