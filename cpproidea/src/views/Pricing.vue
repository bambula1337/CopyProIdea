<template>
  <div class="pricing">
    <div class="wlcTxt">
      <div class="default">
        <WlcText
          v-for="(item, index) in WlcTextprops"
          :key="index"
          :main="item.main"
          :sub="item.sub"
        />
      </div>
      <div class="mobile">
        <WlcText
          v-for="(item, index) in WlcTextpropsmobile"
          :key="index"
          :main="item.main"
          :sub="item.sub"
        />
      </div>
    </div>
    <div class="cards">
      <CPCards />
    </div>
    <CPCount
      v-for="(item, index) in counter"
      :key="index"
      :count="item.datacount"
      :textcount="item.datatextcount"
      :count2="item.datacount2"
      :textcount2="item.datatextcount2"
      :icon="item.dataicon"
      :icon2="item.dataicon2"
    />
  </div>
</template>

<script>
import CPCount from "@/components/CPCounter/CPCounerMain.vue";
import WlcText from "@/components/WlcText.vue";
import CPCards from "@/components/CPCards/CPCards.vue";

export default {
  name: "Pricing",
  components: {
    CPCount,
    WlcText,
    CPCards,
  },
  data() {
    return {
      counter: [
        {
          id: 1,
          datacount: "999529 000 000",
          datatextcount: "Загружено файлов на сервис",
          datacount2: "235 764 784",
          datatextcount2: "Зарегистрировано пользователей",
          dataicon: "download.png",
          dataicon2: "adduser.png",
        },
      ],
      WlcTextprops: [
        {
          id: 1,
          main: "Tariff Plans",
          sub: "Online Storage",
        },
      ],
      WlcTextpropsmobile: [
        {
          id: 1,
          main: "Price",
          sub: "Online Storage",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.pricing {
  & .wlcTxt{
    & .default{
      @apply hidden;
      @apply lg:block;
    }
    & .mobile{
      @apply lg:hidden;
    }
  }
  & .cards {
    @apply mt-24;
  }
}
</style>