<template>
  <svg class="icon bi" fill="currentColor">
    <use :xlink:href="getBootstrapIcons" />
  </svg>
</template>

<script>
import BootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

export default {
  computed: {
    getBootstrapIcons() {
      return BootstrapIcons + `#${this.name}`;
    },
  },
  methods: {
    hasName(name) {
      return name === this.name;
    },
  },
  props: {
    name: {
      type: String,
      default: "bootstrap",
      validator(value) {
        return [
          "arrow-left",
          "arrow-right",
          "book",
          "bootstrap",
          "box",
          "caret-down-fill",
          "caret-left-fill",
          "caret-right-fill",
          "caret-up-fill",
          "chat-quote",
          "clipboard-check",
          "download",
          "exclamation-circle",
          "exclamation-triangle",
          "file-earmark-code",
          "film",
          "folder2-open",
          "gift",
          "globe2",
          "hand-thumbs-down",
          "hand-thumbs-up",
          "info-circle",
          "list",
          "mouse",
          "pencil-square",
          "people",
          "question-circle",
          "star",
        ].includes(value);
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.bi {
  height: 1rem;
  width: 1rem;
  vertical-align: middle;
}
</style>