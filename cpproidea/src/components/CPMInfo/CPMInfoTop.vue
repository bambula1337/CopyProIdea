<template>
  <div class="top sm:mt-6">
    <p class="topText sm:text-center sm:text-6xl smlger:text-7xl">{{welcomeTxt1}}<br>{{welcomeTxt2}}</p>
    <p class="bottomText sm:ml-1.5 sm:text-center sm:-mt-1 sm:tracking-px6 smlger:tracking-px10 smlger:ml-2">{{underWelcomeTxt}}</p>
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


    & .topText, .bottomText{
      color: rgba(59, 102, 141, 1);
    }

    & .topText{
      @apply font-bold uppercase mb-3;

      }
    & .bottomText{
      @apply uppercase text-2xl;
    }
  }
</style>