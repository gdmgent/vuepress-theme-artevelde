<template>
  <strong v-if="noLink">{{ school.name }}</strong>
  <img v-else-if="logo" :alt="school.name" :src="school.logo" />
  <a v-else :href="school.url">{{ school.name }}</a>
</template>

<script>
export default {
  created() {
    this.school = this.$themeLocaleConfig.organisation.school;
  },
  props: {
    locale: {
      type: String,
      default: null,
      validator(value) {
        return [null, "/", "/en/"].includes(value);
      },
    },
    logo: Boolean,
    noLink: Boolean,
  },
};
</script>

<style lang="stylus" scoped></style>
