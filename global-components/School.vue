<template>
  <strong v-if="noLink">{{ school.name }}</strong>
  <img v-else-if="logo" :alt="school.name" :src="school.logo" />
  <a v-else :href="school.url">{{ school.name }}</a>
</template>

<script>
export default {
  created() {
    this.school = this.$themeConfig.organisation.school[this.lang];
  },
  props: {
    lang: {
      type: String,
      default: "nl-BE",
      validator(value) {
        return ["en-GB", "nl-BE"].includes(value);
      },
    },
    logo: Boolean,
    noLink: Boolean,
  },
};
</script>

<style lang="stylus" scoped></style>
