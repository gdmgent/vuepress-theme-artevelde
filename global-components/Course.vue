<template>
  <span v-if="noLink">{{ $site.title }}</span>
  <a v-else :href="canvasLink">{{ $site.title }}</a>
</template>

<script>
export default {
  created() {
    const { canvas } = this.$site.themeConfig;

    this.canvasLink = canvas
      ? `https://arteveldehogeschool.instructure.com/courses/${canvas}`
      : null;
  },
  props: {
    noLink: Boolean,
  },
};
</script>

<style lang="stylus" scoped></style>
