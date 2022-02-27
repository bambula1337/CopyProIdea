<template>
  <div class="faqpage">
    <div class="bg">
      <WlcText
        v-for="(item, index) in WlcTextprops"
        :key="index"
        :main="item.main"
        :sub="item.sub"
      />
      <FAQComponent />
    </div>
    <CPCounter
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
import WlcText from "@/components/WlcText.vue";
import FAQComponent from "@/components/FAQ.vue";
import CPCounter from "@/components/CPCounter/CPCounerMain.vue";

export default {
  name: "FAQ",
  components: {
    WlcText,
    FAQComponent,
    CPCounter,
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
          main: "FAQ",
          sub: "Online Storage",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.faqpage{
  .bg{
    @apply bg-no-repeat;
    background-image: url("../assets/img/bg/bgLeft.png"),
                      url("../assets/img/bg/bgRight.png");
    background-position: left -1.4rem, right -1.4rem;
    background-size: 0px;
    @apply lgplus:bg-4.5rem;
  }
}
</style>