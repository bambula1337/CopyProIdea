<template>
  <div class="register_form">
    <div class="inputs">
      <div class="inputWrp">
        <div class="pWrp">
          <p>Email</p>
        </div>
        <input type="email" placeholder="mail@example.com" />
      </div>
      <div class="inputWrp">
        <div class="pWrp">
          <p>Re - Email</p>
        </div>
        <input type="email" placeholder="maomail@example.com" />
      </div>
      <div class="inputWrp">
        <div class="pWrp">
          <p>Password</p>
        </div>
        <input type="password" placeholder="•••••••••••" />
      </div>
      <div class="inputWrp">
        <div class="pWrp">
          <p>Re - Password</p>
        </div>
        <input type="password" placeholder="•••••••••••" />
      </div>
    </div>
    <div class="captcha">
      <div class="pWrp">
        <p>Capcha</p>
      </div>
      <img src="@/assets/img/Register/captchatest.png" alt="" />
      <button>
        <img src="@/assets/img/Register/btnNewCaptcha.png" alt="" />
      </button>
      <input type="text" placeholder="enter capcha" />
    </div>
    <div class="btnWrapper">
      <div class="agree">
        <input type="checkbox" />
        <p>I agree with terms</p>
      </div>
      <button>
        <p>Register</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<style lang="scss" scoped>
.register_form {
  & input:focus {
    border: 3px solid #a855f7;
  }
  @apply flex items-center flex-col mt-10;
  & .inputs {
    & .inputWrp {
      @apply flex justify-between mb-4 -ml-28;
      & .pWrp {
        @apply flex items-center justify-end w-28 mr-7;
        & p {
          @apply justify-center text-blue-900;
        }
      }
      & input {
        @apply rounded-full text-left pl-8 h-14 w-104 transition-all duration-300 outline-none;
        background-color: rgba(243, 243, 243, 1);
      }
    }
  }
  & .captcha {
    @apply flex items-center justify-between;
    width: 28.7rem;
    & .pWrp {
      @apply -ml-13 mr-2.5;
      & p {
        @apply text-blue-900;
      }
    }
    & img {
      @apply w-38;
    }
    & button {
      @apply ml-0;
      & img {
        @apply w-7;
      }
    }
    & input {
      @apply rounded-full text-left pl-10 h-14 w-52 transition-all duration-300 outline-none;
      background-color: rgba(243, 243, 243, 1);
    }
  }

  & .btnWrapper {
    @apply flex items-center justify-between mt-10;
    width: 28.7rem;
    & .agree {
      @apply flex items-center ml-8;
      & input {
        @apply opacity-0 -mr-5 z-30;

        &+p::before {
          @apply inline-block w-4 h-4 rounded-full mr-2;
          content: " ";
          border: 2px solid rgba(139, 92, 246, var(--tw-border-opacity));
        }

        &:checked+p::before{
          @apply bg-purple-500;
        }
      }

      & p {
        @apply text-gray-500 ml-1.5 flex items-center;
      }
    }
    & button {
      @apply text-gray-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full h-12 tracking-wide w-60;

      & p {
      }
    }
  }
}
</style>