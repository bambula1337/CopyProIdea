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
        <p class="textcount2 sm:w-52 lgplus:w-96">{{textcount2}}</p>
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
    @apply bg-no-repeat h-60;
    background-image: url("../../assets/img/countUsersIcons/left.png"),
                      url("../../assets/img/countUsersIcons/right.png");
    background-position: left center, right center;
    background-size: 0px;
    @apply sm:mb-32;
    @apply smlger:mb-32;
    @apply lg:bg-counter;
    @apply lg:flex lg:justify-center items-center;
  
    & .left, .right{
      @apply flex justify-center items-center;

    }

    & .left{
      @apply sm:flex-col sm:mb-10 sm:mr-3;
      @apply lg:ml-10 lg:flex-row lg:mr-14 lgplus:mr-16 lgplus:ml-40 lg:mt-12;
      & img{
        @apply mb-2;
        @apply sm:w-24;
        @apply lg:w-19;
      }
    }
    & .right{
      @apply sm:flex-col sm:-ml-4;
      @apply lg:flex-row lg:mt-7 lg:ml-14 ;
      & img{
        @apply mb-6;
        @apply sm:w-20 sm:ml-2;
        @apply lg:w-14 lg:ml-0;
      }
    }
    
    & .count, .count2{
      @apply font-medium;
      @apply sm:text-4xl sm:tracking-wide smlger:text-5xl w-max;
      @apply lg:text-2xl lg:self-start;
      color: rgba(66, 91, 140, 1);
    }
    & .textcount, .textcount2{
      @apply mt-1;
      @apply sm:text-xl smlger:text-2xl;
      @apply lg:text-sm lg:text-left;
      color: rgba(113, 141, 194, 1);
    }
    & .righttext{
      @apply ml-5 flex justify-center items-center flex-col;
      @apply sm:flex sm:ml-3 sm:flex-col sm:text-center;
      @apply lg:mt-1 lg:ml-5 lgplus:-mt-6;
    }
    & .lefttext{
      @apply ml-5 flex justify-center items-center flex-col mr-4;
      @apply sm:flex sm:flex-col sm:text-center;
    } 
  }
</style>