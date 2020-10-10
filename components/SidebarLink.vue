<script>
import { isActive, hashRE, groupHeaders } from "../util";

export default {
  functional: true,

  props: ["item", "sidebarDepth"],

  render(
    h,
    {
      parent: { $page, $site, $route, $themeConfig, $themeLocaleConfig },
      props: { item, sidebarDepth },
    }
  ) {
    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = isActive($route, item.path);
    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active =
      item.type === "auto"
        ? selfActive ||
          item.children.some((c) =>
            isActive($route, item.basePath + "#" + c.slug)
          )
        : selfActive;
    const link =
      item.type === "external"
        ? renderExternal(h, item.path, item.title || item.path)
        : renderLink(h, item.path, item.title || item.path, active);

    const maxDepth = [
      $page.frontmatter.sidebarDepth,
      sidebarDepth,
      $themeLocaleConfig.sidebarDepth,
      $themeConfig.sidebarDepth,
      1,
    ].find((depth) => depth !== undefined);

    const displayAllHeaders =
      $themeLocaleConfig.displayAllHeaders || $themeConfig.displayAllHeaders;

    if (item.type === "auto") {
      return [
        link,
        renderChildren(h, item.children, item.basePath, $route, maxDepth),
      ];
    } else if (
      (active || displayAllHeaders) &&
      item.headers &&
      !hashRE.test(item.path)
    ) {
      const children = groupHeaders(item.headers);
      return [link, renderChildren(h, children, item.path, $route, maxDepth)];
    } else {
      return link;
    }
  },
};

function renderLink(h, to, text, active, level) {
  const component = {
    props: {
      to,
      activeClass: "",
      exactActiveClass: "",
    },
    class: {
      active,
      "sidebar-link": true,
    },
  };

  if (level > 2) {
    component.style = {
      "padding-left": level + "rem",
    };
  }

  return h("RouterLink", component, text);
}

function renderChildren(h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null;
  return h(
    "ul",
    { class: "sidebar-sub-headers" },
    children.map((c) => {
      const active = isActive(route, path + "#" + c.slug);
      return h("li", { class: "sidebar-sub-header" }, [
        renderLink(h, path + "#" + c.slug, c.title, active, c.level - 1),
        renderChildren(h, c.children, path, route, maxDepth, depth + 1),
      ]);
    })
  );
}

function renderExternal(h, to, text) {
  return h(
    "a",
    {
      attrs: {
        href: to,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      class: {
        "sidebar-link": true,
      },
    },
    [text, h("OutboundLink")]
  );
}
</script>

<style lang="stylus">
.sidebar .sidebar-sub-headers {
  font-size: 0.9375em;
  padding-left: 1rem;
}

a.sidebar-link {
  border-left: 0.25rem solid transparent;
  box-sizing: border-box;
  color: $textColor;
  display: inline-block;
  font-weight: 400;
  line-height: 1.4;
  padding: 0.35rem 1rem 0.35rem 1.25rem;
  width: 100%;

  &:hover {
    color: $accentColor;
  }

  &.active {
    border-left-color: $accentColor;
    color: $accentColor;
    font-weight: 600;
  }

  .sidebar-group & {
    padding-left: 3.5rem;
    text-indent: -1.5rem;
  }

  .sidebar-sub-headers & {
    border-left: none;
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
  }
}

.sidebar-sub-headers {
  counter-reset: section;
}

.sidebar-sub-header {
  .sidebar-link {
    &::before {
      content: counter(section);
      counter-increment: section;
      display: inline-block;
      min-width: 1rem;
      padding-right: 0.5rem;
      text-align: right;
    }
  }
}
</style>
