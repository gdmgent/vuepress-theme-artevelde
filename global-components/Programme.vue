<template>
  <strong v-if="noLink">{{ programme.name }}</strong>
  <a v-else :href="programme.url">{{ programme.name }}</a>
</template>

<script>
export default {
  created() {
    this.programme = this.$themeConfig.organisation.programmes[
      this.$themeConfig.data.programme
    ][this.lang];
  },
  props: {
    lang: {
      type: String,
      default: "nl-BE",
      validator(value) {
        return ["en-GB", "nl-BE"].includes(value);
      },
    },
    noLink: Boolean,
  },
};
</script>

<style lang="stylus" scoped></style>
