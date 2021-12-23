<template>
  <footer class="footer">
    <div class="top">
      <div class="about">
        <p class="aboutmaintext">About us</p>
        <p class="aboutsubtext">
          When using the SKYBOX Services You may transmit, store and or share
          certain data, information, files, etc. (altogether “Service Data”).
          For the avoidance of doubt, You retain full ownership of Your Service
          Data. SKYBOX doea that You or any other uss while using the Service.
          SKYBOX agrees that these Terms do not grant
        </p>
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
    <hr>
    <div class="bottom">
      <p>Copyright © 2016 - 2021 - SkyBox - Online File Storage</p>
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
  @apply flex justify-between items-center flex-col font-light text-sm tracking-wide bg-no-repeat;
  background-image: url("../assets/img/footer/bg.png");
  height: 100vh;
  background-position: center, center;
  & .top{
    @apply flex text-gray-50 mt-72 justify-between;

    & .about{
      @apply ml-28;
      width: 23%;

      & .aboutmaintext{
        @apply text-4xl font-normal tracking-wider mb-10;
      }

      & .aboutsubtext{
        line-height: 27px
      }
    }

    & .links{
      @apply flex flex-col;
      width: 23%;

      & .linksmaintext{
        @apply text-4xl font-normal tracking-wider mb-10;
      }

      & .link{
        @apply mb-2 underline;
      }
    }

    & .contact{
      width: 23%;
      & .contactmaintext{
        @apply text-4xl font-normal tracking-wider mb-10;
      }
      
      & .contactsubtextbox{

        & .contactsubtext{
          @apply mb-2;
        }
      }

    }
  }
  & .bottom{
    & p{
      @apply my-6 text-gray-50 tracking-wider font-normal text-base;
    }
  }
  & hr{
    @apply self-center opacity-50 mt-24;
    width: 1300px;
    
  }
}
</style>