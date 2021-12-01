<template>
  <div class="home-advantage" :class="rdwClasses">
    <h1>{{ $t("homePage.advantage.title") }}</h1>
    <div class="home-advantage__content">
      <div class="home-advantage__block" data-aos="fade-up">
        <h2>{{ $t("homePage.advantage.item1.title") }}</h2>
        <img src="@/assets/home/advantage-item-01.svg" alt="" />
        <p>
          {{ $t("homePage.advantage.item1.discription") }}
        </p>
      </div>
      <div class="home-advantage__block" data-aos="fade-up" data-aos-delay="50">
        <h2>{{ $t("homePage.advantage.item2.title") }}</h2>
        <img src="@/assets/home/advantage-item-02.svg" alt="" />
        <p>
          {{ $t("homePage.advantage.item2.discription") }}
        </p>
      </div>
      <div
        class="home-advantage__block"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2>{{ $t("homePage.advantage.item3.title") }}</h2>
        <img src="@/assets/home/advantage-item-03.svg" alt="" />
        <p>
          {{ $t("homePage.advantage.item3.discription") }}
        </p>
      </div>
      <div
        class="home-advantage__block"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <h2>{{ $t("homePage.advantage.item4.title") }}</h2>
        <img src="@/assets/home/advantage-item-04.svg" alt="" />
        <p>
          {{ $t("homePage.advantage.item4.discription") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeAdvantage",
  computed: {
    ...mapGetters(["windowWidth"]),
    /**
     * 判斷 RWD class
     */
    rdwClasses() {
      if (this.windowWidth > 1200) {
        return "home-advantage--lg";
      } else if (this.windowWidth < 768) {
        return "home-advantage--sm";
      } else {
        return "home-advantage--md";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home-advantage {
  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  &__block {
    display: flex;
    flex-direction: column;
    & h2,
    & p {
      text-align: center;
    }
    & h2 {
      white-space: pre-line;
      font-size: 24px;
      font-weight: bold;
    }
  }
  &--lg {
    & .home-advantage {
      &__block {
        margin: 20px 0px;
        padding: 0px 30px;
        height: 50vh;
        width: 280px;
        position: relative;
        & p {
          display: none;
          margin: 10px;
        }
        & img {
          width: 80%;
          margin-right: auto;
          margin-left: auto;
          display: block;
        }
        &:before {
          content: "";
          position: absolute;
          top: -201px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: calc(100% + 271px);
          z-index: -1;
          box-sizing: border-box;
          transition-duration: 0.3s;
          border: solid 10px rgba(0, 0, 0, 0);
        }
        &:hover {
          & h2,
          & p {
            color: $--color-white;
          }
          cursor: default;
          & p {
            display: block;
          }
          & img {
            display: none;
          }
          &:before {
            border: solid 10px $--color-primary;
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
  &--md,
  &--sm {
    & .home-advantage {
      &__block {
        width: calc(50% - 20px);
        min-width: 300px;
        padding: 15px;
        margin: 10px;
        box-sizing: border-box;
        background-color: rgba($--color-info-light, 0.5);
        align-items: center;
        border-radius: 10px;
        & img {
          height: 180px;
        }
        & p {
          width: 100%;
          max-width: 300px;
        }
      }
    }
  }
  &--sm {
    & .home-advantage {
      &__block {
        width: 100%;
      }
    }
  }
}
</style>
