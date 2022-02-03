<template>
  <header class="header">
    <p class="logo">Skybox</p>
    <div class="navigation">
      <div class="links">
        <router-link
          to="/"
          class="nav-link-default"
          :active-class="'active'"
          exact
          >Home</router-link
        >
        <router-link
          to="/pricing"
          class="nav-link-default"
          :active-class="'active'"
          >Pricing</router-link
        >
        <router-link
          to="/contact"
          class="nav-link-default"
          :active-class="'active'"
          >Contact</router-link
        >
      </div>
      <div class="login">
        <router-link
          to="/login"
          class="login-link"
          :active-class="'active'"
          exact
          >Login</router-link
        >
        <router-link to="/signup" class="sign-up-link" :active-class="'active'"
          ><button>Sign Up</button></router-link
        >
      </div>
      <div class="mobilemenu" @click="Toggle">
        <img src="../assets/img/header/MENU.png" alt="" />
      </div>
      <div class="menu">
        <div class="linksmobile">
          <router-link to="/" class="linkmobile" :active-class="'mobileactive'" exact>Home</router-link>
          <router-link to="/pricing" class="linkmobile" :active-class="'mobileactive'">Pricing</router-link>
          <router-link to="/contact" class="linkmobile" :active-class="'mobileactive'">Contact</router-link>
        </div>
        <div class="btnsmobile">
          <router-link to="/login" class="loginmobile" :active-class="''" exact>Login</router-link>
          <router-link to="/signup" class="btnmobile" :active-class="''"><button>Sign Up</button></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "CPHeader",
  methods: {
    Toggle: function () {
      const menu = document.querySelector(".menu");

      if (menu.style.display == "none") {
        menu.style.display = "flex";
        document.body.style.overflow = "hidden";
        window.scroll(0, 0);
      } else {
        menu.style.display = "none";
        document.body.style.overflow = "visible";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-around items-center bg-transparent h-16 absolute top-0 left-0 z-10 w-full mt-3;

  & .logo {
    @apply uppercase text-gray-50 tracking-widest z-30;
    @apply sm:text-4xl sm:font-normal smlger:-ml-4;
    @apply lgplus:ml-3;
    @apply xl:-ml-10;
  }

  & .navigation {
    @apply flex;
    @apply lgplus:mt-2;

    & .links {
      @apply mr-44;
      @apply sm:hidden;
      @apply lgplus:flex lgplus:mt-2;
    }
    & .nav-link-default {
      @apply mx-12 text-purple-50 tracking-wider;
      &.active {
        @apply text-purple-50;
      }
    }
    & .login {
      @apply text-gray-50;
      @apply sm:hidden;
      @apply lgplus:flex;

      & .login-link {
        @apply mr-16 uppercase tracking-widest;
        @apply lgplus:mt-2;
      }

      & .sign-up-link {
        & button {
          @apply uppercase bg-gray-50 text-purple-700 rounded-full w-28 h-9 text-xs tracking-widest;
        }
      }
    }
    & .mobilemenu {
      @apply smlger:ml-24 z-30;
      @apply lgplus:hidden;
    }
    & .menu {
      @apply bg-gradient-to-r from-indigo-400 to-indigo-500 absolute left-0 -top-3 z-20 hidden flex-col justify-between overflow-x-auto;
      @apply lgplus:hidden;
      width: 100vw;
      height: 100vh;

      & .linksmobile{
        @apply flex w-full flex-col items-center self-center pt-3/5;
        @apply smlger:pt-40proc;
        & .linkmobile{
          @apply text-blue-50 text-3xl mb-10;
          @apply md:text-5xl md:mb-20;
          &.mobileactive{
            @apply text-purple-200 underline;
          }
        }
      }

      & .btnsmobile{
        @apply flex w-full flex-col items-center;
        & .loginmobile{
          @apply text-3xl text-purple-100 mb-10;
          @apply md:text-5xl;
        }

        & .btnmobile{
          @apply text-3xl text-purple-400 bg-blue-50 rounded-full w-40 text-center h-14 justify-center flex mb-10proc;
          @apply md:text-5xl md:w-60 md:h-20;
        }
      }
    }
  }
}
</style>