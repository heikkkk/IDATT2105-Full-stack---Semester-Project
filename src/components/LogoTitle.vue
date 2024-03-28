<script setup>
import '../assets/css/logoTitle.css'
import { useUserStore } from '@/stores/UserStore.js'
const store = useUserStore();
const props = defineProps({
  content: {
    type: String,
    default: "uizopia"
  },
  color: {
    type: String,
    default: null
  }
})

const userIsActive = () => {
  if (store.getUsername!=null) {
    return '/discover'
  } else {
    return '/'
  }
}

</script>

<template>
  <RouterLink to=/ id="logo-link">
    <div>
      <img src="@/assets/img/logo.png" alt="logo" id="logo">
    </div>
    <h1 v-if="props.color==null" style="color: black;">{{ props.content }}</h1>
    <h1 v-else :style="{ color: props.color }">{{ props.content }}</h1>
  </RouterLink>
</template>