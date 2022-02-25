<template>
  <div class="register">
    <WlcText
      v-for="(item, index) in WlcTextProps"
      :key="index"
      :main="item.main"
      :sub="item.sub"
    />
    <RegForm />
    <Counter
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
import RegForm from "@/components/RegisterForm.vue";
import Counter from "@/components/CPCounter/CPCounerMain.vue";

export default {
  name: "Register",
  components: {
    WlcText,
    RegForm,
    Counter,
  },
  data() {
    return {
      WlcTextProps: [
        {
          id: 1,
          main: "Register",
          sub: "Online storage",
        },
      ],
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
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
}
</style>