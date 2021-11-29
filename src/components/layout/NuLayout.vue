<template>
  <el-container class="nu-layout">
    <nu-navbar></nu-navbar>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import NuNavbar from "./NuNavbar.vue";
import { mapGetters } from "vuex";
export default {
  name: "NuLayout",
  components: { NuNavbar },
  computed: {
    ...mapGetters(["windowWidth"]),
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
  border: solid 1px red;
}
</style>
