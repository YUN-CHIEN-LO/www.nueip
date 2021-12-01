<template>
  <div class="home__security" :class="rdwClasses">
    <h1>資料安全有保障</h1>
    <div class="home__security__content">
      <div class="home__security__block">
        <img src="@/assets/home/security-item-01.svg" alt="" srcset="" />
        <h2>連線安全</h2>
        <p>SSL256bit加密傳輸</p>
      </div>
      <div class="home__security__block">
        <img src="@/assets/home/security-item-02.svg" alt="" srcset="" />
        <h2>資料儲存</h2>
        <p>重要資訊加密儲存</p>
      </div>
      <div class="home__security__block">
        <img src="@/assets/home/security-item-03.svg" alt="" srcset="" />
        <h2>資料控管</h2>
        <p>內部嚴格控管權限</p>
      </div>
      <div class="home__security__block">
        <img src="@/assets/home/security-item-04.svg" alt="" srcset="" />
        <h2>登入認證</h2>
        <p>兩道密碼安全把關</p>
      </div>
      <div class="home__security__block">
        <img src="@/assets/home/security-item-05.svg" alt="" srcset="" />
        <h2>主機機房</h2>
        <p>安全穩定(Google台灣機房)</p>
      </div>
      <div class="home__security__block">
        <img src="@/assets/home/security-item-06.svg" alt="" srcset="" />
        <h2>異地備援</h2>
        <p>資料即時異地備援</p>
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
