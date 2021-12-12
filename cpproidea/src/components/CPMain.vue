<template>
  <section class="main">
    <p>It's main component</p>
    <CPCardsMain/>
  </section>
</template>

<script>
import CPCardsMain from "@/components/CPCards/CPCardsMain.vue";

export default {
  name: "CPMain",
  components: {
    CPCardsMain,
  },
};
</script>

<style lang="scss" scoped>
.main{
  @apply flex flex-col justify-center;
}
</style>