<template>
  <div v-if="prev || next" class="page-nav">
    <div class="inner">
      <Button v-if="prev" icon="arrow-left" :href="prev.path">{{ prev.title || prev.path }}</Button>
      <Button
        v-if="next"
        :href="next.path"
        icon="arrow-right"
        icon-right
      >{{ next.title || next.path }}</Button>
    </div>
  </div>
</template>

<script>
import { resolvePage } from "../util";
import isString from "lodash/isString";
import isNil from "lodash/isNil";

export default {
  name: "PageNav",

  props: ["sidebarItems"],

  computed: {
    prev() {
      return resolvePageLink(LINK_TYPES.PREV, this);
    },

    next() {
      return resolvePageLink(LINK_TYPES.NEXT, this);
    },
  },
};

function resolvePrev(page, items) {
  return find(page, items, -1);
}

function resolveNext(page, items) {
  return find(page, items, 1);
}

const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next,
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev,
  },
};

function resolvePageLink(
  linkType,
  { $themeConfig, $page, $route, $site, sidebarItems }
) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType;

  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig);

  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page);

  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig;

  if (link === false) {
    return;
  } else if (isString(link)) {
    return resolvePage($site.pages, link, $route.path);
  } else {
    return resolveLink($page, sidebarItems);
  }
}

function find(page, items, offset) {
  const res = [];
  flatten(items, res);
  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    if (cur.type === "page" && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset];
    }
  }
}

function flatten(items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === "group") {
      flatten(items[i].children || [], res);
    } else {
      res.push(items[i]);
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/components/wrapper.styl';

.page-nav {
  @extend $wrapper;
  padding-bottom: 0;
  grid-row-start: navigation;

  .inner {
    border-top: 1px solid $borderColor;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 1rem;

    .btn-left {
      grid-column-start: 1;
      justify-self: start;
    }

    .btn-right {
      grid-column-start: 2;
      justify-self: end;
    }
  }
}
</style>
