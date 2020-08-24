<template>
  <strong v-if="noLink">{{ programme.name }}</strong>
  <a v-else :href="programme.url">{{ programme.name }}</a>
</template>

<script>
export default {
  created() {
    this.programme = this.$themeLocaleConfig.organisation.programmes[
      this.$themeConfig.data.programme
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
    noLink: Boolean,
  },
};
</script>