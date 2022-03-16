<template>
  <div class="TextPageComponentWrapper">
    <div class="top">
      <p class="header">{{ TextPage.Top.Header }}</p>
      <p
        class="subtext"
        v-for="(item, index) in TextPage.Top.Text"
        :key="index"
      >
        {{ item.text }}
      </p>
    </div>
    <div class="bottom">
      <p class="header">{{ TextPage.Bottom.Header }}</p>
      <p class="subtext">{{ TextPage.Bottom.Text.Top }}</p>
      <div class="middle">
        <p class="subtext">{{ TextPage.Bottom.Text.Middle.First }}</p>
        <p class="subtext">{{ TextPage.Bottom.Text.Middle.Second }}</p>
      </div>
      <p class="subtext">{{ TextPage.Bottom.Text.Bottom }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextPageComponent",
  data() {
    return {
      TextPage: {
        Top: {
          Header: "Access from anywhere",
          Text: [
            {
              text: "Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.",
            },
            {
              text: "Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.",
            },
          ],
        },
        Bottom: {
          Header: "Access from anywhere",
          Text: {
            Top: "Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.",
            Middle: {
              First:
                "Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.",
              Second:
                "Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.",
            },
            Bottom:
              "Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.",
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.TextPageComponentWrapper {
  @apply flex flex-col mt-12 px-4;
  @apply lg:px-17proc;

  & .top {
    & .header {
      @apply text-3xl -ml-1 pb-0 uppercase mb-2.5;
      @apply lg:-ml-4;
      color: rgba(59, 102, 141, 1);
    }
    & .subtext {
      @apply pb-5 text-gray-500 text-base;
      word-spacing: 0.5px;
      letter-spacing: 0.35px;

      &:last-child {
        @apply mb-2;
      }
    }
  }

  & .bottom {
    & .header {
      @apply text-3xl -ml-1 pb-0 uppercase mb-2.5;
      @apply lg:-ml-4;
      color: rgba(59, 102, 141, 1);
    }
    & .subtext {
      @apply pb-5 text-gray-500 text-base;
      word-spacing: 0.5px;
      letter-spacing: 0.35px;
    }

    & .middle {
      @apply flex my-1.5;
      & p {
        @apply mr-0;
        @apply lg:mr-7;

        &:last-child {
          @apply ml-4;
          @apply lg:ml-0;
        }
      }
    }
  }
}
</style>