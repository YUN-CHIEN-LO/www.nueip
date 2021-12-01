<template>
  <div class="home__intro" :class="rdwClasses">
    <h1 class="home__intro__title">{{ $t("homePage.intro.title") }}</h1>
    <div class="home__intro__wrapper">
      <div class="home__intro__circle">
        <img src="@/assets/home/tour-circle.png" alt="" srcset="" />
      </div>
      <div class="home__intro__icons">
        <div
          v-for="x in HOME_ICONS.slice(0, 4)"
          :key="x.id"
          class="home__intro__icon"
          :style="iconStyle(x.id)"
          @click="$router.push(x.url)"
        >
          <img :src="require('@/assets/home/' + x.img)" alt="" srcset="" />
        </div>
      </div>
      <div class="home__intro__icons">
        <div
          v-for="x in HOME_ICONS.slice(4, 8)"
          :key="x.id"
          class="home__intro__icon"
          :style="iconStyle(x.id)"
          @click="$router.push(x.url)"
        >
          <img :src="require('@/assets/home/' + x.img)" alt="" srcset="" />
        </div>
      </div>
      <div class="home__intro__content">
        <h2>{{ $t("homePage.intro.subtitle") }}</h2>
        <p>
          {{ $t("homePage.intro.discription") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { rwdThreshold } from "@/utils";
import HOME_ICONS from "@/json/HOME_ICONS.json";
export default {
  name: "HomeIntro",
  data() {
    return {
      HOME_ICONS: HOME_ICONS,
    };
  },
  computed: {
    ...mapGetters(["windowWidth"]),
    /**
     * 判斷 RWD class
     */
    rdwClasses() {
      if (rwdThreshold(this.windowWidth) === "sm") {
        return "home__intro--sm";
      } else {
        return "home__intro--lg";
      }
    },
  },
  methods: {
    iconStyle(id) {
      let ret = {};
      if (rwdThreshold(this.windowWidth) === "sm") return ret;

      switch (id) {
        case "eform":
          ret.top = 0;
          ret.left = "50%";
          break;
        case "approval":
          ret.top = "15%";
          ret.left = "85%";
          break;
        case "performanceappraisal":
          ret.top = "50%";
          ret.left = "100%";
          break;
        case "timeoff":
          ret.top = "85%";
          ret.left = "85%";
          break;
        case "shiftscheduling":
          ret.top = "100%";
          ret.left = "50%";
          break;
        case "companyintranet":
          ret.top = "85%";
          ret.left = "15%";
          break;
        case "payroll":
          ret.top = "50%";
          ret.left = "0%";
          break;
        case "attendance":
          ret.top = "15%";
          ret.left = "15%";
          break;
        default:
          ret.top = "50%";
          ret.left = "50%";
          break;
      }
      return ret;
    },
  },
};
</script>

<style lang="scss" scoped>
.home__intro {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  & * {
    z-index: 2;
  }
  &__content {
    text-align: center;
    & h2 {
      font-weight: bold;
      font-size: 24px;
    }
  }
  &__icon {
    background-color: rgba($--color-white, 0.8);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition-duration: 0.1s;
    &:hover {
      animation: throb 1s linear infinite;
    }
  }
  &--lg {
    & .home__intro {
      &__wrapper {
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 30px;
      }
      &__content {
        width: 300px;
        & h2 {
          margin-top: 0;
        }
      }
      &__circle {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-origin: center center;
        animation: circle 20s linear infinite;
        & img {
          width: 100%;
        }
      }
      &__icon {
        position: absolute;
        width: 100px;
        height: 100px;
        transform: translate(-50%, -50%);
        & img {
          width: 40%;
        }
      }
    }
  }
  &--sm {
    & .home__intro {
      &__title {
        margin-top: 50px;
      }
      &__wrapper {
        margin: 0px 15px;
      }
      &__circle {
        display: none;
      }
      &__icons,
      &__content {
        max-width: 500px;
        margin-right: auto;
        margin-left: auto;
      }
      &__icons {
        display: flex;
        justify-content: space-evenly;
      }
      &__icon {
        width: 20vw;
        height: 20vw;
        max-width: 80px;
        max-height: 80px;
        margin: 10px 0px;
        & img {
          width: 60%;
        }
      }
    }
  }
}
@include keyframes(circle) {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@include keyframes(throb) {
  0%,
  50% {
    box-shadow: 0px 0px 0px 0px $--color-primary;
  }
  70% {
    box-shadow: 0px 0px 0px 3px rgba($--color-primary, 0.5);
  }
  80% {
    box-shadow: 0px 0px 0px 10px rgba($--color-primary, 0.2);
  }
  100% {
    box-shadow: 0px 0px 0px 15px rgba($--color-primary, 0);
  }
}
</style>
