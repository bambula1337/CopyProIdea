<template>
  <div class="card">
    <div class="PrcTxt">
      <p class="Popular" v-if="popular == true">Most popular</p>
      <p class="Days">{{days}} days</p>
      <p class="Price">{{price}}</p>
    </div>
    <hr>
    <div class="FtTxt">
      <div class="FtWImg">
        <p class="Features">{{feature1}}</p>
        <img src="@/assets/yes.png" v-if="able1 == true" alt="">
      </div>
      <div class="FtWImg">
        <p class="Features">{{feature2}}</p>
        <img src="@/assets/yes.png" v-if="able2 == true" alt="">
      </div>
      <div class="FtWImg">
        <p class="Features">{{feature3}}</p>
        <img src="@/assets/yes.png" v-if="able3 == true" alt="">
      </div>
      <div class="FtWImg">
        <p class="Features">{{feature4}}</p>
        <img src="@/assets/yes.png" v-if="able4 == true" alt="">
      </div>
    </div>
    <div class="SgUp">
      <button class="SgBtn" v-if="btn == true">Sing Up</button>
      <p>{{mback}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPCardComponent",
  props: ["popular", "days", "price", "feature1", "feature2", "feature3", "feature4", "btn", "mback", "able1", "able2", "able3", "able4"],
}
</script>

<style lang="scss" scoped>
  .card{
    @apply flex flex-col bg-gray-50 py-8 rounded-3xl shadow-2xl mb-24;
    width: 450px;
    height: 964px;

    & .PrcTxt{

      & .Popular{
        @apply text-green-400 text-lg text-center;
      }
      & .Days{
        @apply text-blue-900 text-center text-5xl mb-7 mt-2;
      }
      & .Price{
        @apply text-purple-400 text-center text-6xl;
      }
    }
    & .FtTxt{
      @apply flex self-center flex-col;
      width: 310px;
      & .FtWImg{
        @apply flex justify-between;

        & img{
          @apply w-6 h-5 mt-2;
        }
      }
      & .Features{
        @apply text-gray-400 tracking-widest text-2xl mb-7;
      }
    }
    hr{
      @apply flex self-center mt-28 mb-24;
      width: 308px;
    }
    & .SgUp{
      @apply flex self-center mr-9 mt-24 flex-col;
      & .SgBtn{
        @apply bg-purple-700 w-72 h-20 rounded-full text-center text-gray-50 text-2xl flex items-center justify-center;
      }
      & p{
        @apply text-blue-900 text-lg tracking-widest text-center mt-11;
      }
    }
  }
</style>