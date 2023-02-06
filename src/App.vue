<template>
  <NavBar/>
  <div class=""> 
  <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
export default{
  components:{
    NavBar
  }
}
</script>

<style>

@font-face {
    font-family: 'Ubuntu_Mono';
    src: local('fonts/UbunutuMono-Regular'),
    url(@/assets/fonts/UbuntuMono-Regular.ttf) format('truetype');
    font-style: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
