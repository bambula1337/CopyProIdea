<template>
  <div class="wrapper">
    <div class="wlcTxtBox">
      <p class="MnTxt">{{ maintxt }}</p>
      <div class="bgTxtBox sm:text-2xl">
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
      @apply text-5xl uppercase text-center tracking-widest mb-5 mt-20;
      color: rgba(59, 102, 141, 1);
    }
    & .bgTxtBox{
      & .bgTxt{
        @apply text-gray-500 text-center mb-2;
      }
    }
  }
}
</style>