<template>
  <div class="TextPage">
    <div class="bg">
      <WlcTxt :main="WlcTxtProps.main" :sub="WlcTxtProps.sub" />
      <TextComponent />
    </div>
    <Counter />
  </div>
</template>

<script>
import WlcTxt from "@/components/WlcText.vue";
import TextComponent from "@/components/TextPageComponent.vue";
import Counter from '@/components/CPCounter/CPCounerMain.vue'

export default {
  name: "TextPage",
  components: {
    WlcTxt,
    TextComponent,
    Counter,
  },
  data() {
    return {
      WlcTxtProps: {
        main: "Text Page",
        sub: "Online storage",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.TextPage {
  & .bg {
    @apply bg-no-repeat mb-16;
    background-image: url("../assets/img/bg/bgLeft.png"),
      url("../assets/img/bg/bgRight.png");
    background-position: left -1.4rem, right -1.4rem;
    background-size: 0px;
    @apply lg:bg-4.5rem;
  }
}
</style>