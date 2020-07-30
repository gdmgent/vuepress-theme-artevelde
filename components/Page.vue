<template>
  <main class="page">
    <slot name="top" />

    <TestAlert displayText="z" />
    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import TestAlert from "@theme/components/TestAlert.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../styles/components/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
