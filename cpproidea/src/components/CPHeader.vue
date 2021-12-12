<template>
  <header class="header">
    <p>Its header component</p>
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
  @apply flex justify-center items-center bg-green-600 h-10 flex-col;

  & .navigation {
    & .nav-link-default {
      @apply mx-2 text-purple-50;
      &.active{
        @apply text-purple-900;
      }
    }
  }
}
</style>