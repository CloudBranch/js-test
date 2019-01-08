<template>
  <div id="app">
    <router-link to="/" class="waves-effect waves-light btn z-depth-0"><i class="fas fa-store"></i> Store</router-link>
    <router-link to="/cart" class="waves-effect waves-light btn z-depth-0"><i class="fas fa-shopping-cart"></i> Cart</router-link>
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
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444543;
  margin-top: 60px;
}
.btn {
  background-color: #444543;
}
.btn:hover {
  background-color: #00447C;
}
.btn:focus {
  background-color: #00447C;
}
</style>
