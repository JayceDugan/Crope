<template>
  <section
    data-cy="mobile-menu"
    class="mobile-menu"
  >
    <button
      class="button button--reset button--close"
    >
      <div class="line"></div>
      <div class="line"></div>
    </button>

    <section class="mobile-menu__navigation">
      <navigation :links="links" />
    </section>
  </section>
</template>

<script src="./MobileMenu.ts"></script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: var(--z-index-highest);
  background: #080A12;
  padding: 60px 50px;

  .button--close {
    all: unset;
    height: 20px;
    width: 20px;
    position: relative;
    display: block;
    margin-left: auto;

    .line {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 3px;
      background: #fff;
      border-radius: 6px;

      &:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:nth-of-type(2) {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  &__navigation {}
}
</style>
