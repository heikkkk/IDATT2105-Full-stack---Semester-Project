<script setup>
import Header from '@/components/Header.vue'
import SearchResult from '@/components/SearchResult/SearchResult.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'

// In order to update the SearchResult component
let searchKey = ref(0)

/**
 * Increments the value of the search key by 1.
 */
const onSearchEventReceived = () => {
  searchKey.value += 1;
}

</script>

<template>
  <Header @searchEvent="onSearchEventReceived()"/>
  <SearchResult :key="searchKey"/>
  <Footer/>
</template>