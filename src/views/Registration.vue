<template>
  <div class="registration">
    <h2>New User Signup</h2>
    <form action="#">
      <input type="name" placeholder="Enter your fullname" >
      <p>Firstname and lastname must be alphanumeric and contains 5-12 characters</p>

      <input type="nickname" placeholder="Enter your nickname" >
      <p>Nickname must be alphanumeric and contains 5-12 characters</p>

      <input type="email" placeholder="Enter your email" >
      <p>Email must be valid address e.g.  me@mydomain.com</p>

      <input type="password" placeholder="Enter your password" >
      <input type="password" placeholder="Repeat your password" >
      <p>Password must be alphanumeric (@ , _ and are also allowed) and be 8-20 characters</p>

      <input type="telephon" placeholder="Enter your telephon">
      <p>Telephon must be a valid telphone number 11 digits</p>

    </form>
    <button @click="click">Confirm</button>
  </div>
</template>



<script lang="ts">

  import validation from '../objects/validation';

  export default {
    methods: {
      click() {
        console.log(validation);

      }
    }
  }
</script>
