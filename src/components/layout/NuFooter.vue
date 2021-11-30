<template>
  <div
    class="nu-footer"
    :class="[
      { 'is-desktop': isMobile === 'lg' },
      { 'is-mobile': isMobile === 'sm' },
    ]"
  >
    <!-- 立即免費適試用 -->
    <div class="nu-footer__free-trial">
      <!-- 標語 -->
      <div
        class="nu-footer__free-trial__slogan"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>{{ $t("layout.freeTrialSloganA") }}</h1>
        <h1>{{ $t("layout.freeTrialSloganB") }}</h1>
      </div>
      <!-- 連結按鈕 -->
      <div class="nu-footer__btn" data-aos="fade-up" data-aos-duration="800">
        {{ $t("layout.freeTrialBtn") }}
      </div>
    </div>
    <!-- 主要footer -->
    <div class="nu-footer__main">
      <!-- logo -->
      <div class="nu-footer__main__logo">
        <img src="@/assets/footer_logo.svg" alt="" />
      </div>
      <!-- 超連結 -->
      <div class="nu-footer__main__links">
        <!-- 產品服務 -->
        <div class="nu-footer__main__link">
          <h1>{{ $t("links.service") }}</h1>
          <div>
            <p>{{ $t("links.hrm") }}</p>
          </div>
          <div>
            <p>
              {{ $t("links.eform") }}
            </p>
          </div>
          <div>
            <p>
              {{ $t("links.crm") }}
            </p>
          </div>
          <div>
            <p>
              {{ $t("links.bi") }}
            </p>
          </div>
        </div>
        <!-- 資訊專區 -->
        <div class="nu-footer__main__link">
          <h1>{{ $t("links.info") }}</h1>
          <div>
            <p>
              {{ $t("links.course") }}
            </p>
          </div>
          <div>
            <p>
              {{ $t("links.blog") }}
            </p>
          </div>
          <div>
            <p>
              {{ $t("links.aboutus") }}
            </p>
          </div>
        </div>
        <!-- 關於 -->
        <div class="nu-footer__main__link">
          <h1>{{ $t("links.about") }}</h1>
          <div>
            <p>
              {{ $t("links.tesimonial") }}
            </p>
          </div>
          <div>
            <p>
              {{ $t("links.aboutus") }}
            </p>
          </div>
        </div>
        <!-- 其他連結 -->
        <div class="nu-footer__main__link nu-footer__main__other">
          <!-- 社群媒體icon -->
          <div class="nu-footer__main__other__icon">
            <!-- facebook -->
            <div class="nu-footer__icon">
              <span class="mdi mdi-facebook"></span>
            </div>
            <!-- youtube -->
            <div class="nu-footer__icon">
              <span class="mdi mdi-youtube"></span>
            </div>
          </div>
          <!-- 服務條款 -->
          <div>
            <p>{{ $t("links.term") }}</p>
          </div>
          <!-- 隱私權政策 -->
          <div>
            <p>{{ $t("links.privacy") }}</p>
          </div>
          <!-- 快捷鍵(大螢幕時出現) -->
          <div v-show="isMobile !== 'sm'" class="nu-footer__main__other__links">
            <!-- 免費試用 -->
            <div class="nu-footer__btn is-inversed">
              {{ $t("links.free") }}
            </div>
            <!-- 聯絡我們 -->
            <div class="nu-footer__btn is-inversed">
              {{ $t("links.login") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 分割線 -->
    <el-divider></el-divider>
    <!-- 版權申明 -->
    <div class="nu-footer__copy-right">
      {{ $t("layout.copyRight") }}
    </div>
    <!-- 快捷鍵(小螢幕時出現) -->
    <div class="nu-footer__shortcut">
      <!-- 免費試用 -->
      <div class="nu-footer__btn">
        {{ $t("links.free") }}
      </div>
      <!-- 聯絡我們 -->
      <div class="nu-footer__btn">
        {{ $t("links.contact") }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { rwdThreshold } from "@/utils";
export default {
  name: "NuFooter",
  computed: {
    ...mapGetters(["windowWidth"]),
    isMobile() {
      return rwdThreshold(this.windowWidth);
    },
  },
};
</script>

<style lang="scss" scoped>
.nu-footer {
  background-color: $--color-info-light;
  &__free-trial,
  &__shortcut {
    background-color: $--color-primary;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__free-trial {
    margin: 0px -20px;
    padding: 20px;
    flex-direction: column;
    &__slogan {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 20px 0px;
      & h1 {
        text-align: center;
        color: $--color-white;
        font-size: 48px;
        white-space: pre-wrap;
        margin: 0 10px;
      }
    }
  }
  &__main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    &__logo {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      & img {
        margin: 10px;
        width: 150px;
      }
    }
    &__links {
      flex: 3;
      display: flex;
      padding: 10px 20px;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
    }
    &__link {
      flex: 1;
      min-width: 150px;
      & h1 {
        font-size: 24px;
      }
      & div {
        & p {
          font-size: 18px;
          margin: 5px 0px;
          display: inline-block;
          position: relative;
          cursor: pointer;
          &:after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            background-color: $--color-primary;
            bottom: -3px;
            left: 0;
            transition-duration: 0.3s;
          }
          &:hover {
            color: $--color-primary;
            &:after {
              width: 100%;
            }
          }
        }
      }
    }
    &__other {
      min-width: 200px;
      &__icon,
      &__links {
        display: flex;
        margin-left: -5px;
        justify-content: center;
      }
    }
  }
  &__copy-right {
    font-size: 12px;
    text-align: right;
    padding: 0px 24px 24px 24px;
  }
  &__shortcut {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 5px;
  }
  &__btn {
    display: inline-block;
    color: $--color-white;
    border: solid 3px $--color-white;
    border-radius: 25px;
    padding: 7px 15px;
    cursor: pointer;
    font-weight: bold;
    margin: 5px;
    &:hover {
      background-color: $--color-white;
      color: $--color-primary;
    }
  }
  &__icon {
    display: inline-block;
    border: solid 3px $--color-primary;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 5px;
    cursor: pointer;
    & .mdi {
      transform: translateX(4px);
      font-size: 36px;
      text-align: center;
      color: $--color-primary;
    }
    &:hover {
      background-color: $--color-primary;
      & .mdi {
        color: $--color-white;
      }
    }
  }
  & .is-inversed {
    color: $--color-primary;
    border: solid 3px $--color-primary;
    &:hover {
      background-color: $--color-primary;
      color: $--color-white;
    }
  }
}
.is-desktop {
  & .nu-footer__main {
    flex-direction: row;
    &__links {
      text-align: left;
    }
    &__other {
      &__icon,
      &__links {
        justify-content: flex-start;
      }
    }
  }
}
.is-mobile {
  & .nu-footer {
    &__copy-right {
      padding-bottom: 84px;
    }
    &__shortcut {
      display: flex;
    }
  }
}
</style>
