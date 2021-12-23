<template>
  <div class="allCards">
    <CPCardComponent v-for="(item,index) in card"
                     :key="index"
                     :popular="item.popular"
                     :days="item.days"
                     :price="item.price"
                     :feature1="item.feature1"
                     :feature2="item.feature2"
                     :feature3="item.feature3"
                     :feature4="item.feature4"
                     :btn="item.btn"
                     :mback="item.mback"
                     :able1="item.able1"
                     :able2="item.able2"
                     :able3="item.able3"
                     :able4="item.able4"
                     :bgImg="item.bgImg"/>
  </div>
</template>

<script>
import CPCardComponent from "@/components/CPCards/CPCard.vue";

export default {
  name: "CPCards",
  components: {
    CPCardComponent,

  },
  data(){
    return{
      card:[
        {
          id: 1,
          popular: false,
          days: "30",
          price: "$20.99",
          feature1: "1 Tb Free space",
          feature2: "4 Tb Monthly space",
          feature3: "100 Mbit Speed",
          feature4: "3000 sessions",
          btn: true,
          mback: "14-day money back guarantee",
          able1: true,
          able2: true,
          able3: true,
          able4: true,
          bgImg: "1.png",
        },
        {
          id: 2,
          popular: true,
          days: "90",
          price: "$46.99",
          feature1: "1 Tb Free space",
          feature2: "4 Tb Monthly space",
          feature3: "100 Mbit Speed",
          feature4: "3000 sessions",
          btn: true,
          mback: "14-day money back guarantee",
          able1: true,
          able2: true,
          able3: true,
          able4: true,
          bgImg: "2.png",
        },
         {
          id: 3,
          popular: false,
          days: "365",
          price: "$127.99",
          feature1: "1 Tb Free space",
          feature2: "4 Tb Monthly space",
          feature3: "100 Mbit Speed",
          feature4: "3000 sessions",
          btn: true,
          mback: "14-day money back guarantee",
          able1: true,
          able2: true,
          able3: true,
          able4: true,
          bgImg: "3.png",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .allCards{
    @apply flex justify-around mt-10 bg-no-repeat px-12;
    background-image: url("../../assets/img/cardsBG/main.png");
    background-size: 225px;
    justify-content: space-around;

  }
</style>