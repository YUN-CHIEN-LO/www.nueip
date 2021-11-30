<template>
  <div class="home-page">
    <!-- Banner 圖片 -->
    <VueSlickCarousel
      class="home-page__banner home-page--full"
      :arrows="true"
      fade
    >
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
    <div class="home-page__intro home-page--full">
      <home-intro />
    </div>
    <div class="home-page__third-party"></div>
    <div class="home-page__advantage"></div>
    <div class="home-page__security"></div>
    <div class="home-page__number"></div>
    <div class="home-page__client"></div>
    <div class="home-page__media"></div>
  </div>
</template>

<script>
import HomeBanner from "./Banner.vue";
import HomeIntro from "./Intro.vue";
import BANNER from "@/json/BANNER.json";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  name: "Home",
  components: { HomeBanner, VueSlickCarousel, HomeIntro },
  data() {
    return {
      BANNER: BANNER,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  &--full {
    width: 100%;
  }
  &__banner {
    height: calc(100vh - 60px);
    @include fixBgImg("../../assets/home/home-bg-line.webp");
  }
  &__intro {
    @include fixBgImg("../../assets/home/home-bg.webp");
  }
}
</style>
