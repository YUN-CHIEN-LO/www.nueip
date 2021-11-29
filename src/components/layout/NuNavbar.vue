<template>
  <div
    class="nu-navbar"
    :class="{ 'is-close-menu': showMenu }"
    v-clickoutside="
      () => {
        showMenu = false;
      }
    "
  >
    <!-- logo -->
    <div class="nu-navbar__logo">
      <img src="@/assets/logo.svg" alt="Nueip Logo" srcset="" />
    </div>
    <!-- 導覽 -->
    <div :class="rdwClasses">
      <!-- 導覽內容 -->
      <div class="nu-navbar__menu">
        <!-- 產品服務。 -->
        <div
          class="nu-navbar__menu__link"
          :class="{ 'is-close-submenu': showService }"
          @click="toggleService"
        >
          <span class="nu-navbar__menu__label">
            {{ $t("links.service") }}
            <span class="mdi mdi-plus"></span>
          </span>
          <!-- 細項 -->
          <div class="nu-navbar__menu__items">
            <div>{{ $t("links.hrm") }}</div>
            <div>{{ $t("links.eform") }}</div>
            <div>{{ $t("links.crm") }}</div>
            <div>{{ $t("links.bi") }}</div>
          </div>
        </div>
        <!-- 客戶見證 -->
        <div class="nu-navbar__menu__link">
          <span class="nu-navbar__menu__label">
            {{ $t("links.tesimonial") }}
          </span>
        </div>
        <!-- 價格 -->
        <div class="nu-navbar__menu__link">
          <span class="nu-navbar__menu__label"> {{ $t("links.price") }} </span>
        </div>
        <!-- 資訊專區 -->
        <div
          class="nu-navbar__menu__link"
          :class="{ 'is-close-submenu': showInfo }"
          @click="toggleInfo"
        >
          <span class="nu-navbar__menu__label">
            {{ $t("links.info") }} <span class="mdi mdi-plus"></span
          ></span>
          <!-- 細項 -->
          <div class="nu-navbar__menu__items">
            <div>{{ $t("links.course") }}</div>
            <div>{{ $t("links.blog") }}</div>
            <div>{{ $t("links.aboutus") }}</div>
          </div>
        </div>
        <!-- 聯絡我們 -->
        <div class="nu-navbar__menu__link">
          <span class="nu-navbar__menu__label">
            {{ $t("links.contact") }}
          </span>
        </div>
        <!-- 登入 -->
        <div class="nu-navbar__menu__link">
          <span class="nu-navbar__menu__label"> {{ $t("links.login") }} </span>
        </div>
        <!-- 免費使用 -->
        <div class="nu-navbar__menu__link">
          <span class="nu-navbar__menu__label nu-navbar__menu__outline">
            {{ $t("links.free") }}
          </span>
        </div>
      </div>
      <!-- 導覽 icon -->
      <div class="nu-navbar__toggle" @click="toggleMenu">
        <div class="nu-navbar__toggle__bar nu-navbar__toggle--bar1"></div>
        <div class="nu-navbar__toggle__bar nu-navbar__toggle--bar2"></div>
        <div class="nu-navbar__toggle__bar nu-navbar__toggle--bar3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { rwdThreshold } from "@/utils";
