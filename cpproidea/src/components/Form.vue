<template>
  <div class="formwrapper">
    <div class="toptext">
      <p class="main">Drop us a line</p>
      <p class="sub">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="bottomcontent">
      <div class="inputs">
        <div class="email">
          <p>Email</p>
          <input type="email" placeholder="mail@example.com" />
        </div>
        <div class="name">
          <p>Name</p>
          <input type="text" placeholder="John Doe" />
        </div>
        <div class="message">
          <textarea
            name=""
            id=""
            maxlength="250"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <div class="btnwrapper">
        <p>We do not share your personal data.</p>
        <button type="submit">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style lang="scss" scoped>
.formwrapper {
  @apply flex flex-col items-center bg-no-repeat mb-36 pt-36 pb-12;
  background-image: url("../assets/img/form/formleft.gif"),
                      url("../assets/img/form/formright.gif");
  background-position: left center, right center;
  background-size: 150px;
  & input:focus{
    border: 3px solid #a855f7;

  }
  & textarea:focus{
    border: 3px solid #a855f7;
  }
  & .toptext {
    @apply text-center;
    & .main {
      @apply text-6xl tracking-wide;
      color: rgba(59, 102, 141, 1);
    }
    & .sub {
      @apply text-xl tracking-widest mt-3 text-gray-500 mb-10;
    }
  }
  & .bottomcontent {
    & .inputs {
      color: rgba(59, 102, 141, 1);
      & .email {
        @apply flex items-center mb-2;
        & input {
          @apply rounded-full text-left pl-5 h-13 w-88 transition-all duration-300 outline-none;
          background-color: rgba(243, 243, 243, 1);
        }
        & p {
          @apply text-lg mr-7;
        }
      }
      & .name {
        @apply flex items-center;
        & input {
          @apply rounded-full text-left pl-5 h-13 w-88 transition-all duration-300 outline-none;
          background-color: rgba(243, 243, 243, 1);
        }
        & p {
          @apply text-lg;
          margin-right: 1.4rem;
        }
      }
      & .message {
        @apply flex;
        & textarea {
          @apply rounded-3xl text-left pl-5 pt-2 pr-2 h-28 w-full mt-2 align-text-top transition-all duration-300 outline-none;
          background-color: rgba(243, 243, 243, 1);
          resize: none;
        }
        & textarea::-webkit-scrollbar {
          width: 0.6vw;
        }

        /* Track */
        & textarea::-webkit-scrollbar-track {
          @apply mt-5 -ml-4 mb-5;
          background-color: rgba(243, 243, 243, 1);
          border-radius: 30px;
        }

        /* Handle */
        & textarea::-webkit-scrollbar-thumb {
          @apply bg-gray-200;
          border-radius: 30px;
        }

        /* Handle on hover */
        & textarea::-webkit-scrollbar-thumb:hover {
          @apply bg-gray-300;
        }
      }
    }
    & .btnwrapper {
      @apply flex pt-3 items-center justify-between;
      & p {
        @apply text-gray-400 text-xs;
      }
      & button {
        @apply text-gray-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full h-11 w-36;
      }
    }
  }
}
</style>