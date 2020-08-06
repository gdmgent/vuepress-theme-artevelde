<template>
  <span>{{ academicYear }}</span>
</template>

<script>
export default {
  created() {
    this.academicYear = this.$themeConfig.data.academicYear;
  },
};
</script>

<style lang="stylus" scoped></style>
