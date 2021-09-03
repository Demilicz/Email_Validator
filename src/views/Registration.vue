<template>
  <div class="registration">
    <h2>New User Signup</h2>
    <form action="#">
      <input type="username" placeholder="Enter your username" >
      <p v-if="wronguser">Username must be alphanumeric and contains 5-12 characters</p>
      <input type="password" placeholder="Enter your password" >
      <p v-if="wrongpassword">Password must be alphanumeric (@ , _ and are also allowed) and be 8-20 characters</p>
    </form>
    <button>Log In</button>
  </div>
</template>
