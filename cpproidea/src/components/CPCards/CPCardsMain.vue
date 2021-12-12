<template>
  <div class="">
    <CPWlcTxtComponent v-for="(item,index) in txt"
                       :key="index"
                       :maintxt="item.maintxt"
                       :bgtxt1="item.bgtxt1"
                       :bgtxt2="item.bgtxt2"/>
    <CPCards/>                   
  </div>  
</template>

<script>
import CPWlcTxtComponent from "@/components/CPCards/CPWlcTxt.vue";
import CPCards from "@/components/CPCards/CPCards.vue"

export default {
  name: "CPCardsMainParent",
  components: {
    CPWlcTxtComponent,
    CPCards,
  },
  data() {
    return {
      txt:[
        {
          id: 1,
          maintxt: "Become a PREMIUM MEMBER",
          bgtxt1: "Premium Business",
          bgtxt2: "1 TB free space and 4 TB monthly transfer",
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>

</style>