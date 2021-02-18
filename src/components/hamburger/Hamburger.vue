<template>
  <button
    class="hamburger"
    :class="[active]"
    @click="toggle"
  >
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </button>
</template>

<script src="./Hamburger.ts"></script>

<style lang="scss" scoped>
.hamburger {
  all: unset;
  height: 20px;
  width: 30px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 50%;
    right: 0;
    width: 120%;
    height: 150%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background-color: #fff;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.25s linear;
  }

  &:hover,
  &:active {
    &::before {
      opacity: 0.2;
    }
  }

  .line {
    width: 30px;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;

    transition: transform 0.5s cubic-bezier(.27,.91,.83,.67) 0s, opacity 0.25s ease-in-out 0.5s;
  }

  &--active {
    transform: rotate(-45deg);

    &::before {
      opacity: 0.2;
    }

    & > :nth-child(2) {
      transform: translateX(-10px);
      transform-origin: center;
    }
  }
}
</style>
