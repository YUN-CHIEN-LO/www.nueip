<template>
  <el-header class="nu-navbar">
    {{ windowWidth }} {{ isScroll }}
    <div class="nu-navbar__logo">
      <img src="@/assets/logo.svg" alt="Nueip Logo" srcset="" />
    </div>
    <div class="nu-navbar__menu" :class="rdwClasses">
      <div class="nu-navbar__menu--lg">Large</div>
      <div class="nu-navbar__menu--sm">Small</div>
    </div>
  </el-header>
</template>

<script>
import { mapGetters } from "vuex";
import { rwdThreshold } from "@/utils";
export default {
  name: "NuNavbar",
  computed: {
    ...mapGetters(["windowWidth", "isScroll"]),
    rdwClasses() {
      if (rwdThreshold(this.windowWidth) === "lg") {
        return "nu-navbar--lg";
      } else {
        return "nu-navbar--sm";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nu-navbar {
  border: solid 1px red;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: $--color-white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__logo {
    height: 36px;
    & img {
      height: 100%;
    }
  }
  &--lg {
    & .nu-navbar__menu--sm {
      display: none;
    }
  }
  &--sm {
    & .nu-navbar__menu--lg {
      display: none;
    }
  }
}
</style>
