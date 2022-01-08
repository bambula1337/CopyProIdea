<template>
  <div class="allcount sm:mb-12 sm:bg-none smlger:mb-32 md:bg-counter">
    <div class="left sm:flex-col sm:mb-10">
      <div class="img mb-2 sm:w-24"><img :src="require(`../../assets/img/countUsersIcons/${icon}`)" alt=""></div>
      <div class="lefttext sm:flex sm:flex-col text-center">
        <p class="count sm:text-4xl sm:tracking-wide smlger:text-5xl">{{count}}</p>
        <p class="textcount sm:text-xl smlger:text-2xl">{{textcount}}</p>
      </div>
    </div>
    <div class="right sm:flex-col">
      <div class="img mb-6 sm:w-20"><img :src="require(`../../assets/img/countUsersIcons/${icon2}`)"  alt=""></div>
      <div class="righttext sm:flex sm:flex-col sm:text-center">
        <p class="count2 sm:text-4xl sm:tracking-wide smlger:text-5xl">{{count2}}</p>
        <p class="textcount2 sm:text-xl sm:w-52 smlger:text-2xl">{{textcount2}}</p>
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
  
    & .left, .right{
      @apply flex justify-center items-center;
      

    }

    & .left{
      & img{
      }
    }
    & .right{
      & img{
        
      }
    }
    
    & .count, .count2{
      @apply font-medium;
      color: rgba(66, 91, 140, 1);
    }
    & .textcount, .textcount2{
      @apply mt-1;
      color: rgba(113, 141, 194, 1);
    }
    & .righttext{
      @apply ml-5 flex justify-center items-center flex-col;
    }
    & .lefttext{
      @apply ml-5 flex justify-center items-center flex-col mr-4;
    } 
  }
</style>