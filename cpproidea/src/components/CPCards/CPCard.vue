<template>
  <div class="card" @mouseenter="ActiveCard">
    <img :src="require(`../../assets/img/cardsBG/${bgImg}`)" alt="" />
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
      <button class="SgBtn" v-if="btn == true">Sing Up</button>
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
  @apply flex flex-col bg-gray-50 py-8 rounded-3xl shadow-2xl mb-24  duration-300 transition-all bg-no-repeat;
  width: 350px;
  height: 550px;

  & img {
    @apply -mb-40 rounded-t-3xl -mt-8 opacity-50 transition-all duration-500;
    position: relative;
    z-index: 0;
  }

  & .PrcTxt {
    & .Popular {
      @apply text-green-400 text-sm text-center mt-1 -mb-3;
    }
    & .Days {
      @apply text-blue-900 text-center text-3xl mb-7 mt-5;
    }
    & .Price {
      @apply text-purple-400 text-center text-4xl;
    }
  }
  & .FtTxt {
    @apply flex self-center flex-col;
    width: 310px;
    & .FtWImg {
      @apply flex justify-between;

      & img {
        @apply w-4 h-3 mt-2 mr-12;
      }
    }
    & .Features {
      @apply text-gray-400 tracking-widest text-sm ml-14 mb-5;
    }
  }
  hr {
    @apply flex self-center mt-10 mb-12;
    width: 200px;
  }
  & .SgUp {
    @apply flex self-center flex-col duration-700 transition-all opacity-0;
    & .SgBtn {
      @apply bg-gradient-to-r from-blue-500 to-purple-500 w-52 h-12 rounded-full text-center text-gray-50 text-base font-thin flex items-center justify-center self-center mt-5 mb-3;
    }
    & p {
      @apply text-blue-900 text-sm tracking-widest text-center;
    }
  }
}
.card:hover {
  @apply -mx-6 -mt-6 -mb-14;
  height: 600px;
  width: 400px;

  & .SgUp {
    @apply opacity-100;
  }
  & img {
    @apply opacity-100;
  }
}
</style>