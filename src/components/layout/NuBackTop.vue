<template>
  <transition name="fade">
    <div v-show="isScroll > 0" class="nu-back-top" @click="scrollTop">
      <i class="mdi mdi-chevron-up"></i>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NuBackTop",
  computed: {
    ...mapGetters(["isScroll"]),
  },
  methods: {
    /**
     * 向上捲動，回頁頂
     */
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.nu-back-top {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1001;
  & .mdi {
    color: $--color-white;
    font-size: 44px;
    font-weight: bold;
  }
}
</style>
