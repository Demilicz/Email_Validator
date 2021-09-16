<template>
  <div class="registration">
    <h2>New User Signup</h2>
    <form action="#">
      <input
      type="name"
      class="input"
      :class="colorFullname"
      v-model="inputValue.fullname"
      @keyup="validName"
      placeholder="Enter your fullname" required>

      <p>Firstname and lastname must be alphanumeric and contains 5-12 characters </p>

      <input
      type="nickname"
      :class="colorNickname"
      class="input"
      name="nickname"
      v-model="inputValue.nickname"
      @keyup="validNick"
      placeholder="Enter your nickname" required>

      <p>Nickname must be alphanumeric and contains 5-12 characters</p>

      <input
      type="email"
      :class="colorEmail"
      class="input"
      name="email"
      v-model="inputValue.email"
      placeholder="Enter your email"
      @keyup="validEmail"
      required>
      <p>Email must be valid address e.g. me@mydomain.com</p>


      <input type="password" class="pasInput" name="password" placeholder="Enter your password" >
      <input type="password" class="pasInput" name="cheakPassword" placeholder="Repeat your password" >

      <p v-if="isDifferentPass" class="error">Password should be the same in both inputs!</p>
      <p>Password must be alphanumeric (@ , _ and are also allowed) and be 8-20 characters</p>

      <input
      type="telephon"
      :class="colorTelephone"
      class="input"
      name="telephon"
      v-model="inputValue.telephone"
      @keyup="validNumber"
      placeholder="Enter your telephon" required>

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
        telephone: ''
      },

      isDifferentPass: false,

      isValidInputs: {
        fullname: false,
        nickname: false,
        email: false,
        password: false,
        cheakPassword: false,
        telephone: false

      }

    }),
    methods: {

      validName() {

        let isValid = validation.fullname.test(this.inputValue.fullname);

        this.isValidInputs.fullname = isValid;

      },
      validNick() {

        let isValid = validation.nickname.test(this.inputValue.nickname);

        this.isValidInputs.nickname = isValid;

      },
      validNumber() {
        let isValid = validation.telephone.test(this.inputValue.telephone);

        this.isValidInputs.telephone = isValid;
      },
      validEmail() {
        let isValid = validation.email.test(this.inputValue.email);

        this.isValidInputs.email = isValid;
      }


    },
    computed: {
      colorFullname () {
        if (this.inputValue.fullname === "") {
          return;
        }
        if (this.isValidInputs.fullname) {
          return "validInput";
        }
        else
            return "errorInput";

      },
      colorNickname() {
        if (this.inputValue.nickname === "") {
          return;
        }
        if (this.isValidInputs.nickname) {
          return "validInput";
        }
        else
            return "errorInput";
      },
      colorTelephone() {
        if (this.inputValue.telephone === "") {
          return;
        }
        if (this.isValidInputs.telephone) {
          return "validInput";
        }
        else
            return "errorInput";
      },
      colorEmail() {
         if (this.inputValue.email === "") {
          return;
        }
        if (this.isValidInputs.email) {
          return "validInput";
        }
        else
            return "errorInput";
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
      border: 2px solid #a9c9c7;
      border-radius: 3px;
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

    .validInput {
      border: 2px solid #0be064;
    }
    .errorInput {
      border: 2px solid red;
    }

  }


</style>
