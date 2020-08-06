<template>
  <strong>{{ department.name }}</strong>
</template>

<script>
export default {
  computed: {
    department() {
      return this.$themeConfig.organisation.departments[
        this.$themeConfig.data.department
      ][this.lang];
    },
  },
  props: {
    lang: {
      type: String,
      default: "nl-BE",
      validator(value) {
        return ["en-GB", "nl-BE"].includes(value);
      },
    },
  },
};
</script>

<style lang="stylus" scoped></style>
