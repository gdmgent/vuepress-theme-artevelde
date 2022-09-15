<template functional>
  <span class="menu-sequence">
    <slot />
  </span>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.menu-sequence {
  $bgColor = lighten($ahs-black, 25%);
  align-items: baseline;
  background-color: $bgColor;
  border-radius: 0.125rem;
  box-shadow: 0 0 0 0.125rem $bgColor;
  color: $ahs-white;
  display: inline-flex;
  font-family: $fontFamilyCode;
  margin: 0 0.25rem;
  padding: 0 0.5rem;

  :deep(> .char) {
    line-height: 1;
    min-width: 1rem;
    padding: 0.125rem;
    position: relative;
    text-align: center;
    top: 0.125rem;
  }
}
</style>
