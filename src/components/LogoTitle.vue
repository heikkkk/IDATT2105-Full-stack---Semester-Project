<script setup>
import '../assets/css/logoTitle.css'
import { useUserStore } from '@/stores/UserStore.js'
const store = useUserStore();
const props = defineProps({
  content: {
    type: String,
    default: "uizopia"
  }
})

const userIsActive = () => {
  if (store.isActive) {
    return '/discover'
  }
  return '/'
}

</script>

<template>
  <RouterLink :to="userIsActive()" id="logo-link">
    <div>
      <img src="@/assets/img/logo.png" alt="logo" id="logo">
    </div>
    <h1>{{ props.content }}</h1>
  </RouterLink>
</template>