<template>
  <section id="app">
    <topNav></topNav>
    <sideNav></sideNav>
    <mainArea></mainArea>
  </section>
</template>

<script>
import topNav from './components/topNav'
import sideNav from './components/sideNav'
import mainArea from './components/mainArea'

export default {
  name: 'App',
  components: {
    topNav,
    sideNav,
    mainArea
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.btn {
  color: #FFFFFF;
  background-color: #444543;
  margin:.5rem;
}
.btn:focus, .btn:hover {
  color: #444543;
  background-color: gold;
}
</style>
