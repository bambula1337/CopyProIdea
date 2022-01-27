<template>
  <div class="wrapper">
    <div class="wlcTxtBox">
      <p class="MnTxt">{{ maintxt }}</p>
      <div class="bgTxtBox">
        <p class="bgTxt">{{ bgtxt1 }}</p>
        <p class="bgTxt">{{ bgtxt2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPWlcTxtComponent",
  props: ["maintxt", "bgtxt1", "bgtxt2"],
};
</script>

<style lang="scss" scoped>
.wrapper {
  & .wlcTxtBox {
    & .MnTxt {
      @apply  uppercase text-center tracking-widest mb-5 mt-20;
      @apply sm:text-5xl smlger:text-6xl smlger:font-medium;
      @apply lg:text-5xl lg:font-normal;
      color: rgba(59, 102, 141, 1);
    }
    & .bgTxtBox{
      @apply sm:text-2xl smlger:text-2xl;
      @apply lg:text-sm;
      & .bgTxt{
        @apply text-gray-500 text-center mb-2;
      }
    }
  }
}
</style>