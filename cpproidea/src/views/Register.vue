<template>
  <div class="register">
    <div class="bg">
      <WlcText
        v-for="(item, index) in WlcTextProps"
        :key="index"
        :main="item.main"
        :sub="item.sub"
      />
      <RegForm :arrOfInputs="registerProps" />
    </div>
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
      registerProps: [
        {
          text: "Email",
          input: {
            type: "email",
            placeholder: "mail@example.com",
          },
        },
        {
          text: "Re - Email",
          input: {
            type: "email",
            placeholder: "maomail@example.com",
          },
        },
        {
          text: "Password",
          input: {
            type: "password",
            placeholder: "•••••••••••",
          },
        },
        {
          text: "Re - Passwoed",
          input: {
            type: "password",
            placeholder: "•••••••••••",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  & .bg {
    @apply bg-no-repeat pb-1 mb-44;
    background-image: url("../assets/img/bg/bgLeft.png"),
      url("../assets/img/bg/bgRight.png");
    background-position: left -1.4rem, right -1.4rem;
    background-size: 0px;
    @apply lg:bg-4.5rem;
  }
}
</style>