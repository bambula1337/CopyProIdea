<template>
  <div class="textWrapper">
    <p class="mainText">{{ main }}</p>
    <p class="subText">{{ sub }}</p>
  </div>
</template>

<script>
export default {
  name: "WlcText",
  props: ["main", "sub"],
};
</script>

<style lang="scss" scoped>
.textWrapper {
  @apply flex flex-col items-center justify-center uppercase;
  color: rgba(59, 102, 141, 1);
  & .mainText {
    @apply text-6xl font-bold;
    @apply smlger:tracking-rem101;
  }
  & .subText {
    @apply font-thin tracking-px10 mt-3;
    @apply smlger:tracking-rem101 smplus:text-xl;
  }
}
</style>