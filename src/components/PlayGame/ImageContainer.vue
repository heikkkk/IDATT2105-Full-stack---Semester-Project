<script setup>
import "/src/assets/img/animal-pet-kitten-cat-feline-mammal-749376-pxhere.com.jpg"
import "/src/assets/css/PlayGame/imageConteiner.css"

let props = defineProps({
  image : String
})

</script>

<template>
<div class="imageSize">
  <img class="imageCon" :src="props.image"  alt="cats doing stuff">
  


</div>
</template>

<style scoped>

</style>