<template>
  <nav class="navigation">
    <ul class="nav__list">
      <navigation-item
        v-for="(link, idx) in links"
        :key="`navigation-link-${idx}`"
        :link="link"
      />
    </ul>
  </nav>
</template>

<script src="./Navigation.ts"></script>
