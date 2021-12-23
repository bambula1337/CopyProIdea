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


    & .topText, .bottomText{
      color: rgba(59, 102, 141, 1);
    }

    & .topText{
      @apply text-6xl font-bold uppercase mb-3;

      }
    & .bottomText{
      @apply uppercase font-thin text-2xl mt-3;
      letter-spacing: 19px;
    }
  }
</style>