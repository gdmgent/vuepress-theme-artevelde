<template>
  <div class="dropdown-wrapper" :class="{ open }">
    <button
      class="dropdown-title"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="setOpen(!open)"
    >
      <span class="title">{{ item.text }}</span>
      <span class="arrow" :class="open ? 'down' : 'right'" />
    </button>

    <DropdownTransition>
      <ul v-show="open" class="nav-dropdown">
        <li
          v-for="(subItem, index) in item.items"
          :key="subItem.link || index"
          class="dropdown-item"
        >
          <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>

          <ul v-if="subItem.type === 'links'" class="dropdown-subitem-wrapper">
            <li
              v-for="childSubItem in subItem.items"
              :key="childSubItem.link"
              class="dropdown-subitem"
            >
              <NavLink
                :item="childSubItem"
                @focusout="
                  isLastItemOfArray(childSubItem, subItem.items) &&
                    isLastItemOfArray(subItem, item.items) &&
                    setOpen(false)
                "
              />
            </li>
          </ul>

          <NavLink
            v-else
            :item="subItem"
            @focusout="isLastItemOfArray(subItem, item.items) && setOpen(false)"
          />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import DropdownTransition from "@theme/components/DropdownTransition.vue";
import last from "lodash/last";

export default {
  name: "DropdownLink",

  components: {
    NavLink,
    DropdownTransition,
  },

  props: {
    item: {
      required: true,
    },
  },

  data() {
    return {
      open: false,
    };
  },

  computed: {
    dropdownAriaLabel() {
      return this.item.ariaLabel || this.item.text;
    },
  },

  watch: {
    $route() {
      this.open = false;
    },
  },

  methods: {
    setOpen(value) {
      this.open = value;
    },

    isLastItemOfArray(item, array) {
      return last(array) === item;
    },
  },
};
</script>

<style lang="stylus">
.dropdown-wrapper {
  cursor: pointer;
  display: inline-block;

  .dropdown-title {
    background: transparent;
    border: none;
    color: inherit;
    cursor: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
    padding: 0;
    white-space: nowrap;

    .arrow {
      margin-left: 0.4rem;
      margin-top: -1px;
      vertical-align: middle;
    }
  }

  .nav-dropdown {
    .dropdown-item {
      line-height: 1.75rem;

      h4 {
        border-top: 1px solid #eee;
        margin: 0.45rem 0 0;
        padding: 0.45rem 1.5rem 0 1.25rem;
      }

      .dropdown-subitem-wrapper {
        padding: 0;
        list-style: none;

        .dropdown-subitem {
          font-size: 0.9em;
        }
      }

      a {
        border-bottom: none;
        color: $textColor;
        display: block;
        font-weight: 400;
        line-height: 1.7rem;
        margin-bottom: 0;
        padding: 0 1.5rem 0 1.25rem;
        position: relative;

        &:hover {
          color: $accentColor;
        }

        &.router-link-active {
          color: $accentColor;

          &::after {
            border-bottom: 3px solid transparent;
            border-left: 5px solid $accentColor;
            border-top: 3px solid transparent;
            content: '';
            height: 0;
            left: 9px;
            position: absolute;
            top: calc(50% - 2px);
            width: 0;
          }
        }
      }

      &:first-child h4 {
        border-top: 0;
        margin-top: 0;
        padding-top: 0;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .dropdown-wrapper {
    &.open .dropdown-title {
      margin-bottom: 0.5rem;
    }

    .dropdown-title {
      font-size: inherit;
      font-weight: 600;

      &:hover {
        color: $accentColor;
      }
    }

    .nav-dropdown {
      transition: height 0.1s ease-out;
      overflow: hidden;

      .dropdown-item {
        h4 {
          border-top: 0;
          margin-top: 0;
          padding-top: 0;
        }

        h4, & > a {
          font-size: 15px;
          line-height: 2rem;
        }

        .dropdown-subitem {
          font-size: 14px;
          padding-left: 1rem;
        }
      }
    }
  }
}

@media (min-width: $MQMobile) {
  .dropdown-wrapper {
    height: 1.8rem;

    &:hover .nav-dropdown, &.open .nav-dropdown {
      // override the inline style.
      display: block !important;
    }

    &.open:blur {
      display: none;
    }

    .dropdown-title .arrow {
      // make the arrow always down at desktop
      border-bottom: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 6px solid $arrowBgColor;
    }

    .nav-dropdown {
      background-color: #fff;
      border: 1px solid #ddd;
      border-bottom-color: #ccc;
      border-radius: 0.25rem;
      box-sizing: border-box;
      display: none;
      height: auto !important; // Avoid height shaked by clicking
      margin: 0;
      max-height: calc(100vh - 2.7rem);
      overflow-y: auto;
      padding: 0.6rem 0;
      position: absolute;
      right: 0;
      text-align: left;
      top: 100%;
      white-space: nowrap;
    }
  }
}
</style>
