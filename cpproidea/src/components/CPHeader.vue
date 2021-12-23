<template>
  <header class="header">
    <div class="navigation">
      <router-link to="/" class="nav-link-default" :active-class="'active'" exact>Home</router-link
      >
      <router-link to="/about" class="nav-link-default" :active-class="'active'"
        >About</router-link
      >
      <router-link
        to="/default"
        class="nav-link-default"
        :active-class="'active'"
        >Default</router-link
      >
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
  @apply flex justify-center items-center bg-transparent h-16 flex-col absolute top-0 left-0 z-10 w-full;
  & p{
    @apply text-purple-900 mb-3;
  }
  & .navigation {
    & .nav-link-default {
      @apply mx-2 self-center text-purple-50;
      &.active{
        @apply text-purple-900;
      }
    }
  }
}
</style>