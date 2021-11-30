<template>
  <div class="nu-layout">
    <div class="nu-layout__header">
      <nu-navbar />
    </div>
    <div class="nu-layout__main">
      <router-view />
    </div>
    <div class="nu-layout__footer">
      <nu-footer :hideFreeTrial="hideFreeTrial" />
    </div>
    <nu-back-top></nu-back-top>
  </div>
</template>

<script>
import NuNavbar from "./NuNavbar.vue";
import NuFooter from "./NuFooter.vue";
import NuBackTop from "./NuBackTop.vue";
import { mapGetters } from "vuex";
export default {
  name: "NuLayout",
  components: { NuNavbar, NuFooter, NuBackTop },
  computed: {
    ...mapGetters(["windowWidth"]),
    hideFreeTrial() {
      return this.$route.meta.hideFreeTrial;
    },
  },
  mounted() {
    // 掛載監聽事件
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      window.addEventListener("scroll", this.onScroll);
      this.onResize();
    });
  },
  destroyed() {
    // 移除監聽事件
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    /**
     * 當 resize 時，更新 文件長 、 文件寬 與 視窗長
     */
    onResize() {
      // 更新vuex
      this.$store.dispatch("window/setWindowWidth", window.innerWidth);
    },
    /**
     * 當 scroll 時，更新 vuex isScroll 狀態
     */
    onScroll() {
      this.$store.dispatch(
        "window/setIsScroll",
        Math.floor(window.document.documentElement.scrollTop)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.nu-layout {
  position: relative;
  &__header,
  &__main,
  &__footer {
    min-width: 300px;
  }
  &__header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 1002;
  }
  &__main {
    margin-top: 60px;
  }
}
</style>
