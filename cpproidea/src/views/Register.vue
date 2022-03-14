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
    <Counter />
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
          text: "Re - Password",
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