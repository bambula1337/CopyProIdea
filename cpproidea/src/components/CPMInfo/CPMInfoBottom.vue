<template>
  <div class="bottom sm:self-end sm:-ml-12 smlger:-ml-7 smlger:self-center">
    <div class="topcontent">
      <p class="top sm:text-left sm:font-medium sm:mt-6 sm:ml-1 tracking-tight">
        {{ topText }}
      </p>
      <div class="infoWrapper">
        <p class="info">{{ mainText }}</p>
      </div>
    </div>
    <button class="tryNow text-xl">{{ btnText }}</button>
  </div>
</template>

<script>
export default {
  name: "CPMInfoBottomComponent",
  props: ["topText", "mainText", "btnText"],
};
</script>

<style lang="scss" scoped>
.bottom {
  @apply flex flex-col;
  max-width: 280px;

  & .topcontent{
    @apply -ml-2.5;
  }

  & .top {
    @apply uppercase text-2xl mb-2 -ml-0.5;
    color: rgba(59, 102, 141, 1);
    width: 130%;
  }

  & .infoWrapper {
    & .info {
      @apply font-normal mb-7 text-lg;
      color: rgba(59, 102, 141, 1);
      width: 120%;
    }
  }

  & .tryNow {
    @apply text-gray-50 bg-gradient-to-r from-blue-400 to-purple-500 w-64 h-16 rounded-full -mr-10;
  }
}
</style>