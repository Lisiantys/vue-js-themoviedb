<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './templates/Header.vue'
import Footer from './templates/Footer.vue'
</script>

<template>
    <div class="wrapper">
      <Header />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/french-movies">About</RouterLink>
      </nav>
    </div>

  <RouterView />
</template>

<style scoped>

</style>
