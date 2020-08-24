<template>
  <span v-html="author" />
</template>

<script>
export default {
  created() {
    this.author = this.$themeConfig.data.authors[0];
  },
};
</script>
