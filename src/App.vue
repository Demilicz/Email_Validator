<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'Registration'}">Registration</router-link> |
    <router-link :to="{name: 'Login'}">Login</router-link>
  </div>
    <router-view/>
</template>

<style lang="scss">

body {
  background: #f2fcff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-weight: bold;
    color: #4a08d1;
    background: #6bfaf5;
    padding: 8px 0;
    border-radius: 8px;
    text-decoration: none;
    width: 130px;
    margin: 0 5px;
    &.router-link-exact-active {
      color: #340a8a;
    }
  }
}
</style>
