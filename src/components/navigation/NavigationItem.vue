<template>
  <li class="nav__item">
    <router-link
      :to="to"
      class="nav-list__link"
    >
      {{ text }}
    </router-link>
  </li>
</template>

<script src="./NavigationItem.ts"></script>

<style lang="scss">
.nav-list__link {
  color: white;
}
</style>
