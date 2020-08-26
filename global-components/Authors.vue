<template>
  <span v-html="author" />
</template>

<script>
export default {
  created() {
    const length = this.$themeConfig.data.authors.length;
    const and = this.$themeLocaleConfig.and;
    this.author = this.$themeConfig.data.authors.reduce(
      (accumulator, currentValue, index) => {
        if (1 < length) {
          if (index === length - 1) {
            currentValue = ` ${and} ${currentValue}`;
            if (and == "and" && 2 < length) {
              currentValue = `,${currentValue}`;
            }
          } else {
            currentValue = `, ${currentValue}`;
          }
        }

        return (accumulator += currentValue);
      }
    );
    this.author += `<br>${
      this.$themeLocaleConfig.organisation.teacher[1 < length ? 1 : 0]
    }`;
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
