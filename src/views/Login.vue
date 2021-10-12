<template>
  <div class="login">
    <h2>Welcome back. log in here.</h2>
    <form action="#">
      <input type="username" :class="colorNickname" @keyup="validName" v-model="fullname" placeholder="Enter your username" >
      <transition name="nickname">
        <p v-if="showNickError">Username must be alphanumeric and contains 5-12 characters</p>
      </transition>
      <input type="password" :class="colorPassword" @keyup="validPassword" v-model="password" placeholder="Enter your password" >
      <transition name="password">
        <p v-if="showPassError">Password must be alphanumeric (@ , _ and are also allowed) and be 8-20 characters</p>
      </transition>
    </form>
    <button>Log In</button>
  </div>
</template>

<script lang="ts">

  import validation from '../objects/validation';
  import {defineComponent} from 'vue';

  export default defineComponent({

    data: () => ({
      fullname: '',
      password: '',

      showPassError: false,
      showNickError: false,

      userError: false,
      passwordError: false,
    }),
    methods: {
      validName() {
         let isValid = validation.nickname.test(this.fullname);

         this.userError = !isValid;
         this.showNickError = !isValid;

         setTimeout(()=> {
          this.showNickError = false;
         },3000)
      },
      validPassword() {
        let isValid = validation.password.test(this.fullname);

         this.passwordError = !isValid;
         this.showPassError = !isValid;

         setTimeout(()=> {
          this.showPassError = false;
         },3000)


      }
    },
    computed: {
       colorNickname() {
        if (this.fullname === "") {
          return;
        }
        if (this.userError) {
          return "errorInput";
        }
        else
            return "validInput";
      },
      colorPassword() {
        if (this.password === "") {
          return;
        }
        if (this.userError) {
          return "errorInput";
        }
        else
            return "validInput";
      }
    }
  }
  )
</script>

<style lang="scss" scoped>
  .login {
    form{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
      margin: 20px auto;
    }
    input {
      padding: 4px 6px;
      width: 400px;
      height: 30px;
      margin: 5px 0;
      border: 2px solid #a9c9c7;
      border-radius: 3px;
    }
    p {
      font-size: 10px;
      color: red;
    }
    .validInput {
      border: 2px solid #0be064;
    }
    .errorInput {
      border: 2px solid red;
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
  }

  // .nickname-enter-from { opacity: 0;}
  // .nickname-enter-to { opacity: 1;}
  .nickname-enter-active { animation: wobble 0.5s ease;}
  .nickname-leave-from {opacity: 1;}
  // .nickname-leave-to {opacity: 0;}
  .nickname-leave-active {transition: all 2s ease;}

  .password-enter-from { opacity: 0;}
  // .password-enter-to { opacity: 1;}
  .password-enter-active { transition: all 2s ease;}
  .password-leave-from {opacity: 1;}
  // .password-leave-to {opacity: 0;}
  .password-leave-active {transition: all 2s ease;}

  @keyframes wobble {
    0% {opacity: 0;}
    50%{ opacity: 1;}
    60% {transform: translateX(5px);}
    70% {transform: translateX(-5px);}
    80% {transform: translateX(2px);}
    90% {transform: translateX(-2px);}
    100% {transform: translateX(0px);}
  }

</style>
