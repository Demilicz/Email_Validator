<template>
  <div class="login">
    <h2>Welcome back. log in here.</h2>
    <form action="#">
      <input type="username" placeholder="Enter your username" >
      <p v-if="wronguser">Username must be alphanumeric and contains 5-12 characters</p>
      <input type="password" placeholder="Enter your password" >
      <p v-if="wrongpassword">Password must be alphanumeric (@ , _ and are also allowed) and be 8-20 characters</p>
    </form>
    <button>Log In</button>
  </div>
</template>

<script lang="ts">
  export default {
    data: () => ({
      wronguser: false,
      wrongpassword: false,
    })
  }
</script>

<style lang="scss" scoped>
  .login {
    form{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    }
    input {
      padding: 4px 6px;
      width: 400px;
      height: 30px;
      margin: 5px 0;
    }
    p {
      font-size: 10px;
      color: red;
    }
  }
</style>
