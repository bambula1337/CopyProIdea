<template>
  <div class="top">
    <p class="topText">{{welcomeTxt1}}<br>{{welcomeTxt2}}</p>
    <p class="bottomText">{{underWelcomeTxt}}</p>
  </div>
</template>

<script>
export default {
  name: "CPMInfoTopComponent",
  props: ["welcomeTxt1", "welcomeTxt2", "underWelcomeTxt"],
}
</script>

<style lang="scss" scoped>
  .top{

    @apply flex flex-col;
    @apply sm:mt-6;
    @apply lg:ml-5;


    & .topText, .bottomText{
      color: rgba(59, 102, 141, 1);
    }

    & .topText{
      @apply font-bold uppercase mb-3;
      @apply sm:text-center sm:text-6xl smlger:text-7xl smplus:text-7.5xl smplus:tracking-widest;
      @apply lg:text-6xl lg:text-left lg:tracking-normal lg:ml-2;

      }
    & .bottomText{
      @apply uppercase text-2xl;
      @apply sm:ml-1.5 sm:text-center sm:-mt-1 sm:tracking-px6 smlger:tracking-px10 smlger:ml-2 smplus:tracking-rem101;
      @apply lg:font-light lg:mt-3 tracking-widestplus;
    }
  }
</style>