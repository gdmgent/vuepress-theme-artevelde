<template>
  <div :class="['custom-block', type]">
    <p class="custom-block-title">
      <Icon :name="icon" />
      <strong v-html="info" />
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
    icon: {
      type: String,
    },
    info: {
      type: String,
    },
  },
};
</script>

<style lang="stylus" scoped></style>