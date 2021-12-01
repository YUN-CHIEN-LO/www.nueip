<template>
  <div class="home__third-party">
    <!-- 標題 -->
    <h1>{{ $t("homePage.thirdParty.title") }}</h1>
    <!-- 內容 -->
    <p>{{ $t("homePage.thirdParty.discription") }}</p>
    <!-- icon -->
    <div class="home__third-party__icons">
      <!-- wechat -->
      <div class="home__third-party__icons__icon" data-aos="fade">
        <img src="@/assets/home/third-party-wechat.svg" alt="" />
      </div>
      <!-- line -->
      <div
        class="home__third-party__icons__icon"
        data-aos="fade"
        data-aos-delay="100"
      >
        <img src="@/assets/home/third-party-line.svg" alt="" />
      </div>
      <!-- google -->
      <div
        class="home__third-party__icons__icon"
        data-aos="fade"
        data-aos-delay="200"
      >
        <img src="@/assets/home/third-party-google.svg" alt="" />
      </div>
      <!-- microsoft -->
      <div
        class="home__third-party__icons__icon"
        data-aos="fade"
        data-aos-delay="300"
      >
        <img src="@/assets/home/third-party-microsoft.svg" alt="" />
      </div>
    </div>
    <!-- 了解更多 -->
    <div class="nueip__btn nueip__btn--inversed">
      {{ $t("links.more") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeThirdParty",
};
</script>
<style lang="scss" scoped>
.home__third-party {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1,
  & p {
    color: $--color-white;
    text-align: center;
  }
  & p,
  &__icons {
    max-width: 500px;
  }
  &__icons {
    display: flex;
    justify-content: space-evenly;
    &__icon {
      max-width: 130px;
      & img {
        width: 100%;
      }
    }
  }
}
</style>
