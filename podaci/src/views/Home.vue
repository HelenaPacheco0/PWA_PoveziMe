<template>
  <div class="home">
    <b-table :data="data" :columns="columns"></b-table>
    <UnosPodataka />
    <Home />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    Home
  },
}
</script>
