<template functional>
  <a class="btn" :href="props.href">
    <IconBootstrap v-if="props.icon" :name="props.icon" />
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="stylus" scoped>
a.btn {
  border: 1px solid var(--color, black);
  border-radius: 0.25em;
  padding: 0.5rem 1rem;

  svg:first-child {
    padding-right: 0.5em;
    vertical-align: middle;
  }

  &:hover {
    color: white;
    background-color: var(--color, black);
    text-decoration: none !important;
  }
}
</style>
