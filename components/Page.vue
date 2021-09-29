<template>
  <main class="page">
    <slot name="top" />
    <Content class="theme-default-content" />
    <PageNav v-bind="{ sidebarItems }" />
    <PageEdit />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../styles/components/wrapper.styl';

.no-sidebar {
  .page {
    --sidebarWidth: 0;
  }
}

@css {
  .page {
    column-gap: 2rem;
    grid-template-columns: [col-start] minmax(var(--sidebarWidth), 1fr) [content-start] minmax(0, 60rem) [content-end] 1fr [col-end];
    grid-template-rows: [row-start] auto [navigation] minmax(auto, 4rem) [footer] 4rem [row-end];
  }
}

// narrow desktop / iPad
@media (max-width: $MQNarrow) {
  .page {
    column-gap: 1rem;
  }
}

// wide mobile
@media (max-width: $MQMobile) {
@css {
  .page {
    grid-template-columns: [col-start] 0 [content-start] minmax(0, 60rem) [content-end] 0 [col-end];
  }
}
}

// narrow mobile
@media (max-width: $MQMobileNarrow) {
@css {
  .page {
    --sidebarWidth: 0;
  }
}
}
</style>
