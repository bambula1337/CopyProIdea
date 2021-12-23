<template>
  <div class="bottom">
    <p class="top">{{topText}}</p>
    <div class="infoWrapper">
      <p class="info">{{mainText}}</p>
    </div>
    <button class="tryNow">{{btnText}}</button>
  </div>
</template>

<script>
export default {
  name: "CPMInfoBottomComponent",
  props: ["topText", "mainText", "btnText"],
}
</script>

<style lang="scss" scoped>
  .bottom{
    @apply flex flex-col mr-6;

    & .top{
      @apply uppercase text-2xl mb-2;
      color: rgba(59, 102, 141, 1);
    }

    & .infoWrapper{
      width: 400px;

      & .info{
        @apply font-thin mb-7 text-lg;
        color: rgba(59, 102, 141, 1);
    }
    }

    & .tryNow{
      @apply text-gray-50 bg-gradient-to-r from-blue-400 to-purple-500 w-56 h-14 rounded-full;
    }
  }
</style>