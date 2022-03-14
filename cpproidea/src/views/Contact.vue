<template>
  <div class="contact">
    <WlcText
      v-for="(item, index) in WlcTextprops"
      :key="index"
      :main="item.main"
      :sub="item.sub"
    />
    <div class="mapwrapper">
      <img src="@/assets/img/contact/MAP.png" class="map" alt="map" />
    </div>
    <Form />
    <CPCount />
  </div>
</template>

<script>
import CPCount from "@/components/CPCounter/CPCounerMain.vue";
import WlcText from "@/components/WlcText.vue";
import Form from "@/components/Form.vue";

export default {
  name: "Contact",
  components: {
    CPCount,
    WlcText,
    Form,
  },
  data() {
    return {
      WlcTextprops: [
        {
          id: 1,
          main: "Contact",
          sub: "Online Storage",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  @apply pt-0;
  & .mapwrapper {
    @apply overflow-x-hidden;
    & .map {
      @apply mt-14 overflow-hidden;
      max-width: 1920px;
    }
  }
}
</style>