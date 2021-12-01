<template>
  <div class="home__media" :class="rdwClasses">
    <h1>{{ $t("homePage.media.title") }}</h1>
    <VueSlickCarousel
      :arrows="true"
      :slidesPerRow="1"
      :slidesToShow="slidesToShow"
    >
      <div v-for="x in HOME_MEDIA" :key="x.id" class="home__media__block">
        <!-- 媒體報導 -->
        <div class="home__media__content">
          <!-- 日期 -->
          <div class="home__media__date">
            <h2>{{ x.day }}</h2>
            <h3>{{ x.mon }}.{{ x.year }}</h3>
          </div>
          <!-- 文字 -->
          <div class="home__media__text">
            <p>{{ x.media }}</p>
            <h2>{{ x.title }}</h2>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import HOME_MEDIA from "@/json/HOME_MEDIA.json";
import { mapGetters } from "vuex";
import { rwdThreshold } from "@/utils";
export default {
  name: "HomeMedia",
  components: { VueSlickCarousel },
  computed: {
    ...mapGetters(["windowWidth"]),
    /**
     * 判斷 RWD class
     */
    rdwClasses() {
      if (rwdThreshold(this.windowWidth) === "lg") {
        return "home__media--lg";
      } else {
        return "home__media--sm";
      }
    },
    /**
     * 判斷要顯示幾張slide
     */
    slidesToShow() {
      const rwd = rwdThreshold(this.windowWidth);
      if (rwd === "sm") return 1;
      if (rwd === "md") return 2;
      return 3;
    },
  },
  data() {
    return {
      HOME_MEDIA: HOME_MEDIA,
    };
  },
};
</script>

<style lang="scss" scoped>
.home__media {
  margin: 0px -20px;
  &__content {
    border: solid 1px $--color-primary;
    box-shadow: 0px 0px 15px 0px $--color-info-light;
    margin: 10px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    cursor: pointer;
  }
  &__date {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h2,
    & h3 {
      margin: 0;
    }
    & h2 {
      font-size: 64px;
    }
  }
  &__text {
    & h2 {
      color: $--color-primary;
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  &--lg {
    ::v-deep .slick-list {
      margin: 0px 100px;
    }
  }
  &--sm {
    ::v-deep .slick-list {
      margin: 0px 50px;
    }
  }
}
</style>
