<template>
  <div class="bottom">
    <div class="topcontent">
      <p class="top">
        {{ topText }}
      </p>
      <div class="infoWrapper">
        <p class="info">{{ mainText }}</p>
      </div>
    </div>
    <button class="tryNow">{{ btnText }}</button>
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
  @apply sm:self-end sm:-ml-12 sm:-mr-3 smlger:-ml-7 smlger:self-center smlger:-mr-3 smplus:-mr-0;
  max-width: 280px;

  & .topcontent{
    @apply -ml-2.5;
  }

  & .top {
    @apply uppercase text-2xl mb-2 -ml-0.5 tracking-tight w-1.3;
    @apply sm:text-left sm:font-medium sm:mt-6 smplus:text-3xl smplus:-ml-12 smplus:w-3/2;
    @apply lg:text-2xl lg:font-normal lg:tracking-wide;
    color: rgba(59, 102, 141, 1);
  }

  & .infoWrapper {
    & .info {
      color: rgba(59, 102, 141, 1);
      width: 120%;
      @apply font-normal mb-7 text-lg;
      @apply smplus:text-xl smplus:-ml-12;
      @apply lg:text-lg lg:font-light w-98;
    }
  }

  & .tryNow {
    @apply text-gray-50 bg-gradient-to-r from-blue-400 to-purple-500 w-64 h-16 rounded-full -mr-10 text-xl;
    @apply lg:-ml-14 lg:h-14 lg:text-base lg:w-56;
  }
}
</style>