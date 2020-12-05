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

export default {
  name: "App"
}
</script>

<style scoped>
#nav {
    flex: 1;
    margin: 40px;
    padding: 40px;
    border: 1px solid #D3D3D3;
    border-radius: 6px;
}

</style>
