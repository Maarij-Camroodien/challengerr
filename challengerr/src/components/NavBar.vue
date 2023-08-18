<template>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <router-link to="../views/HomeView.vue" class="navbar-brand">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/contact" class="nav-link">Conatct</router-link>
        <router-link to="/login" class="nav-link">Login</router-link><router-link to="/register" class="nav-link" id>Register</router-link>
      </div>
    </div>
  </div>
</nav>
  </template>
  
  <script>
  
  
  export default {
  
  }
  </script>

<style scoped>
.navbar {
    background-color: black;
}

.nav-link {
    color: white;
}

.nav-link:hover {
    color: red;
}

.navbar-brand {
    color: white;
}

</style>