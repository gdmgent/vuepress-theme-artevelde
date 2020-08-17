<template functional>
  <span class="menu-sequence">
    <slot />
  </span>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.menu-sequence {
  $bgColor = rgba(0, 0, 0, 0.1);
  align-items: baseline;
  background-color: $bgColor;
  border-radius: 0.125rem;
  box-shadow: 0 0 0 0.125rem $bgColor;
  display: inline-flex;
  font-family: $fontFamilyCode;
  padding: 0 0.5rem;
  margin: 0 0.25rem;

  > .char {
    line-height: 1;
    min-width: 1rem;
    padding: 0.125rem;
    position: relative;
    text-align: center;
    top: 2px;
  }
}
</style>
