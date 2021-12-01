<template>
  <div class="home__third-party">
    <h1>{{ $t("homePage.thirdParty.title") }}</h1>
    <p>{{ $t("homePage.thirdParty.discription") }}</p>
    <div class="home__third-party__icons">
      <div class="home__third-party__icons__icon" data-aos="fade">
        <img src="@/assets/home/third-party-wechat.svg" alt="" />
      </div>
      <div
        class="home__third-party__icons__icon"
        data-aos="fade"
        data-aos-delay="100"
      >
        <img src="@/assets/home/third-party-line.svg" alt="" />
      </div>
      <div
        class="home__third-party__icons__icon"
        data-aos="fade"
        data-aos-delay="200"
      >
        <img src="@/assets/home/third-party-google.svg" alt="" />
      </div>

      <div
        class="home__third-party__icons__icon"
        data-aos="fade"
        data-aos-delay="300"
      >
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
