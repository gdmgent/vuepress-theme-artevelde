<template>
  <a v-if="external" :class="['btn', iconRight ? 'btn-right' : 'btn-left']" :href="href">
    <Icon v-if="!iconRight && icon" :name="icon" />
    <slot />
    <Icon v-if="iconRight && icon" :name="icon" />
  </a>
  <RouterLink
    v-else
    :class="['btn', iconRight ? 'btn-right' : 'btn-left']"
    :to="href"
    :exact="exact"
    @focusout.native="focusoutAction"
  >
    <Icon v-if="!iconRight && icon" :name="icon" />
    <slot />
    <Icon v-if="iconRight && icon" :name="icon" />
  </RouterLink>
</template>

<script>
export default {
  props: {
    exact: Boolean,
    external: Boolean,
    href: {
      type: String,
    },
    icon: {
      type: String,
      default: null,
    },
    iconRight: Boolean,
  },
};
</script>

<style lang="stylus" scoped>
a.btn {
  border: 1px solid var(--color, black);
  border-radius: 0.25em;
  padding: 0.5rem 1rem;
  white-space: nowrap;

  &:hover {
    color: white;
    background-color: var(--color, black);
    text-decoration: none !important;
  }

  svg {
    vertical-align: middle;
  }

  &.btn-left {
    svg:first-child {
      padding-right: 0.5rem;
    }
  }

  &.btn-right {
    svg:last-child {
      padding-left: 0.5rem;
    }
  }
}
</style>