export default {
  name: "NuNavbar",
  computed: {
    ...mapGetters(["windowWidth"]),
    /**
     * 判斷 RWD class
     */
    rdwClasses() {
      if (rwdThreshold(this.windowWidth) === "lg") {
        return "nu-navbar--lg";
      } else {
        return "nu-navbar--sm";
      }
    },
  },
  data() {
    return {
      // 是否展開導覽
      showMenu: false,
      // 是否展開 產品服務細項
      showService: false,
      // 是否展開 資訊專區細項
      showInfo: false,
    };
  },
  watch: {
    windowWidth(newValue) {
      // 當大螢幕時，收合所有
      if (rwdThreshold(newValue) === "lg") {
        this.showMenu = false;
        this.showService = false;
        this.showInfo = false;
      }
    },
  },
  methods: {
    /**
     * 展開/收合導覽
     */
    toggleMenu() {
      if (rwdThreshold(this.windowWidth) === "sm")
        this.showMenu = !this.showMenu;
    },
    /**
     * 展開/收合 產品服務細項
     */
    toggleService() {
      if (rwdThreshold(this.windowWidth) === "sm")
        this.showService = !this.showService;
    },
    /**
     * 展開/收合 資訊專區細項
     */
    toggleInfo() {
      if (rwdThreshold(this.windowWidth) === "sm")
        this.showInfo = !this.showInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.nu-navbar {
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: $--color-white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 3px $--color-info-lighter;
  &__logo {
    height: 36px;
    cursor: pointer;
    & img {
      height: 100%;
    }
  }
  &__menu {
    transition-duration: 0.3s;
    &__label {
      cursor: pointer;
    }
    &__items {
      & div {
        cursor: pointer;
      }
    }
  }
  &__toggle {
    margin-right: 10px;
    &__bar {
      cursor: pointer;
      width: 30px;
      height: 5px;
      background-color: $--color-text-primary;
      border-radius: 15px;
      transform-origin: center center;
      transition-duration: 0.1s;
    }
    &--bar2 {
      margin: 5px 0px;
    }
  }
  &--lg {
    & .nu-navbar {
      &__menu {
        display: flex;
        &__link {
          position: relative;
          & .mdi-plus {
            display: none;
          }
          &:hover {
            & .nu-navbar__menu__items {
              display: block;
            }
          }
        }
        &__label {
          box-sizing: border-box;
          padding: 7px 15px;
          margin: 0px 5px;
          border: solid 3px $--color-white;
          border-radius: 20px;
          transition-duration: 0.3s;
          &:hover {
            border: solid 3px $--color-primary;
          }
        }
        &__items {
          display: none;
          position: absolute;
          top: calc(100% + 30px);
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          background-color: rgba(255, 255, 255, 0.5);
          & div {
            margin: 20px 10px;
            text-align: center;
            &:hover {
              position: relative;
              color: $--color-primary;
              &:before {
                z-index: -1;
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50%;
                background-color: $--color-warning;
                opacity: 0.5;
              }
            }
          }
          &:before {
            content: "";
            position: absolute;
            bottom: 100%;
            left: 0;
            width: 100%;
            height: 20px;
          }
        }
        &__outline {
          border: solid 3px $--color-primary;
          &:hover {
            background-color: $--color-primary;
            color: $--color-white;
          }
        }
      }
      &__toggle {
        display: none;
      }
    }
  }
  &--sm {
    & .nu-navbar {
      &__menu {
        position: absolute;
        top: 60px;
        left: 0;
        background-color: $--color-text-primary;
        max-height: 0px;
        overflow: hidden;
        padding: 0px 0px;
        width: 100%;
        &__link {
          width: 100%;
          padding: 10px 24px;
        }
        &__label {
          display: flex;
          justify-content: space-between;
          color: $--color-white;
          & .mdi-plus {
            color: $--color-white;
            margin-right: 10px;
            transition-duration: 0.3s;
          }
        }
        &__items {
          margin-top: 10px;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          max-height: 0px;
          overflow: hidden;
          transition-duration: 0.3s;
          padding: 0px 10px;
          & div {
            color: $--color-white;
            padding: 7px 15px;
            border-radius: 20px;
            font-size: 14px;
            &:hover {
              background-color: $--color-warning-light;
              color: $--color-primary;
            }
          }
        }
        &__outline {
          background-color: $--color-primary;
          margin: -10px -24px;
          padding: 10px 24px;
        }
      }
    }
  }
}
.is-close-menu {
  & .nu-navbar {
    &__toggle {
      &--bar1 {
        transform: translateY(10px) rotate(45deg);
      }
      &--bar2 {
        transform: scaleX(0);
      }
      &--bar3 {
        transform: translateY(-10px) rotate(-45deg);
      }
    }
    &__menu {
      max-height: calc(100vh - 60px);
      overflow: auto;
      padding: 20px 0px;
    }
  }
}
.is-close-submenu {
  & .nu-navbar__menu__items {
    padding: 5px 10px;
    max-height: 100vh;
    overflow: hidden;
  }
  & .mdi-plus {
    transform: rotate(225deg);
  }
}
</style>
