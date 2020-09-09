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

<style lang="stylus">
.key-combo {
  $bgColor = rgba(0, 0, 0, 0.1);
  align-items: baseline;
  background-color: $bgColor;
  border-radius: 0.125rem;
  box-shadow: 0 0.0625rem 0 0.3125rem $bgColor;
  display: inline-flex;
  font-family: $fontFamilyCode;
  margin: 0 0.25rem;

  > .char {
    line-height: 1;
    padding-left: 0.25rem;
    position: relative;
    text-align: center;
    top: 0.1875rem;

    &:not(:last-child) {
      padding-right: 0.25rem;
    }
  }
}
</style>
