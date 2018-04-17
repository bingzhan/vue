<template>
  <div id="app">
    <router-link to="/"><img src="./assets/logo.png"></router-link>
    <p>
      <router-link to="/list">Go to List</router-link>
      <router-link to="/detail/12">Go to Detail</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
