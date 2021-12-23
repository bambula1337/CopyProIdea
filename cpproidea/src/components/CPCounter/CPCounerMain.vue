<template>
  <div class="allcount">
    <div class="left">
      <div class="img"><img :src="require(`../../assets/img/countUsersIcons/${icon}`)" alt=""></div>
      <div class="lefttext">
        <p class="count">{{count}}</p>
        <p class="textcount">{{textcount}}</p>
      </div>
    </div>
    <div class="right">
      <div class="img"><img :src="require(`../../assets/img/countUsersIcons/${icon2}`)"  alt=""></div>
      <div class="righttext">
        <p class="count2">{{count2}}</p>
        <p class="textcount2">{{textcount2}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPCounterParent",
  props: ["count", "textcount", "count2", "textcount2", "icon", "icon2"],
}
</script>

<style lang="scss" scoped>
  .allcount{
    @apply flex flex-row justify-center items-center mb-12 bg-no-repeat h-60;
    background-image: url("../../assets/img/countUsersIcons/left.png"),
                      url("../../assets/img/countUsersIcons/right.png");
    background-position: left center, right center;
    background-size: 100px, 150px;
  
    & .left, .right{
      @apply flex justify-center items-center;
      

    }

    & .left{

      & img{
        width: 70px;
      }
    }
    & .right{
      & img{
        width: 50px;
      }
    }
    
    & .count, .count2{
      @apply text-2xl font-medium;
      color: rgba(66, 91, 140, 1);
    }
    & .textcount, .textcount2{
      @apply text-sm mt-1;
      color: rgba(113, 141, 194, 1);
    }
    & .righttext{
      @apply ml-5 flex justify-start items-start flex-col;
    }
    & .lefttext{
      @apply ml-5 flex justify-center items-start flex-col mr-32;
    } 
  }
</style>