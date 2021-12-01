<template>
  <div class="home-page" :class="rdwClasses">
    <!-- Banner 圖片 -->
    <VueSlickCarousel class="home-page__banner" :arrows="true" fade>
      <home-banner
        v-for="x in BANNER"
        :key="x.id"
        :title="x.title"
        :discription="x.discription"
        :url="x.url"
        :linkLabel="x.linkLabel"
        :video="x.video"
        :image-pc="x.imagePc"
        :image-mb="x.imageMb"
      />
    </VueSlickCarousel>
    <!-- 零時差 無距離 高效率 -->
    <div class="home-page__intro home-page--full">
      <home-intro />
    </div>
    <!-- 全方位第三方雲端服務整合 -->
    <div class="home-page__third-party home-page--full">
      <home-third-party />
    </div>
    <!-- 選擇NUEiP的優勢 -->
    <div class="home-page__advantage home-page--full">
      <home-advantage />
    </div>
    <!-- 資料安全有保障 -->
    <div class="home-page__security home-page--full">
      <home-security />
    </div>
    <!-- 數字 -->
    <div class="home-page__number home-page--full">
      <home-number :companyNum="1800" :lineNum="100000" :userNum="130000" />
    </div>
    <!-- 我們的客戶 -->
    <div class="home-page__client home-page--full">
      <home-client />
    </div>
    <!-- 媒體報導 -->
    <div class="home-page__media home-page--full">
      <home-media />
    </div>
  </div>
</template>

<script>
import HomeBanner from "./Banner.vue";
import HomeIntro from "./Intro.vue";
import HomeThirdParty from "./ThirdParty.vue";
import HomeAdvantage from "./Advantage.vue";
import HomeSecurity from "./Security.vue";
import HomeNumber from "./Number.vue";
import HomeClient from "./Client.vue";
import HomeMedia from "./Media.vue";
import BANNER from "@/json/BANNER.json";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import { mapGetters } from "vuex";
import { rwdThreshold } from "@/utils";
export default {
  name: "Home",
  components: {
    HomeBanner,
    VueSlickCarousel,
    HomeIntro,
    HomeThirdParty,
    HomeAdvantage,
    HomeSecurity,
    HomeNumber,
    HomeClient,
    HomeMedia,
  },
  data() {
    return {
      BANNER: BANNER,
    };
  },
  computed: {
    ...mapGetters(["windowWidth"]),
    /**
     * 判斷 RWD class
     */
    rdwClasses() {
      if (rwdThreshold(this.windowWidth) === "sm") {
        return "home-page--sm";
      } else {
        return "home-page--lg";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  &--full {
    width: 100%;
    padding: 50px 20px;
    ::v-deep h1 {
      text-align: center;
      font-weight: bold;
    }
  }
  &__banner {
    height: calc(100vh - 60px);
    @include fixBgImg("../../assets/home/home-bg-line.webp");
  }
  &__intro {
    @include fixBgImg("../../assets/home/home-bg.webp");
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($--color-primary-light-9, 0.8);
    }
  }
  &__third-party {
    @include fixBgImg("../../assets/home/home-bg-line.webp");
    background-color: rgba(0, 0, 0, 0.7);
  }
  &__advantage {
    @include fixBgImg("../../assets/home/home-bg-line.webp");
  }
  &__security {
    @include fixBgImg("../../assets/home/home-bg-line.webp");
    background-color: rgba($--color-warning-light, 0.8);
  }
  &--sm {
    ::v-deep .home-page--full {
      & h1 {
        font-size: 32px;
      }
    }
  }
  &--lg {
    ::v-deep .home-page--full {
      & h1 {
        font-size: 48px;
      }
    }
  }
}
</style>
