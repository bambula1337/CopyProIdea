<template>
  <div class="info_wrapper md:mt-32">
    <div class="left-info md:ml-12">
      <CPMInfoTopComponent
        v-for="(item, index) in top"
        :key="index"
        :welcomeTxt1="item.welcomeTxt1"
        :welcomeTxt2="item.welcomeTxt2"
        :underWelcomeTxt="item.underWelcomeTxt"
      />
      <hr />
      <CPMInfoBottomComponent
        v-for="(item, index) in bottom"
        :key="index"
        :topText="item.TTxt"
        :mainText="item.Mtxt"
        :btnText="item.Btxt"
      />
    </div>
    <div class="right-info">
      <img src="@/assets/img/Design.png" alt="" class="md:min-w-designmd md:mt-16 lg:min-w-designlg lg:mt-12">
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
  & .left-info {
    @apply flex flex-col items-center w-1/2 z-10;
  }
  & .right-info {
    @apply flex w-1/2 relative;
    & img {
      @apply absolute -top-72 -left-24;
      width: 90%;
    }
  }
  & hr {
    @apply flex my-10 mr-9 ml-6;
    width: 430px;
    border: 1px solid rgba(59, 102, 141, 1);
    background-color: rgba(59, 102, 141, 1);
  }
}
</style>