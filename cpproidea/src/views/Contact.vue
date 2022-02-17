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