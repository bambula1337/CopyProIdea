<template>
  <div class="home">
    <div class="section-one-bg">
      <CPMInfo />
    </div>
    <CPCardsMain />
    <CPCount />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CPCardsMain from "@/components/CPCards/CPCardsMain.vue";
import CPMInfo from "@/components/CPMInfo/CPMInfoMain.vue";
import CPCount from "@/components/CPCounter/CPCounerMain.vue";

@Component({
  components: {
    CPCardsMain,
    CPMInfo,
    CPCount,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  @apply flex flex-col justify-center relative min-h-screen;
}
.section-one-bg {
  background-image: url("../assets/img/BG.png");
  background-size: 400% 70%;
  @apply bg-no-repeat;
  @apply sm:bg-homebgsm;
  @apply lg:bg-top lg:bg-full;
}
</style>
