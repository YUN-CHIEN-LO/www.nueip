<template>
  <div class="home__security" :class="rdwClasses">
    <!-- 標題 -->
    <h1>{{ $t("homePage.security.title") }}</h1>
    <!-- 內容 -->
    <div class="home__security__content">
      <!-- 連線安全 -->
      <div class="home__security__block" data-aos="fade">
        <img src="@/assets/home/security-item-01.svg" alt="" srcset="" />
        <h2>{{ $t("homePage.security.item1.title") }}</h2>
        <p>{{ $t("homePage.security.item1.discription") }}</p>
      </div>
      <!-- 資料儲存 -->
      <div class="home__security__block" data-aos="fade">
        <img src="@/assets/home/security-item-02.svg" alt="" srcset="" />
        <h2>{{ $t("homePage.security.item2.title") }}</h2>
        <p>{{ $t("homePage.security.item2.discription") }}</p>
      </div>
      <!-- 資料控管 -->
      <div class="home__security__block" data-aos="fade">
        <img src="@/assets/home/security-item-03.svg" alt="" srcset="" />
        <h2>{{ $t("homePage.security.item3.title") }}</h2>
        <p>{{ $t("homePage.security.item3.discription") }}</p>
      </div>
      <!-- 登入認證 -->
      <div class="home__security__block" data-aos="fade">
        <img src="@/assets/home/security-item-04.svg" alt="" srcset="" />
        <h2>{{ $t("homePage.security.item4.title") }}</h2>
        <p>{{ $t("homePage.security.item4.discription") }}</p>
      </div>
      <!-- 主機機房 -->
      <div class="home__security__block" data-aos="fade">
        <img src="@/assets/home/security-item-05.svg" alt="" srcset="" />
        <h2>{{ $t("homePage.security.item5.title") }}</h2>
        <p>{{ $t("homePage.security.item5.discription") }}</p>
      </div>
      <!-- 異地備援 -->
      <div class="home__security__block" data-aos="fade">
        <img src="@/assets/home/security-item-06.svg" alt="" srcset="" />
        <h2>{{ $t("homePage.security.item6.title") }}</h2>
        <p>{{ $t("homePage.security.item6.discription") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { rwdThreshold } from "@/utils";
export default {
  name: "HomeSecurity",
  computed: {
    ...mapGetters(["windowWidth"]),
    /**
     * 判斷 RWD class
     */
    rdwClasses() {
      if (rwdThreshold(this.windowWidth) === "sm") {
        return "home__security--sm";
      } else {
        return "home__security--lg";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home__security {
  &__content {
    display: flex;
    flex-wrap: wrap;
  }
  &__block {
    padding: 20px 15px;
    padding: 20px 15px;
    text-align: center;
    transition-duration: 0.3s;
    & h2 {
      font-weight: bold;
      font-size: 24px;
    }
    & img {
      height: 100px;
    }
  }
  &--lg {
    & .home__security {
      &__block {
        width: 33.3%;
        &:hover {
          box-shadow: 0px 0px 10px 0px $--color-info;
        }
      }
    }
  }
  &--sm {
    & .home__security {
      &__block {
        width: 50%;
      }
    }
  }
}
</style>
