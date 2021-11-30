<template>
  <div class="home-page__banner" :class="`home-page__banner--${rwdThreshold}`">
    <div class="home-page__banner__wrapper">
      <!-- 文字 -->
      <div class="home-page__banner__text">
        <!-- 標題 -->
        <div class="home-page__banner__title">{{ title }}</div>
        <!-- 簡述 -->
        <div class="home-page__banner__discription">{{ discription }}</div>
        <!-- 連結 -->
        <div class="nueip__btn nueip__btn--solid" @click="$router.push(url)">
          {{ $t(linkLabel) }}
          <i class="mdi mdi-chevron-right"></i>
        </div>
        <!-- 影片 -->
        <div v-if="video.length > 0" class="nueip__btn" @click="openVideo">
          {{ $t("links.video") }}
          <i class="mdi mdi-chevron-right"></i>
        </div>
      </div>
      <!-- 圖片 -->
      <div class="home-page__banner__img">
        <!-- 大螢幕圖片 -->
        <img
          v-show="rwdThreshold !== 'sm'"
          :src="require('@/assets/' + imagePc)"
          :alt="imagePc"
          srcset=""
        />
        <!-- 小螢幕圖片 -->
        <img
          v-show="rwdThreshold === 'sm'"
          :src="require('@/assets/' + imageMb)"
          :alt="imageMb"
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { rwdThreshold } from "@/utils";
export default {
  name: "HomeBanner",
  props: {
    title: {
      type: String,
      default: "",
    },
    discription: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    linkLabel: {
      type: String,
      default: "",
    },
    video: {
      type: String,
      default: "",
    },
    imagePc: {
      type: String,
      default: "",
    },
    imageMb: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["windowWidth"]),
    /**
     * 判斷 RWD class
     */
    rwdThreshold() {
      return rwdThreshold(this.windowWidth);
    },
  },
  methods: {
    /**
     * 開啟影片
     */
    openVideo() {
      window.open(this.video, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page__banner {
  width: 100%;
  position: relative;
  height: calc(100vh - 60px);
  background: url("../../assets/home/home-bg-line.webp");
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  &__wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 80vw;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 100%;
    }
  }
  &__text {
    min-width: 250px;
    display: flex;
  }
  &__title {
    font-weight: bold;
  }
  &__discription {
    padding: 10px 0px;
  }
  &__title,
  &__discription {
    white-space: pre-line;
  }
  &--lg,
  &--md {
    padding: 20px;
    & .home-page__banner {
      &__title {
        font-size: 40px;
      }
      &__discription {
        font-size: 20px;
      }
    }
  }
  &--md,
  &--sm {
    & .home-page__banner {
      &__wrapper {
        flex-direction: column-reverse;
      }
      &__text {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
      &__img {
        flex: 1;
        width: 70%;
        min-width: 300px;
      }
    }
  }
  &--lg {
    align-items: center;
    & .home-page__banner {
      &__text {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 2;
      }
      &__img {
        flex: 5;
        padding: 30px;
        min-width: 500px;
        & img {
          width: 100%;
        }
      }
    }
  }
  &--sm {
    & .home-page__banner {
      &__wrapper {
        flex-direction: column-reverse;
        align-content: flex-end;
      }
      &__text {
        flex-direction: column;
        justify-content: flex-start;
      }
      &__title,
      &__discription {
        text-align: center;
      }
      &__title {
        font-size: 24px;
      }
    }
  }
}
</style>
