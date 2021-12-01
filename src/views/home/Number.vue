<template>
  <div class="home__number" :class="rdwClasses" ref="number">
    <!-- 目前使用企業家數 -->
    <div class="home__number__block">
      <h2>{{ companyNumShow }} +</h2>
      <p>{{ $t("homePage.numbers.company") }}</p>
    </div>
    <!-- LINE打卡用戶數 -->
    <div class="home__number__block">
      <h2>{{ lineNumShow }} +</h2>
      <p>{{ $t("homePage.numbers.line") }}</p>
    </div>
    <!-- 系統已使用人數 -->
    <div class="home__number__block">
      <h2>{{ userNumShow }} +</h2>
      <p>{{ $t("homePage.numbers.user") }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { rwdThreshold } from "@/utils";
export default {
  name: "HomeNumber",
  computed: {
    ...mapGetters(["windowWidth", "isScroll"]),
    /**
     * 判斷 RWD class
     */
    rdwClasses() {
      if (rwdThreshold(this.windowWidth) === "sm") {
        return "home__number--sm";
      } else {
        return "home__number--lg";
      }
    },
  },
  watch: {
    /**
     * 監聽element的scroll位置
     */
    isScroll() {
      const topOffset = this.$refs.number.getBoundingClientRect().top;
      const windowHieght = window.innerHeight;
      if (this.flag) {
        if (windowHieght - topOffset > 100) {
          this.run();
          this.flag = false;
        }
      } else {
        if (windowHieght - topOffset < 0) {
          // 重製counter
          this.flag = true;
          this.companyNumShow = 0;
          this.lineNumShow = 0;
          this.userNumShow = 0;
        }
      }
    },
  },
  props: {
    companyNum: {
      type: Number,
      default: 0,
    },
    lineNum: {
      type: Number,
      default: 0,
    },
    userNum: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      companyNumShow: 0,
      lineNumShow: 0,
      userNumShow: 0,
      flag: true,
    };
  },
  methods: {
    /**
     * 數字累加效果
     */
    run() {
      const companyDiff = Math.floor(
        (this.companyNum - this.companyNumShow) * 0.1
      );
      const lineDiff = Math.floor((this.lineNum - this.lineNumShow) * 0.1);
      const userDiff = Math.floor((this.userNum - this.userNumShow) * 0.1);

      if (companyDiff === 0 && lineDiff === 0 && userDiff === 0) {
        // 計算完成
        this.companyNumShow = this.companyNum;
        this.lineNumShow = this.lineNum;
        this.userNumShow = this.userNum;
      } else {
        this.userNumShow =
          this.userNumShow < this.userNum
            ? this.userNumShow + userDiff
            : this.userNum;

        this.companyNumShow =
          this.companyNumShow < this.companyNum
            ? this.companyNumShow + companyDiff
            : this.companyNum;

        this.lineNumShow =
          this.lineNumShow < this.lineNum
            ? this.lineNumShow + lineDiff
            : this.lineNum;
        setTimeout(this.run, 0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home__number {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h2 {
      color: $--color-warning;
      margin: 0;
    }
  }
  &--lg {
    & .home__number {
      &__block {
        width: 33.3%;
        & h2 {
          font-size: 5vw;
        }
      }
    }
  }
  &--sm {
    & .home__number {
      &__block {
        width: 100%;
        & h2 {
          font-size: 64px;
        }
      }
    }
  }
}
</style>
