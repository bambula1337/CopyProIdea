<template>
  <div class="faq">
    <details
      v-for="(item, index) in cardProps"
      :key="index"
      id="FAQCard"
      :data-id="index"
    >
      <summary @click.prevent="opener">
        <p>
          {{ item.text }}
        </p>
        <div class="svg">
          <img src="@/assets/img/FAQ/Close.png" class="closeimg" alt="" />
          <img src="@/assets/img/FAQ/Open.png" class="openimg" alt="" />
        </div>
      </summary>
      <p class="subtext">
        {{ item.subtext }}
      </p>
    </details>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  props: ["cardProps"],
  methods: {
    opener: function (event) {
      this.openThisCard = event.target.closest("#FAQCard");

      if (this.openThisCard.open) {
        this.openThisCard.open = false;
      }
      else {
        document.querySelectorAll("#FAQCard").forEach((el) => {
          el.open = false;
        });
        this.openThisCard.open = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.faq {
  max-height: 47rem;
  @apply flex flex-col text-purple-900 items-center mt-20 mb-40;
  @apply lg:max-h-143;
  min-height: 28rem;
  & details {
    @apply text-left mb-5 w-72;
    @apply smlger:w-98;
    @apply lg:w-220;
    &[open] .closeimg {
      @apply opacity-0;
    }

    &[open] .openimg {
      @apply opacity-100;
    }

    &[open] summary {
      @apply from-blue-300 to-purple-300;
    }

    & p {
      @apply ml-5 mt-5 mb-7 text-gray-500;

      &::selection {
        @apply bg-transparent;
      }
    }

    & summary {
      @apply flex h-14 bg-gradient-to-r from-blue-200 to-purple-200 rounded-t-2xl justify-between items-center text-2xl px-5 pt-3 transition-all duration-700 w-72;
      @apply smlger:w-98;
      @apply lg:w-220;
      & p {
        @apply text-purple-900;
        &::selection {
          @apply bg-transparent;
        }
      }

      & .openimg {
        @apply transition-all duration-500 opacity-0 relative left-0 -top-7/10;
      }
      & .closeimg {
        @apply transition-all duration-500 opacity-100;
      }

      & img {
        @apply -mt-1 w-7;

        &::selection {
          @apply bg-none;
        }
      }
    }
  }
}
</style>