<template>
  <section class="test">
    <p>It's main component</p>
  </section>
</template>

<script>
export default {
  name: "CPMain",
  components: {},
};
</script>

<style lang="scss" scoped>
.test {
  @apply flex justify-center items-center bg-gray-400;
  height: 100vh;
}
</style>