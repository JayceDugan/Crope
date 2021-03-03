<template>
  <section
    data-cy="mobile-menu"
    class="mobile-menu"
  >
    <button class="button button--reset button--close">
      <div class="line"></div>
      <div class="line"></div>
    </button>

    <mobile-menu-navigation />

    <section class="mobile-menu__search">
      <text-input
        icon="search"
        displayLabel="false"
        placeholder="Search"
        iconAlignment="right"
      />
    </section>
  </section>
</template>

<script src="./MobileMenu.ts"></script>

<style lang="scss" scoped>
@mixin not-last {
  &:not(:last-of-type) {
    @content;
  }
}

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

  &__navigation {
    width: 100%;

    ::v-deep .nav {
      &__list {
        padding: 0;
        margin: 0;
      }

      &__item {
        text-align: center;

        @include not-last() {
          margin-bottom: 24px;
        }
      }

      &-list__link {
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 500;
        line-height: 130%;
        color: #A9AFC3;
      }
    }
  }
}
</style>
