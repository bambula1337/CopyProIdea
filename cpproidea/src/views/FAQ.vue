<template>
  <div class="faq">
    <details>
      <summary>
        <p>How to install?</p>
        <div class="svg">⠀⠀</div>
      </summary>
      <p>
        Orci nibh faucibus nunc aliquet diam. Neque quis dignissim ipsum eget
        sed massa feugiat sit nibh. Pretium eget morbi tincidunt justo, mattis
        tincidunt facilisis lorem. Commodo, sit enim, amet fringilla in proin
        purus. Et odio arcu libero at sed quam tempor, neque. Scelerisque arcu
        vel vehicula eget posuere. Sed urna velit aliquam in pharetra. Tempus
        libero elit ac hac et morbi. Sed viverra vel adipiscing mauris, congue
        tincidunt integer. Sed gravida in cursus pellentesque odio.
      </p>
    </details>
    <details>
      <summary>
        <p>How to install?</p>
        <div class="svg">⠀⠀</div>
      </summary>
      <p>
        Orci nibh faucibus nunc aliquet diam. Neque quis dignissim ipsum eget
        sed massa feugiat sit nibh. Pretium eget morbi tincidunt justo, mattis
        tincidunt facilisis lorem. Commodo, sit enim, amet fringilla in proin
        purus. Et odio arcu libero at sed quam tempor, neque. Scelerisque arcu
        vel vehicula eget posuere. Sed urna velit aliquam in pharetra. Tempus
        libero elit ac hac et morbi. Sed viverra vel adipiscing mauris, congue
        tincidunt integer. Sed gravida in cursus pellentesque odio.
      </p>
    </details>
  </div>
</template>

<script>
export default {
  name: "FAQ",
};
</script>

<style lang="scss" scoped>
.faq {
  @apply flex flex-col text-purple-900 items-center;
  & details {
    @apply text-left mb-5;
    width: 55rem;

    &[open] .svg {
      background: url("../assets/img/FAQ/Open.png") center no-repeat;
    }

    & p {
      @apply ml-5 mt-5 mb-7 text-gray-500;
    }

    & summary {
      @apply flex h-14 bg-gradient-to-r from-blue-300 to-purple-300 rounded-t-2xl justify-between items-center text-2xl px-5 pt-2;
      width: 55rem;
      & p {
        @apply text-purple-900;
        &::selection {
          @apply bg-none;
        }
      }
      & .svg {
        @apply -mt-1 w-7;
        background: url("../assets/img/FAQ/Close.png") center no-repeat;

        &::selection {
          @apply bg-none;
        }
      }
    }
  }
}
</style>