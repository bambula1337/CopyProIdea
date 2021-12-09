<template>
  <header class="header">
    <p>Its header component</p>
  </header>
</template>

<script>
export default {
  name: "CPHeader",
};
</script>

<style lang="scss" scoped>
.header{
    @apply flex justify-center items-center bg-green-600 h-10;
  }
</style>