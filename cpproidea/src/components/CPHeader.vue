<template>
  <header class="header">
    <p class="logo">Skybox</p>
    <div class="navigation">
      <div class="links">
        <router-link to="/" class="nav-link-default" :active-class="'active'" exact>Home</router-link>
        <router-link to="/pricing" class="nav-link-default" :active-class="'active'">Pricing</router-link>
        <router-link to="/contact" class="nav-link-default" :active-class="'active'">Contact</router-link>
      </div>
      <div class="login">
        <router-link to="/login" class="login-link" :active-class="'active'" exact>Login</router-link>
        <router-link to="/signup" class="sign-up-link" :active-class="'active'"><button>Sign Up</button></router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "CPHeader",
};
</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-around items-center bg-transparent h-16 absolute top-0 left-0 z-10 w-full mt-3;

  & .logo{
    @apply text-3xl uppercase text-gray-50 font-light tracking-widest -mr-20;
  }

  & .navigation {
    @apply flex;

    & .links{
      @apply mr-44;
    }
    & .nav-link-default {
      @apply mx-12 text-purple-50 tracking-wider;
      &.active{
        @apply text-purple-50;
      }
    }
    & .login{
      @apply text-gray-50;

      & .login-link{
        @apply mr-16 uppercase tracking-widest;
      }

      & .sign-up-link{
        & button{
          @apply uppercase bg-gray-50 text-purple-700 rounded-full w-28 h-9 text-xs tracking-widest;
        }
      }
    }
  }
}
</style>