<template>
  <div class="wrapper">
    <div class="default">
      <p>It's default layout</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style lang="scss" scoped>
.default {
  @apply bg-gray-400 flex justify-center items-center flex-col;
  height: 100vh;
  & {
    p {
      @apply text-center;
    }
  }
}
.wrapper{
  @apply flex flex-col;
}
</style>