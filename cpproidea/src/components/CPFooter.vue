<template>
  <footer class="footer">
    <div class="top">
      <div class="about sm:hidden">
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
      <div class="links sm:hidden lg:flex lg:flex-col">
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
        <p class="contactmaintext sm:text-4xl smlger:text-5xl lg:text-4xl">Contact us</p>
        <div class="contactsubtextbox sm:text-lg smlger:text-xl">
          <p class="contactsubtext">Our office:</p>
          <p class="contactsubtext">Digitalgoals LTD</p>
          <p class="contactsubtext">Lapathou, 6, Strovolos 2027,</p>
          <p class="contactsubtext">Lefkosia, Cyprus</p>
          <p class="contactsubtext">Phone: +37 06 225 29 36</p>
          <p class="contactsubtext">Email: mail@example.com</p>
        </div>
      </div>
    </div>
    <hr class="hr sm:mt-8 lg:mt-14" />
    <div class="bottom">
      <p class="sm:text-xl sm:text-center smlger:text-2xl lg:text-base">Copyright © 2016 - 2021 <br class="lg:hidden"> SkyBox - Online File Storage</p>
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
  background-image: url("../assets/img/footer/bgbig.png");
  & .top {
    @apply flex text-gray-50 mt-72 justify-around;

    & .about {
      @apply ml-0;
      width: 25%;

      & .aboutmaintext {
        @apply text-4xl font-normal tracking-wider mb-10;
      }

      & .aboutsubtext {
        line-height: 27px;
      }
    }

    & .links {
      width: 20%;

      & .linksmaintext {
        @apply text-4xl font-normal tracking-wider mb-10;
      }

      & .link {
        @apply mb-2 underline;
      }
    }

    & .contact {
      @apply flex text-left flex-col;
      & .contactmaintext {
        @apply font-normal tracking-wider mb-10 flex;
      }

      & .contactsubtextbox {
        @apply flex flex-col;
        & .contactsubtext {
          @apply mb-2;
        }
      }
    }
  }
  & .bottom {
    & p {
      @apply my-6 text-gray-50 tracking-wider font-normal;
    }
  }
  .hr {
    @apply self-center opacity-50 mr-7;
    width: 100%;
  }
}
</style>