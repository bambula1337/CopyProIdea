<template>
  <div class="card lg:flex flex-col " :class="{'sm:hidden': !popular}" @mouseenter="ActiveCard">
    <img :src="require(`../../assets/img/cardsBG/${bgImg}`)" alt="" class="sm:opacity-100 lg:opacity-50" />
    <div class="PrcTxt">
      <p class="Popular sm:mt-7 sm:text-lg sm:-mb-6" v-if="popular == true">Most popular</p>
      <p class="Days sm:text-4xl lg:text-3xl">{{ days }} days</p>
      <p class="Price sm:text-5xl sm:-mt-5">{{ price }}</p>
    </div>
    <hr class="sm: mt-7 sm:mb-9 lg:mt-10 lg:mb-12" />
    <div class="FtTxt">
      <div class="FtWImg">
        <p class="Features sm:text-xl sm:ml-8 lg:tracking-widest">{{ feature1 }}</p>
        <img src="@/assets/yes.png" v-if="able1 == true" alt="" />
      </div>
      <div class="FtWImg">
        <p class="Features sm:text-xl sm:ml-8 lg:tracking-widest">{{ feature2 }}</p>
        <img src="@/assets/yes.png" v-if="able2 == true" alt="" />
      </div>
      <div class="FtWImg">
        <p class="Features sm:text-xl sm:ml-8 lg:tracking-widest">{{ feature3 }}</p>
        <img src="@/assets/yes.png" v-if="able3 == true" alt="" />
      </div>
      <div class="FtWImg">
        <p class="Features sm:text-xl sm:ml-8 lg:tracking-widest">{{ feature4 }}</p>
        <img src="@/assets/yes.png" v-if="able4 == true" alt="" />
      </div>
    </div>
    <div class="SgUp sm:opacity-100 lg:opacity-0">
      <button class="SgBtn sm:text-xl sm:tracking-wider sm:w-36 sm:h-11 sm:mt-6 sm:mb-6 lg:tracking-normal lg:w-52 lg:h-12 lg:mt-5 lg:mb-3 lg:text-base" v-if="btn == true">Sing Up</button>
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
  @apply bg-gray-50 py-8 rounded-3xl shadow-2xl mb-24  duration-300 transition-all bg-no-repeat;
  width: 350px;
  height: 550px;

  & img {
    @apply -mb-40 rounded-t-3xl -mt-8 transition-all duration-500;
    position: relative;
    z-index: 0;
  }

  & .PrcTxt {
    & .Popular {
      @apply text-green-400 text-center;
    }
    & .Days {
      @apply text-blue-900 text-center mb-7 mt-5;
    }
    & .Price {
      @apply text-purple-400 text-center;
    }
  }
  & .FtTxt {
    @apply flex self-center flex-col;
    width: 310px;
    & .FtWImg {
      @apply flex justify-between;

      & img {
        @apply w-5 h-4 mt-2 mr-12;
      }
    }
    & .Features {
      @apply text-blue-900 opacity-60 mb-5;
    }
  }
  hr {
    @apply flex mx-auto;
    width: 200px;
  }
  & .SgUp {
    @apply flex self-center flex-col duration-700 transition-all;
    & .SgBtn {
      @apply bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-center text-gray-50 font-thin flex items-center justify-center self-center;
    }
    & p {
      @apply text-blue-900 text-sm tracking-widest text-center;
    }
  }
}
.card:hover {

  & .SgUp {
    @apply opacity-100;
  }
  & img {
    @apply opacity-100;
  }
}
</style>