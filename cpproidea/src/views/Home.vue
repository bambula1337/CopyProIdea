<template>
  <div class="home">
    <div class="section-one-bg">
      <CPMInfo />
    </div>
    <CPCardsMain />
    <CPCount v-for="(item, index) in counter"
             :key="index"
             :count="item.datacount"
             :textcount="item.datatextcount"
             :count2="item.datacount2"
             :textcount2="item.datatextcount2"
             :icon="item.dataicon"
             :icon2="item.dataicon2"/>
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
  data(){
    return{
      counter:[
        {
          id: 1,
          datacount: "999529 000 000",
          datatextcount: "Загружено файлов на сервис",
          datacount2: "235 764 784",
          datatextcount2: "Зарегистрировано пользователей",
          dataicon: "download.png",
          dataicon2: "adduser.png",
        }
      ]
    }
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  @apply flex flex-col justify-center relative min-h-screen;
}
.section-one-bg {
  background-image: url("../assets/img/BG.png");
  background-size: 100% 100%;
  @apply bg-no-repeat h-full;
}
</style>
