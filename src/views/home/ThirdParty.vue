<template>
  <div class="home__third-party">
    <h1>全方位第三方雲端服務整合</h1>
    <p>
      NUEiP雲端人資系統整合多種第三方雲端服務，如LINE、
      WeChat、Google、Microsoft
      365，免額外安裝APP，不改變使用者的習慣，全台首創LINE、WeChat打卡上下班，整合Google和Microsoft日曆、聯絡人與雲端硬碟等，讓您使用最習慣的雲端服務平台，手機就是您的雲端辦公室。
    </p>
    <div class="home__third-party__icons">
      <div class="home__third-party__icons__icon">
        <img src="@/assets/home/third-party-wechat.svg" alt="" />
      </div>
      <div class="home__third-party__icons__icon">
        <img src="@/assets/home/third-party-line.svg" alt="" />
      </div>
      <div class="home__third-party__icons__icon">
        <img src="@/assets/home/third-party-google.svg" alt="" />
      </div>

      <div class="home__third-party__icons__icon">
        <img src="@/assets/home/third-party-microsoft.svg" alt="" />
      </div>
    </div>
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
