<template>
  <nav v-if="userLinks.length || repoLink" class="nav-links">
    <div v-for="item in userLinks" :key="item.link" class="nav-item">
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>
    <div v-if="canvasLink" class="nav-item nav-icon">
      <a
        :href="canvasLink"
        class="nav-link nav-button"
        target="_blank"
        rel="noopener noreferrer"
        :title="canvasLabel"
      >
        <IconBootstrap name="canvas" />
        <span>
          {{ canvasLabel }}
          <OutboundLink />
        </span>
      </a>
    </div>
    <div v-if="canvasLink" class="nav-item nav-icon">
      <a
        :href="repoLink"
        class="nav-link nav-button"
        target="_blank"
        rel="noopener noreferrer"
        :title="repoLabel"
      >
        <IconFontAwesomeBrand name="github" />
        <span>
          {{ repoLabel }}
          <OutboundLink />
        </span>
      </a>
    </div>
  </nav>
</template>

<script>
import { resolveNavLinkItem } from "../util";

import DropdownLink from "@theme/components/DropdownLink.vue";
import NavLink from "@theme/components/NavLink.vue";

export default {
  name: "NavLinks",

  components: {
    NavLink,
    DropdownLink,
  },

  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },

    nav() {
      const { locales } = this.$site;
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path;
        const routes = this.$router.options.routes;
        const themeLocales = this.$site.themeConfig.locales || {};
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || "Languages",
          ariaLabel: this.$themeLocaleConfig.ariaLabel || "Select language",
          items: Object.keys(locales).map((path) => {
            const locale = locales[path];
            const text =
              (themeLocales[path] && themeLocales[path].label) || locale.lang;
            let link;
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink;
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path);
              // fallback to homepage
              if (!routes.some((route) => route.path === link)) {
                link = path;
              }
            }
            return { text, link };
          }),
        };
        return [...this.userNav, languageDropdown];
      }
      return this.userNav;
    },

    userLinks() {
      return (this.nav || []).map((link) => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem),
        });
      });
    },

    canvasLabel() {
      return this.$site.themeConfig.canvasLabel;
    },

    canvasLink() {
      const { canvas } = this.$site.themeConfig;
      if (canvas) {
        return `https://arteveldehogeschool.instructure.com/courses/${canvas}`;
      }
      return null;
    },

    repoLabel() {
      return this.$site.themeConfig.repoLabel;
    },

    repoLink() {
      const { repo } = this.$site.themeConfig;
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
      }
      return null;
    },
  },
};
</script>

<style lang="stylus">
.nav-links {
  display: inline-block;
  margin-left: 0.5rem;

  a {
    color: inherit;
    line-height: 1.4rem;

    &:hover, &.router-link-active {
      color: $accentColor;
    }
  }

  .nav-item {
    display: inline-block;
    line-height: 2rem;
    margin-left: 1.5rem;
    position: relative;

    &:first-child {
      margin-left: 0;
    }
  }
}

.navbar {
  .nav-icon {
    span {
      display: none;
    }
  }
}

@media (max-width: $MQMobile) {
  .nav-links {
    .nav-item {
      margin-left: 0;
    }

    .nav-canvas, .nav-repo {
      display: none;
    }
  }
}

@media (min-width: $MQMobile) {
  .nav-links a {
    &:hover, &.router-link-active {
      color: $textColor;
    }
  }

  .nav-item > a:not(.external) {
    &:hover, &.router-link-active {
      margin-bottom: -2px;
      border-bottom: 2px solid lighten($accentColor, 8%);
    }
  }
}
</style>
