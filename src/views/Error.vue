<template>
  <div class="page-error">
    <img src="@/assets/tour/tour-bg-line.png" alt="" srcset="" />
    <h1>:( 404</h1>
    <div class="page-error__warning">
      <span>
        {{ $t("errorPage.warningA") }}
        <span class="page-error__link" @click="$router.push('/')">
          {{ $t("links.home") }}
        </span>
        {{ $t("errorPage.warningBs") }}
        <span class="page-error__link" href="mailto:service@nueip.com"
          >servie@nueip.com</span
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style lang="scss" scoped>
.page-error {
  width: 100%;
  height: calc(100vh - 60px);
  background: #fadbda;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  & h1 {
    color: $--color-white;
    font-size: 48px;
    margin-top: 40px;
  }
  &__warning {
    background-color: $--color-white;
    padding: 80px 20px;
    width: 60vw;
    min-width: 300px;
    text-align: center;
    font-weight: bold;
  }
  &__link {
    cursor: pointer;
    color: $--color-primary;
    &:hover {
      color: $--color-text-primary;
      text-decoration: underline;
    }
  }
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
  }
}
</style>
