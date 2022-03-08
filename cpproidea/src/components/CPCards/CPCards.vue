<template>
  <div class="allCards">
    <CPCardComponent
      v-for="(item, index) in card"
      :key="index"
      :popular="item.popular"
      :days="item.days"
      :price="item.price"
      :btn="item.btn"
      :mback="item.mback"
      :bgImg="item.bgImg"
      :abilities="item.abilities"
    />
  </div>
</template>

<script>
import CPCardComponent from "@/components/CPCards/CPCard.vue";

export default {
  name: "CPCards",
  components: {
    CPCardComponent,
  },
  data() {
    return {
      card: [
        {
          id: 1,
          popular: false,
          days: "30",
          price: "$20.99",
          btn: true,
          mback: "14-day money back guarantee",
          bgImg: "1.png",
          abilities: [
            {
              text: "1 Tb Free space",
              ability: true,
            },
            {
              text: "4 Tb Monthly space",
              ability: true,
            },
            {
              text: "100 Mbit Speed",
              ability: true,
            },
            {
              text: "3000 sessions",
              ability: true,
            },
          ],
        },
        {
          id: 2,
          popular: true,
          days: "90",
          price: "$46.99",
          btn: true,
          mback: "14-day money back guarantee",
          bgImg: "2.png",
          abilities: [
            {
              text: "1 Tb Free space",
              ability: true,
            },
            {
              text: "4 Tb Monthly space",
              ability: true,
            },
            {
              text: "100 Mbit Speed",
              ability: true,
            },
            {
              text: "3000 sessions",
              ability: true,
            },
          ],
        },
        {
          id: 3,
          popular: false,
          days: "365",
          price: "$127.99",
          btn: true,
          mback: "14-day money back guarantee",
          bgImg: "3.png",
          abilities: [
            {
              text: "1 Tb Free space",
              ability: true,
            },
            {
              text: "4 Tb Monthly space",
              ability: true,
            },
            {
              text: "100 Mbit Speed",
              ability: true,
            },
            {
              text: "3000 sessions",
              ability: true,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.allCards {
  @apply flex justify-around mt-10 bg-no-repeat px-12;
  background-image: url("../../assets/img/cardsBG/main.png");
  background-size: 225px;
  justify-content: space-around;
}
</style>