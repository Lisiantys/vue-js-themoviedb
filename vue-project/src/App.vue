<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './templates/Header.vue'
import Footer from './templates/Footer.vue'

</script>

<template>
  <Header />
    <main>
      <RouterView />
    </main>
  <Footer />
</template>

<style scope>

</style>