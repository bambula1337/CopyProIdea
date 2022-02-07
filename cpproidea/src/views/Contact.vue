<template>
  <div class="contact">
    <p>qq</p>
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

export default {
  components: {
    CPCount,
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
    };
  },
};
</script>

<style lang="scss" scoped>
.contact{
  @apply pt-0;
}
</style>