<template>
  <div class="registration">
    <h2>New User Signup</h2>
    <form action="#">
      <input
      type="name"
      :class="colorFullname"
      v-model="inputValue.fullname"
      @keyup="validName"
      placeholder="Enter your fullname" required>

      <p>Firstname and lastname must be alphanumeric and contains 5-12 characters </p>

      <input
      type="nickname"
      :class="colorNickname"
      name="nickname"
      v-model="inputValue.nickname"
      @keyup="validNick"
      placeholder="Enter your nickname" required>

      <p>Nickname must be alphanumeric and contains 5-12 characters</p>

      <input
      type="email"
      :class="colorEmail"
      name="email"
      v-model="inputValue.email"
      placeholder="Enter your email"
      @keyup="validEmail"
      required>
      <p>Email must be valid address e.g. me@mydomain.com</p>


      <input
      type="password"
      :class="colorPassword"
      class="pasInput"
      name="password"
      v-model="inputValue.password"
      placeholder="Enter your password"
      @keyup="validPassword"
      required>

      <input
      type="password"
      :class="colorPassword"
      class="pasInput"
      name="cheakPassword"
      v-model="inputValue.cheakPassword"
      placeholder="Repeat your password"
      @keyup="validPassword"
      required>

      <p v-if="isDifferentPass" class="error">Password must be the same in both inputs!</p>
      <p>Password must be alphanumeric (@ , _ and are also allowed) and be 8-20 characters</p>

      <input
      type="telephon"
      :class="colorTelephone"
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
      },
      validPassword () {

        if(this.inputValue.password != this.inputValue.cheakPassword){

          this.isDifferentPass = true;

          return;
        }

        this.isDifferentPass = false;

        let isValid = validation.password.test(this.inputValue.password);
        let isValidCheak = validation.password.test(this.inputValue.cheakPassword);

        this.isValidInputs.cheakPassword = isValidCheak;
        this.isValidInputs.password = isValid;
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
      },
      colorPassword() {
      if (this.inputValue.password === "" &&  this.inputValue.cheakPassword === "") {
          return;
        }
        if (this.isValidInputs.password) {
          return "validPass";
        }
        else
            return "errorPass";
    }
    },

  })
</script>

<style lang="scss" scoped>

  form {
    display: flex;
    flex-wrap: wrap;
    max-width: 420px;
    margin: 20px auto;

    input {
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
      border-right: 2px solid #a9c9c7;
      border-top: 2px solid #a9c9c7;
      border-bottom: 2px solid #a9c9c7;
      border-left: 1px solid #a9c9c7;
      border-radius: 0px 3px 3px 0px;
      margin: 5px 0;
      &:nth-child(odd){
        border-top: 2px solid #a9c9c7;
        border-bottom: 2px solid #a9c9c7;
        border-left: 2px solid #a9c9c7;
        border-right: 1px solid #a9c9c7;
        border-radius: 3px 0px 0px 3px;
      }

    }

    .errorPass {
      border-right: 2px solid red;
      border-top: 2px solid red;
      border-bottom: 2px solid red;
      border-left: 1px solid red;
      border-radius: 0px 3px 3px 0px;
      margin: 5px 0;
      &:nth-child(odd){
        border-top: 2px solid red;
        border-bottom: 2px solid red;
        border-left: 2px solid red;
        border-right: 1px solid red;
        border-radius: 3px 0px 0px 3px;
      }
    }

    .validPass {
      border-right: 2px solid #0be064;
      border-top: 2px solid #0be064;
      border-bottom: 2px solid #0be064;
      border-left: 1px solid #0be064;
      border-radius: 0px 3px 3px 0px;
      margin: 5px 0;
      &:nth-child(odd){
        border-top: 2px solid #0be064;
        border-bottom: 2px solid #0be064;
        border-left: 2px solid #0be064;
        border-right: 1px solid #0be064;
        border-radius: 3px 0px 0px 3px;
      }
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
  button {
    width: 150px;
    height: 30px;
    font-size: 15px;
    color: #fff;
    background: #4a08d1;
    border: 1px solid #4a08d1;
    border-radius: 2px;
  }

</style>
