<template>
  <span :class="['badge', type]" :style="{verticalAlign: vertical}">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return [
          "default",
          "error",
          "green",
          "orange",
          "red",
          "tip",
          "warning",
        ].includes(value);
      },
    },
    vertical: {
      type: String,
      default: "baseline",
      validator(value) {
        return ["baseline", "bottom", "middle", "top"].includes(value);
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.badge {
  background-color: $accentColor;
  border-radius: 0.25rem;
  color: white;
  display: inline-block;
  font-size: 0.625rem;
  height: 1.125rem;
  line-height: 1.125rem;
  padding: 0.0625rem 0.3125rem;

  &.green, &.tip {
    background-color: $badgeTipColor;
  }

  &.orange, &.warning {
    background-color: $badgeWarningColor;
  }

  &.red, &.error {
    background-color: $badgeErrorColor;
  }

  & + & {
    margin-left: 5px;
  }
}
</style>
