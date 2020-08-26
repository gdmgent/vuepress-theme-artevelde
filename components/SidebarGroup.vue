<template>
  <section
    :class="[
      'sidebar-group',
      `depth-${depth}`,
      {
        collapsable,
        'is-sub-group': depth !== 0
      },
    ]"
  >
    <RouterLink
      v-if="item.path"
      :class="['sidebar-heading clickable', {
        open,
        'active': isActive($route, item.path)
      }]"
      :to="item.path"
      @click.native="$emit('toggle')"
    >
      <span>{{ item.title }}</span>
      <span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />
    </RouterLink>

    <p v-else class="sidebar-heading" :class="{ open }" @click="$emit('toggle')">
      <span>{{ item.title }}</span>
      <span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />
    </p>

    <DropdownTransition>
      <SidebarLinks
        v-if="open || !collapsable"
        :depth="depth + 1"
        :items="item.children"
        :sidebar-depth="item.sidebarDepth"
        class="sidebar-group-items"
      />
    </DropdownTransition>
  </section>
</template>

<script>
import { isActive } from "../util";
import DropdownTransition from "@theme/components/DropdownTransition.vue";

export default {
  name: "SidebarGroup",

  components: {
    DropdownTransition,
  },

  props: ["item", "open", "collapsable", "depth"],

  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate() {
    this.$options.components.SidebarLinks = require("@theme/components/SidebarLinks.vue").default;
  },

  methods: { isActive },
};
</script>

<style lang="stylus">
.sidebar-group {
  .sidebar-group {
    padding-left: 0.5em;
  }

  &:not(.collapsable) {
    .sidebar-heading:not(.clickable) {
      color: inherit;
      cursor: auto;
    }
  }

  &.is-sub-group {
    padding-left: 0;

    & > .sidebar-heading {
      font-weight: normal;
      line-height: 1.4;
      padding-left: 2rem;

      &:not(.clickable) {
        opacity: 0.5;
      }
    }

    & > .sidebar-group-items {
      padding-left: 1rem;

      & > li > .sidebar-link {
        border-left: none;
      }
    }
  }

  &.depth-0 {
    font-size: 1.125rem;

    .sidebar-link {
      font-size: 1rem;
    }
  }

  &.depth-1 {
    font-size: 1rem;

    .sidebar-link {
      font-size: 0.9375rem;
    }
  }

  &.depth-2 {
    font-size: 0.9375rem;

    & > .sidebar-heading {
      border-left: none;
    }

    .sidebar-link {
      font-size: 0.875rem;
    }
  }
}

.sidebar-heading {
  border-left: 0.25rem solid transparent;
  box-sizing: border-box;
  color: $textColor;
  cursor: pointer;
  font-weight: bold;
  margin: 0;
  padding: 0.35rem 1.5rem 0.35rem 1.25rem;
  transition: color 0.15s ease;
  width: 100%;

  &.open, &:hover {
    color: inherit;
  }

  .arrow {
    left: 0.5em;
    position: relative;
    top: -0.12em;
  }

  &.clickable {
    &.active {
      border-left-color: $accentColor;
      color: $accentColor;
      font-weight: 600;
    }

    &:hover {
      color: $accentColor;
    }
  }
}

.sidebar-group-items {
  transition: height 0.1s ease-out;
  overflow: hidden;
}
</style>
