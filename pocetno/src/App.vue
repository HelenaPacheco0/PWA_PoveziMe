<template>
  <div id="app">

    <App/>
  </div>
</template>

<script>
import App from './components/App.vue'

export default {
  name: 'App',
  components: {
    MainApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
