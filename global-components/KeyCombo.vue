<template functional>
  <span class="key-combo">
    <slot />
  </span>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="stylus" scoped>
.key-combo {
  background-color: red;
  color: #333;
  background-color: #f7f7f7;
  font-family: $fontFamilyCode;
  font-size: 11px;
  font-weight: bold;
  padding: 0.1em 0.5em;
}
</style>
