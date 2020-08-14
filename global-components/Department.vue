<template>
  <strong>{{ department.name }}</strong>
</template>

<script>
export default {
  created() {
    this.department = this.$themeLocaleConfig.organisation.departments[
      this.$themeConfig.data.department
    ];
  },
  props: {
    locale: {
      type: String,
      default: null,
      validator(value) {
        return [null, "/", "/en/"].includes(value);
      },
    },
  },
};
</script>

<style lang="stylus" scoped></style>
