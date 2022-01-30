<template>
  <div class="card" :class="{'sm:hidden': !popular}" @mouseenter="ActiveCard">
    <img :src="require(`../../assets/img/cardsBG/${bgImg}`)" alt="" class="sm:opacity-100 xl:opacity-50" />
    <div class="PrcTxt">
      <p class="Popular" v-if="popular == true">Most popular</p>
      <p class="Days">{{ days }} days</p>
      <p class="Price">{{ price }}</p>
    </div>
    <hr />
    <div class="FtTxt">
      <div class="FtWImg">
        <p class="Features">{{ feature1 }}</p>
        <img src="@/assets/yes.png" v-if="able1 == true" alt="" />
      </div>
      <div class="FtWImg">
        <p class="Features">{{ feature2 }}</p>
        <img src="@/assets/yes.png" v-if="able2 == true" alt="" />
      </div>
      <div class="FtWImg">
        <p class="Features">{{ feature3 }}</p>
        <img src="@/assets/yes.png" v-if="able3 == true" alt="" />
      </div>
      <div class="FtWImg">
        <p class="Features">{{ feature4 }}</p>
        <img src="@/assets/yes.png" v-if="able4 == true" alt="" />
      </div>
    </div>
    <div class="SgUp">
      <button class="SgBtn sm:text-xl sm:tracking-wider sm:w-36 sm:h-11 sm:mt-4 sm:mb-6 smlger:mb-4 smlger:mt-6 lg:tracking-normal lg:w-52 lg:h-12 lg:mt-5 lg:mb-3 lg:text-base" v-if="btn == true">Sing Up</button>
      <p>{{ mback }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPCardComponent",
  props: [
    "popular",
    "days",
    "price",
    "feature1",
    "feature2",
    "feature3",
    "feature4",
    "btn",
    "mback",
    "able1",
    "able2",
    "able3",
    "able4",
    "bgImg",
  ],
  methods: {
    ActiveCard() {
      this.classList.add("show");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply w-88;
  @apply bg-gray-50 py-8 rounded-3xl shadow-2xl mb-24  duration-300 transition-all bg-no-repeat;
  @apply sm:h-143 smlger:h-142;
  @apply lg:flex lg:flex-col lg:w-64 lg:h-120 lgplus:w-80 lgplus:h-142;
  @apply xl:w-84 xlplus:w-88;

  & img {
    @apply -mb-40 rounded-t-3xl -mt-8 transition-all duration-500;
    position: relative;
    z-index: 0;
  }

  & .PrcTxt {
    & .Popular {
      @apply text-green-400 text-center;
      @apply sm:mt-7 sm:text-lg sm:-mb-6 smlger:mt-3;
      @apply lg:text-sm lg:mt-12 lg:-mb-14 lgplus:mt-4 lgplus:-mb-4;
    }
    & .Days {
      @apply text-blue-900 text-center mb-7 mt-5;
      @apply sm:text-4xl;
      @apply lg:text-3xl lg:mt-14 lgplus:mt-8;
    }
    & .Price {
      @apply text-purple-400 text-center;
      @apply sm:text-5xl sm:-mt-5;
      @apply lg:text-4xl lg:mt-7;
    }
  }
  & .FtTxt {
    @apply flex self-center flex-col;
    width: 310px;
    & .FtWImg {
      @apply flex justify-between;

      & img {
        @apply w-5 h-4 mt-2 mr-7;
        @apply smlger:mr-5;
        @apply lg:w-4 lg:h-3 lg:mr-12;
      }
    }
    & .Features {
      @apply text-blue-900 opacity-60 mb-5;
      @apply sm:text-xl sm:ml-14 smlger:ml-14;
      @apply lg:tracking-widest lg:text-sm lg:ml-14;
    }
  }
  hr {
    @apply flex mx-auto;
    @apply sm:mt-7 sm:mb-9;
    @apply lg:mt-10 lg:mb-3 lgplus:mb-12;
    width: 200px;
  }
  & .SgUp {
    @apply flex self-center flex-col duration-300 transition-all;
    @apply sm:opacity-100;
    @apply lgplus:duration-500;
    @apply xl:opacity-0;
    & .SgBtn {
      @apply bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-center text-gray-50 font-thin flex items-center justify-center self-center;
    }
    & p {
      @apply text-blue-900 text-sm tracking-widest text-center;
    }
  }
}
.card:hover {
  @apply xl:mb-0 xl:-mx-4 xl:w-92 xl:h-143 xlplus:w-96;


  & .SgUp {
    @apply opacity-100;
  }
  & img {
    @apply opacity-100;
  }
}
</style>