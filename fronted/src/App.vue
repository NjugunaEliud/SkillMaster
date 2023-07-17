<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/skills">Skills</router-link>
    
    
  </nav>
  <router-view/>
</template>

<style>
body{
  background: #eee;
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
  background: white;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
