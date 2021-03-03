<template>
  <section class="input-group input-group--text">
    <label
      v-if="displayLabel"
      v-bind="labelAttributes"
      class="input-group__label"
    >{{ label }}</label>
    <input
      v-bind="inputAttributes"
      class="input-group__input"
      v-model="valueBinding"
    />
  </section>
</template>

<script src="./TextInput.ts"></script>
