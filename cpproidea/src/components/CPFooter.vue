<template>
  <footer class="footer">
    <div class="top">
      <div class="about">
        <p class="aboutmaintext">About us</p>
        <div class="aboutsubtext">
          <p>
            When using the SKYBOX Services You may transmit, store and or share
            certain data, information, files, etc. (altogether “Service Data”).
            For the avoidance of doubt, You retain full ownership of Your
            Service Data. SKYBOX doea that You or any other uss while using the
            Service. SKYBOX agrees that these Terms do not grant
          </p>
        </div>
      </div>
      <div class="links">
        <p class="linksmaintext">Featured links</p>
        <router-link to="/pricing" class="link" :active-class="'active'"
          >Pricing</router-link
        >
        <router-link to="/contact" class="link" :active-class="'active'"
          >Contact</router-link
        >
        <router-link to="/dmca" class="link" :active-class="'active'"
          >DMCA</router-link
        >
        <router-link to="/refund" class="link" :active-class="'active'"
          >Refund Policy</router-link
        >
        <router-link to="/privacy" class="link" :active-class="'active'"
          >Privacy Policy</router-link
        >
        <router-link to="/terms" class="link" :active-class="'active'"
          >Terms of Service</router-link
        >
      </div>
      <div class="contact">
        <p class="contactmaintext">Contact us</p>
        <div class="contactsubtextbox">
          <p class="contactsubtext">Our office:</p>
          <p class="contactsubtext">Digitalgoals LTD</p>
          <p class="contactsubtext">Lapathou, 6, Strovolos 2027,</p>
          <p class="contactsubtext">Lefkosia, Cyprus</p>
          <p class="contactsubtext">Phone: +37 06 225 29 36</p>
          <p class="contactsubtext">Email: mail@example.com</p>
        </div>
      </div>
    </div>
    <hr class="hr" />
    <div class="bottom">
      <p class="">Copyright © 2016 - 2021 <br class="md:hidden"> SkyBox - Online File Storage</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CPFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  @apply font-light text-sm tracking-wide bg-no-repeat;
  @apply md:mt-10;
  background-image: url("../assets/img/footer/bgbig.png");
  & .top {
    @apply flex text-gray-50 mt-72 justify-around;

    & .about {
      @apply ml-0 w-84;
      @apply sm:hidden;
      @apply lgplus:flex lg:flex-col lg:w-1/4;

      & .aboutmaintext {
        @apply text-4xl font-normal tracking-wider mb-10;
      }

      & .aboutsubtext {
        @apply text-lg;
        @apply lg:text-sm lg:w-72 lg:-left-5 lgplus:leading-11 lgplus:w-96;
      }
    }

    & .links {
      width: 20%;
      @apply sm:hidden;
      @apply md:flex md:flex-col md:w-96 md:-mr-28;
      @apply lg:w-1/4 lg:mx-10 lgplus:w-1/5;

      & .linksmaintext {
        @apply text-4xl font-normal tracking-wider mb-10;
        @apply md:text-5xl; 
        @apply lg:text-4xl;
      }

      & .link {
        @apply mb-2 underline;
        @apply md:text-xl;
        @apply lg:text-sm;
      }
    }

    & .contact {
      @apply flex text-left flex-col;
      @apply sm:ml-2 smlger:ml-0;
      @apply lg:w-1/4 lgplus:w-1/6;
      @apply xl:w-3/20 xl:-mr-6;
      & .contactmaintext {
        @apply font-normal tracking-wider mb-10 flex;
        @apply sm:text-4xl smlger:text-5xl;
        @apply lg:text-4xl;
      }

      & .contactsubtextbox {
        @apply flex flex-col;
        @apply sm:text-lg smlger:text-xl;
        @apply lg:text-sm;
        & .contactsubtext {
          @apply mb-2;
        }
      }
    }
  }
  & .bottom {
    & p {
      @apply my-6 text-gray-50 tracking-wider font-normal;
      @apply sm:text-xl sm:text-center smlger:text-2xl lg:text-base;
    }
  }
  .hr {
    @apply self-center opacity-50 mr-7;
    @apply sm:mt-8 lg:mt-14;
    width: 100%;
  }
}
</style>