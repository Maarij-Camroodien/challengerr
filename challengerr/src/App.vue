<template>
  <nav>
    <NavBar/>
  </nav>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavBar,
    FooterComp
  }
}
</script>

<style>
#app {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto minmax(100vh, 1fr) auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!-- 
<router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->