<template>
  <span v-if="noLink">
    {{ $site.title }}
    <AcademicYear v-if="!noAcademicYear" />
  </span>
  <a v-else :href="canvasLink">
    {{ $site.title }}
    <AcademicYear v-if="!noAcademicYear" />
  </a>
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
    noAcademicYear: Boolean,
    noLink: Boolean,
  },
};
</script>