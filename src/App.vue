<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'Registration'}">Registration</router-link> |
    <router-link :to="{name: 'Login'}">Login</router-link>
  </div>
    <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #3c9ce6;
    background: #6bfaf5;
    padding: 5px;
    border-radius: 4px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #301eeb;
    }
  }
}
</style>
