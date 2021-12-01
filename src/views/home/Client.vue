<template>
  <div class="home__client" :class="rdwClasses">
    <!-- 標題 -->
    <h1>{{ $t("homePage.client.title") }}</h1>
    <!-- 客戶列表 -->
    <div class="home__client__content">
      <div v-for="x in HOME_CLIENTS" :key="x" class="home__client__block">
        <img :src="require('@/assets/home/clients/' + x)" alt="" />
      </div>
    </div>
    <!-- 更多客戶見證 -->
    <div class="nueip__btn nueip__btn--dark">
      {{ $t("links.moreTestmonial") }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { rwdThreshold } from "@/utils";
import HOME_CLIENTS from "@/json/HOME_CLIENTS.json";
export default {
  name: "HomeClient",
  computed: {
    ...mapGetters(["windowWidth"]),
    /**
     * 判斷 RWD class
     */
    rdwClasses() {
      if (rwdThreshold(this.windowWidth) === "lg") {
        return "home__client--lg";
      } else {
        return "home__client--sm";
      }
    },
  },
  data() {
    return { HOME_CLIENTS: HOME_CLIENTS };
  },
};
</script>

<style lang="scss" scoped>
.home__client {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__block {
    display: inline-block;
    opacity: 0.8;
    & img {
      width: 100%;
    }
  }
  &--lg {
    & .home__client {
      &__block {
        width: 20%;
      }
    }
  }
  &--sm {
    & .home__client {
      &__block {
        width: 33.3%;
      }
    }
  }
}
</style>
