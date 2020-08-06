<template>
  <header class="navbar">
    <SidebarButton class="navbar-item" @toggle-sidebar="$emit('toggle-sidebar')" />
    <RouterLink class="navbar-item home-link" :to="$localePath">
      <img
        class="logo"
        src="https://www.gdm.gent/vuepress-theme-artevelde/artevelde__icon--white.svg"
        :alt="$siteTitle"
      />
      <span
        v-if="$siteTitle"
        ref="siteName"
        :class="['site-name', { 'can-hide': $site.themeConfig.logo }]"
      >{{ $siteTitle }}</span>
    </RouterLink>
    <SearchBox
      class="navbar-item"
      v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"
    />
    <NavLinks class="navbar-item can-hide" />
  </header>
</template>

<script>
import SearchBox from "@SearchBox";
import NavLinks from "@theme/components/NavLinks.vue";
import SidebarButton from "@theme/components/SidebarButton.vue";

export default {
  name: "Navbar",

  components: {
    NavLinks,
    SearchBox,
    SidebarButton,
  },

  data() {
    return {
      linksWrapMaxWidth: null,
    };
  },

  methods: {},

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  },
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1rem;

.navbar {
  background-color: $navbarBgColor;
  box-sizing: border-box;
  color: $navbarColor;
  display: flex;
  left: 0;
  min-height: $navbarHeight;
  padding: 0 $navbar-horizontal-padding;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;

  a, span, img {
    display: inline-block;
  }

  .navbar-item {
    align-items: center;
    display: flex;
  }

  .logo {
    height: 1rem;
    margin-right: 0.3rem;
  }

  .home-link {
    margin: 0.5rem auto 0.5rem 0;
    padding: 0 0.5rem;
    overflow: hidden;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem;
    }
  }

  .nav-links {
    align-items: center;
    color: $navbarColor;

    a:hover {
      border-bottom-color: white;
    }

    a:hover, .router-link-active {
      color: white;
    }

    .nav-link {
      white-space: nowrap;
    }
  }

  .search-box {
    align-items: center;
    cursor: text;
    flex: 0 0 auto;

    &::before {
      $size = 1rem;
      --icon: url('https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/icons/search.svg');
      background-color: white;
      background-attachment: fixed;
      background-repeat: none;
      content: '';
      display: block;
      height: $size;
      left: 0.5rem;
      -webkit-mask-image: var(--icon);
      mask-image: var(--icon);
      opacity: 0.5;
      pointer-events: none;
      position: absolute;
      width: $size;
    }

    &:focus-within {
      &::before {
        background-color: $ahs-purple;
        opacity: 1;
      }
    }

    input {
      color: white;
      background: rgba(0, 0, 0, 0.1);
      border: none;
      position: static;

      &:focus {
        background-color: $ahs-white;
        color: $ahs-purple;
      }
    }
  }

  .site-name {
    color: $navbarColor;
    font-size: 1.5rem;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    .can-hide {
      display: none;
    }
  }
}

@media print {
  .navbar {
    display: none;
  }
}
</style>
