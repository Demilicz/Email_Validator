<template>
  <div class="registration">
    <h2>New User Signup</h2>
    <form action="#">
      <input type="name" name="name" @keyup="validName" placeholder="Enter your fullname" >
      <p>Firstname and lastname must be alphanumeric and contains 5-12 characters</p>

      <input type="nickname" name="kickname" placeholder="Enter your nickname" >
      <p>Nickname must be alphanumeric and contains 5-12 characters</p>

      <input type="email" name="email" placeholder="Enter your email" >
      <p>Email must be valid address e.g.  me@mydomain.com</p>

      <input type="password" name="password" placeholder="Enter your password" >
      <input type="password" name="cheakPassword" placeholder="Repeat your password" >
      <p>Password must be alphanumeric (@ , _ and are also allowed) and be 8-20 characters</p>

      <input type="telephon" name="telephon" placeholder="Enter your telephon">
      <p>Telephon must be a valid telphone number 11 digits</p>

    </form>
    <button>Confirm</button>
  </div>
</template>



<script lang="ts">

  import validation from '../objects/validation';

  export default {
    data: () =>({
      name: null,
      nickname: null,
      email: null,
      password: null,
      cheakPassword: null,
      telephon: null
    }),
    methods: {
      validName() {
       console.log(validation);

      }

    }
  }
</script>
