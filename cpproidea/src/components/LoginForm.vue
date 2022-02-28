<template>
  <div class="login_form">
    <div class="inputs">
      <div class="inputWrp">
        <div class="pWrp">
          <p>Email</p>
        </div>
        <input type="email" placeholder="mail@example.com" />
      </div>
      <div class="inputWrp">
        <div class="pWrp">
          <p>Password</p>
        </div>
        <input type="password" placeholder="•••••••••••" />
      </div>
    </div>
    <div class="btnWrapper">
      <div class="ResetPassword">
        <p>Forget Password</p>
      </div>
      <button>
        <p>Login</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style lang="scss" scoped>
.login_form {
  & input:focus {
    border: 3px solid #a855f7;
  }
  @apply flex items-center flex-col mt-10 mb-10;
  & .inputs {
    & .inputWrp {
      @apply flex justify-between mb-4;
      @apply md:-ml-32;
      
      @apply lg:-ml-34;
      & .pWrp {
        @apply hidden items-center justify-end w-28 mr-7;
        @apply md:flex;
        & p {
          @apply justify-center text-blue-900;
        }
      }
      & input {
        @apply rounded-full text-left pl-8 h-14 w-72 transition-all duration-300 outline-none;
        @apply smlger:w-84 smlger:-ml-3;
        @apply lg:w-104 lg:m-0;
        background-color: rgba(243, 243, 243, 1);
      }
    }
  }


  & .btnWrapper {
    @apply flex items-center w-56 flex-col-reverse justify-between mt-10;
    @apply lg:w-28.7rem;
    & .ResetPassword {
      @apply flex items-center mb-2 mt-2;

      & p {
        @apply text-gray-400 flex items-center transition-all duration-700;

        &:hover{
          @apply text-gray-700 cursor-pointer;
        }
      }
    }
    & button {
      @apply text-gray-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full h-14 tracking-wide w-64 text-xl -mt-4;
      @apply smplus:w-72 smplus:h-16;
      @apply lg:h-13 lg:w-60 lg:text-base;

      & p {
        @apply flex items-center flex-col;
        &::after {
          content: " ";
          @apply flex w-0 h-0 bg-blue-200 transition-all duration-700;
          border: 0px rgba(191, 219, 254, var(--tw-bg-opacity)) solid;
        }
      }
      &:hover {
        p {
          @apply -mb-0.5;
          &::after {
            content: " ";
            @apply flex w-1/5;
            border: 0.5px rgba(191, 219, 254, var(--tw-bg-opacity)) solid;
          }
        }
      }
    }
  }
}
</style>