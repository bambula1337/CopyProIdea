<template>
  <div class="info_wrapper">
    <div class="left-info">
      <CPMInfoTopComponent
        v-for="(item, index) in top"
        :key="index"
        :welcomeTxt1="item.welcomeTxt1"
        :welcomeTxt2="item.welcomeTxt2"
        :underWelcomeTxt="item.underWelcomeTxt"
      />
      <hr class=""/>
      <CPMInfoBottomComponent
        v-for="(item, index) in bottom"
        :key="index"
        :topText="item.TTxt"
        :mainText="item.Mtxt"
        :btnText="item.Btxt"
      />
    </div>
    <div class="right-info">
      <img src="@/assets/img/Design.png" alt="" class=" ">
    </div>
  </div>
</template>

<script>
import CPMInfoTopComponent from "@/components/CPMInfo/CPMInfoTop.vue";
import CPMInfoBottomComponent from "@/components/CPMInfo/CPMInfoBottom.vue";

export default {
  name: "CPMInfoMain",
  components: {
    CPMInfoTopComponent,
    CPMInfoBottomComponent,
  },
  data() {
    return {
      top: [
        {
          id: 1,
          welcomeTxt1: "Personal",
          welcomeTxt2: "and Business",
          underWelcomeTxt: "Online storage",
        },
      ],
      bottom: [
        {
          id: 1,
          TTxt: "STORE AND MANAGE ALL YOUR Files!",
          Mtxt: "Upload multiple files at once and keep them forever on this site. If you're using FireFox or Chrome, you can simply drag & drop your files to begin uploading",
          Btxt: "Try SkyBox Now",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.info_wrapper {
  @apply flex justify-around items-center min-h-screen;
  @apply sm:mt-24 sm:flex-col-reverse sm:overflow-hidden;
  @apply md:mt-32;
  @apply lg:flex-row;
  & .left-info {
    @apply flex flex-col items-center w-1/2 z-10;
    @apply md:ml-12;
  }
  & .right-info {
    @apply flex w-1/2 relative justify-center;
    & img {
      width: 240%;
      margin-left: -9.5rem;
      @apply relative mt-0 max-w-md;
      @apply sm:-right-1/4 smlger:-right-1/3 smplus:max-w-xl smplus:-right-1/4;
      @apply md:max-w-2xl;
      @apply lg:min-w-designlg lg:mt-12 lg:right-0 lg:top-5 lg:-left-10;
    }
  }
  & hr {
    border: 1px solid rgba(59, 102, 141, 1);
    background-color: rgba(59, 102, 141, 1);
    @apply mt-5 w-80;
    @apply sm:hidden smlger:flex smplus:w-100 smplus:mr-1;
    @apply lg:mt-9 mb-5;
  }
}
</style>