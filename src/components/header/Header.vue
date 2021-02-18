<template>
  <header
    id="application-header"
    class="header header--application"
    data-cy="application-header"
  >
    <logo width="120" />
    <hamburger />
  </header>
</template>

<script src="./Header.ts"></script>

<style lang="scss" scoped>
.header {
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-content: space-between;

  .hamburger {
    margin-left: auto;
  }
}
</style>
