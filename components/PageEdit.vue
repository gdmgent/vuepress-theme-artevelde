<template>
  <footer class="page-edit">
    <span class="copyright">&copy; {{ year }} {{ this.$themeLocaleConfig.organisation.school.name }}</span>
    <span v-if="lastUpdated" class="last-updated">
      <span class="prefix">{{ lastUpdatedText }}:</span>
      <span class="time">{{ lastUpdated }}</span>
    </span>
    <a
      v-if="editLink"
      :href="editLink"
      :title="editLinkText"
      class="edit-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <IconBootstrap name="pencil-square" />
    </a>
  </footer>
</template>

<script>
import isNil from "lodash/isNil";
import { endingSlashRE, outboundRE } from "../util";

export default {
  name: "PageEdit",

  computed: {
    year() {
      const date = new Date();
      return date.getFullYear();
    },
    lastUpdated() {
      return this.$page.lastUpdated;
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    },

    editLink() {
      const showEditLink = isNil(this.$page.frontmatter.editLink)
        ? this.$site.themeConfig.editLinks
        : this.$page.frontmatter.editLink;

      const {
        repo,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo,
      } = this.$site.themeConfig;

      if (showEditLink && docsRepo && this.$page.relativePath) {
        return this.createEditLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          this.$page.relativePath
        );
      }
      return null;
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
    },
  },

  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;
      return (
        base.replace(endingSlashRE, "") +
        `/edit` +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
        path
      );
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/components/wrapper.styl';

.page-edit {
  @extend $wrapper;
  align-items: center;
  display: flex;
  grid-row-start: footer;
  justify-content: space-between;
  overflow: auto;
  padding-bottom: 0;
  padding-top: 0;

  .last-updated {
    color: lighten($textColor, 90%);
  }
}

@media (max-width: $MQMobile) {
  .page-edit {
    .edit-link {
      margin-bottom: 0.5rem;
    }

    .last-updated {
      font-size: 0.8em;
    }
  }
}
</style>
