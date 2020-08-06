<template functional>
  <span :class="['badge', props.type]" :style="{verticalAlign: props.vertical}">
    <slot />
    {{ props.text }}
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "tip",
    },
    text: String,
    vertical: {
      type: String,
      default: "top",
    },
  },
};
</script>

<style lang="stylus" scoped>
.badge {
  background-color: #42b983;
  border-radius: 3px;
  color: white;
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;

  &.tip, &.green {
    background-color: $badgeTipColor;
  }

  &.error {
    background-color: $badgeErrorColor;
  }

  &.warning, &.warn, &.yellow {
    background-color: $badgeWarningColor;
  }

  & + & {
    margin-left: 5px;
  }
}
</style>
