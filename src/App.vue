<template>
  <nav>
    <router-link class="show-component" to="/">Strona domowa</router-link> |
    <router-link class="show-component" :to="{name: 'About'}">O nas</router-link> |
    <router-link class="show-component" :to="{name: 'Jobs'}">Pracownicy</router-link>
  </nav>

  <button @click="home">strona domowa</button>
  <button @click="back">wstecz</button>
  <button @click="foward">do przodu</button>

  <router-view/>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      home() {
        this.$router.push({name: 'home'})
      }, 
      back() {
        this.$router.go(-1)
      },
      foward() {
        this.$router.go(1)
      }
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
}

nav {
  padding: 30px;
  
}

nav a {
  display: inline-block;
  font-weight: bold;
  color: #2c3e50;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  border: 1px solid tomato;
  padding: 10px 15px;
  border-radius: 5px;
}
nav a:active{
  transform: scale(0.9);
  box-shadow: 2px 2px 15px #000;
}

nav a.router-link-exact-active {
  color: #fff;
  padding: 10px 15px;
  background: tomato;
  border-radius: 5px;
}

button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.show-component{
  
  animation: show-component  1s forwards ease-in-out;
}
@keyframes show-component {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>
