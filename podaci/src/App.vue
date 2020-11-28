<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
      <router-view/>
  </div>
</template>

<script>
import UnosPodataka from './components/UnosPodataka.vue'



export default {
  name: 'App',
  components: {
    UnosPodataka
  },
  name: 'Home',
  components: {
    Home
  }
}
</script>

<style>

</style>
