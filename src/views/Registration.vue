<template>
  <div class="registration">
    <h2>New User Signup</h2>
    <form action="#">
      <input type="name" class="input"  v-model="inputValue.fullname" @keyup="validName" placeholder="Enter your fullname" >
      <p>Firstname and lastname must be alphanumeric and contains 5-12 characters {{inputValue.name}}</p>

      <input type="nickname" class="input" name="kickname" placeholder="Enter your nickname" >
      <p>Nickname must be alphanumeric and contains 5-12 characters</p>

      <input type="email" class="input" name="email" placeholder="Enter your email" >
      <p>Email must be valid address e.g. me@mydomain.com</p>


      <input type="password" class="pasInput" name="password" placeholder="Enter your password" >
      <input type="password" class="pasInput" name="cheakPassword" placeholder="Repeat your password" >

      <p v-if="isDifferentPass" class="error">Password should be the same in both inputs!</p>
      <p>Password must be alphanumeric (@ , _ and are also allowed) and be 8-20 characters</p>

      <input type="telephon" class="input" name="telephon" placeholder="Enter your telephon">
      <p>Telephon must be a valid telphone number 11 digits</p>

    </form>
    <button>Confirm</button>
  </div>
</template>



<script lang="ts">

  import validation from '../objects/validation';
  import {defineComponent} from 'vue';

  export default defineComponent({
    data: () =>({

      inputValue: {
        fullname: '',
        nickname: '',
        email: '',
        password: '',
        cheakPassword: '',
        telephon: ''
      },

      isDifferentPass: false,





    }),
    methods: {
      validName() {

        let isValid = validation.fullname.test(this.inputValue.fullname);
        console.log();

        console.log(isValid);

      }

    }
  })
</script>

<style lang="scss" scoped>


  form {
    display: flex;
    flex-wrap: wrap;
    max-width: 420px;
    margin: 20px auto;

    .input {
      padding: 4px 6px;
      width: 400px;
      height: 30px;
      margin: 5px 0;
    }
    .pasInput {
      padding: 4px 6px;
      width: 192px;
      height: 30px;
      margin: 5px 0;
    }

    p {
      font-size: 10px;
      .error {
        color: red;
        font-size: 12px;
      }
    }


  }


</style>
