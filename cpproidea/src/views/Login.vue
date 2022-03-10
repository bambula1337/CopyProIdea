<template>
  <div class="login-page">
    <div class="bg">
      <WlcText
        v-for="(item, index) in WlcTextProps"
        :key="index"
        :main="item.main"
        :sub="item.sub"
      />
      <LogForm :inputsProps="loginProps.forInputs" />
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
import LogForm from "@/components/LoginForm.vue";
import Counter from "@/components/CPCounter/CPCounerMain.vue";

export default {
  name: "LoginPage",
  components: {
    WlcText,
    LogForm,
    Counter,
  },
  data() {
    return {
      WlcTextProps: [
        {
          id: 1,
          main: "Login",
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
      loginProps: {
        forInputs: [
          {
            text: "Email",
            input: {
              type: "email",
              placeholder: "mail@example.com",
            },
          },
          {
            text: "Password",
            input: {
              type: "password",
              placeholder: "•••••••••••",
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  & .bg {
    @apply bg-no-repeat pb-48 mb-38;
    background-image: url("../assets/img/bg/bgLeft.png"),
      url("../assets/img/bg/bgRight.png");
    background-position: left -1.4rem, right -1.4rem;
    background-size: 0px;
    @apply lg:bg-4.5rem;
  }
}
</style>