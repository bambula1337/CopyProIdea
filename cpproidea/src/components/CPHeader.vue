<template>
  <header class="header" @click="scrollerFunc">
    <router-link
          to="/"
          class="nav-link-default"
          :active-class="'active'"
          exact
          ><p class="logo link">Skybox</p></router-link
        >
    <div class="navigation">
      <div class="links">
        <router-link
          to="/"
          class="nav-link-default link"
          :active-class="'active'"
          exact
          >Home</router-link
        >
        <router-link
          to="/pricing"
          class="nav-link-default link"
          :active-class="'active'"
          >Pricing</router-link
        >
        <router-link
          to="/contact"
          class="nav-link-default link"
          :active-class="'active'"
          >Contact</router-link
        >
      </div>
      <div class="login">
        <router-link
          to="/login"
          class="login-link link"
          :active-class="'active'"
          exact
          >Login</router-link
        >
        <router-link
          to="/register"
          class="sign-up-link"
          :active-class="'active'"
          ><button class="link">Sign Up</button></router-link
        >
      </div>
      <div class="mobilemenu" :class="{ 'lgplus:hidden': !menuIsOpened }">
        <div class="iconwrapper" :class="{'isOpenedForicon': isOpenedMenu}">
          <span :class="[isOpenedMenu ? 'iconOpened' : 'icon']"></span>
        </div>
        <input type="checkbox"  v-model="isOpenedMenu" :class="{'isOpened': isOpenedMenu, 'inputOpened': isOpenedMenu}"/>
      </div>
      <div class="menu" :class="{'menuIsOpenedStyle': isOpenedMenu}">
        <div class="linksmobile">
          <router-link
            to="/"
            class="linkmobile link"
            :active-class="'mobileactive'"
            exact
            >Home</router-link
          >
          <router-link
            to="/pricing"
            class="linkmobile link"
            :active-class="'mobileactive'"
            >Pricing</router-link
          >
          <router-link
            to="/contact"
            class="linkmobile link"
            :active-class="'mobileactive'"
            >Contact</router-link
          >
        </div>
        <div class="btnsmobile">
          <router-link
            to="/login"
            class="loginmobile link"
            :active-class="'active'"
            exact
            >Login</router-link
          >
          <router-link to="/register" class="btnmobile" :active-class="'active'"
            ><button class="link">Sign Up</button></router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "CPHeader",
  methods: {
    scrollerFunc: function(event){
      if(event.target.matches(".link")){
        window.scrollTo(0, 0)
      }
    }
  },
  data() {
    return {
      isOpenedMenu: false,
    };
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
      @apply mx-12 text-purple-50 tracking-wider transition-all duration-500 flex flex-col items-center;
      &.active {
        @apply text-blue-200;

        &::after {
          content: " ";
          @apply flex w-full h-0 bg-blue-200 -mt-1;
          border: 1px rgba(191, 219, 254, var(--tw-bg-opacity)) solid;
        }
      }

      &::after {
        content: " ";
        @apply flex w-0 h-0 bg-blue-200 -mt-1  transition-all duration-700;
        border: 0px rgba(191, 219, 254, var(--tw-bg-opacity)) solid;
      }
    }
    & .login {
      @apply text-gray-50;
      @apply sm:hidden;
      @apply lgplus:flex;

      & .login-link {
        @apply mr-16 uppercase tracking-widest transition-all duration-500 flex flex-col items-center;
        @apply lgplus:mt-2;

        &.active {
          @apply text-blue-200;

          &::after {
            content: " ";
            @apply flex w-full h-0 bg-blue-200 -mt-1;
            border: 1px rgba(191, 219, 254, var(--tw-bg-opacity)) solid;
          }
        }

        &::after {
          content: " ";
          @apply flex w-0 h-0 bg-blue-200 -mt-1  transition-all duration-500;
          border: 0px rgba(191, 219, 254, var(--tw-bg-opacity)) solid;
        }
      }

      & .sign-up-link {
        & button {
          @apply uppercase bg-gray-50 text-purple-700 rounded-full w-28 h-9 text-xs tracking-widest transition-all duration-500;

          &:hover {
            @apply bg-blue-400 text-blue-50;
          }
        }

        &.active {
          & button {
            @apply text-gray-50;
            background-color: rgba(59, 170, 246, var(--tw-bg-opacity));

            &:hover {
              background-color: rgba(59, 170, 246, var(--tw-bg-opacity));
            }
          }
        }
      }
    }
    & .mobilemenu {
      @apply smlger:ml-24 z-30 absolute top-0.5;
      right: 10%;
      & input {
        @apply relative opacity-0 w-10 h-8 mt-4 -ml-9;

        &:checked {
          @apply mt-4;
        }
      }

      & .iconwrapper {
        @apply absolute top-8;
      }

      & .icon {
        content: "";
        position: absolute;
        top: calc(50% - 1px);
        right: 0%;
        width: 2rem;
        border-bottom: 2px solid rgb(255, 255, 255);
        transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);

        &::after,
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0%;
          width: 2rem;
          border-bottom: 2px solid rgb(255, 255, 255);
          transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        &::after {
          transform: translateY(-8px);
        }

        &::before {
          transform: translateY(8px);
        }
      }
    }
    & .menu {
      @apply fixed -top-0 z-20 flex-col flex justify-between overflow-x-auto rounded-l-3xl transition-all duration-700 w-44;
      @apply smplus:w-52;
      @apply lgplus:hidden;
      height: 100vh;
      right: -55%;
      background: linear-gradient(285deg,  #495ea1, #bb32ff, #3352a7);
      background-size: 240% 240%;
      animation: gradient-animation 5s ease infinite;

      & .linksmobile {
        @apply flex w-full flex-col items-center mt-56;
        @apply smplus:mt-36;
        & .linkmobile {
          @apply text-blue-50 text-2xl mb-10 transition-all duration-700 flex flex-col items-center;
          @apply smplus:text-3xl;
          &:after {
            @apply w-0 transition-all;
            transition-duration: 800ms;
            content: "";
            border-bottom: 3px rgba(167, 139, 250, var(--tw-text-opacity)) solid;
          }
          &.mobileactive {
            @apply text-purple-400;

            &:after {
              @apply w-full;
            }
          }
        }
      }

      & .btnsmobile {
        @apply flex w-full flex-col items-center;
        & .loginmobile {
          @apply text-2xl text-purple-100 mb-3 transition-all duration-700 flex flex-col items-center;
          @apply smplus:text-3xl;
          &:after {
            @apply w-0 transition-all;
            transition-duration: 800ms;
            content: "";
            border-bottom: 3px rgba(167, 139, 250, var(--tw-text-opacity)) solid;
          }
          &.active {
            @apply text-purple-400;
            &:after {
              @apply w-full;
            }
          }
        }

        & .btnmobile {
          @apply text-2xl text-purple-500 bg-blue-50 rounded-full w-32 text-center h-10 justify-center flex mb-8;
          @apply smplus:text-3xl smplus:w-44 smplus:h-14 transition-all duration-700;

          &.active {
            @apply bg-purple-500 text-blue-50;
          }
        }
      }
    }
  }
}

.isOpened {
  @apply right-4;
  position: fixed !important;
}

.isOpenedForicon {
  @apply right-12;
  margin-top: 0.9rem;
  position: fixed !important;
}

.iconOpened {
  @apply lgplus:hidden;
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  right: 0%;
  width: 2rem;
  border-bottom: 2px solid rgb(255, 255, 255);
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 0rem;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0%;
    width: 2rem;
    border-bottom: 2px solid rgb(255, 255, 255);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &::after {
    transform: translateY(-8px);
    transform: rotate(45deg);
  }

  &::before {
    transform: translateY(8px);
    transform: rotate(-45deg);
  }
}

.inputOpened {
  margin-left: -1rem !important;
}
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.menuIsOpenedStyle{
  right: 0% !important;
}
</style>