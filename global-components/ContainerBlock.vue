<template>
  <div :class="['custom-block', styles]">
    <p class="custom-block-title">
      <IconFontAwesomeBrand v-if="isBrandName" class="custom-block-icon" :name="icon" />
      <IconBootstrap v-else class="custom-block-icon" :name="icon" />
      <strong v-html="info" />
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  computed: {
    isBrandName() {
      return [
        "adobe",
        "android",
        "apple",
        "font-awesome",
        "github",
        "linkedin",
        "linux",
        "microsoft",
        "raspberry-pi",
        "ubuntu",
        "windows",
        "youtube",
      ].includes(this.icon);
    },
    icon() {
      let icon = null;
      switch (this.name) {
        case "file":
          icon = "file-earmark-code";
          break;
        case "bad":
          icon = "hand-thumbs-down";
          break;
        case "blender":
          icon = "box";
          break;
        case "definition":
          icon = "star";
          break;
        case "good":
          icon = "hand-thumbs-up";
          break;
        case "info":
          icon = "info-circle";
          break;
        case "know":
          icon = "question-circle";
          break;
        case "linkedin-learning":
          icon = "linkedin";
          break;
        case "person":
          icon = "people";
          break;
        case "quote":
          icon = "chat-quote";
          break;
        case "raspbian":
          icon = "raspberry-pi";
          break;
        case "remark":
          icon = "exclamation-circle";
          break;
        case "see":
          icon = "book";
          break;
        case "sources":
          icon = "globe2";
          break;
        case "task":
          icon = "clipboard-check";
          break;
        case "tip":
          icon = "gift";
          break;
        case "tree":
          icon = "folder2-open";
          break;
        case "video":
          icon = "film";
          break;
        case "warning":
          icon = "exclamation-triangle";
          break;
        default:
          icon = this.name;
          break;
      }
      return icon;
    },
    styles() {
      const styles = [];
      switch (this.name) {
        case "adobe":
        case "android":
        case "apple":
        case "blender":
        case "github":
        case "linux":
        case "microsoft":
        case "mouse":
        case "person":
        case "quote":
        case "raspbian":
        case "ubuntu":
        case "windows":
          styles.push("-icon");
          styles.push("-primary");
          break;
        case "bad":
        case "warning":
          styles.push("-danger");
          styles.push("-icon");
          break;
        case "definition":
        case "info":
        case "linkedin-learning":
        case "video":
        case "youtube":
          styles.push("-icon");
          styles.push("-info");
          break;
        case "file":
          styles.push("-file");
          break;
        case "good":
        case "see":
        case "tip":
          styles.push("-icon");
          styles.push("-tip");
          break;
        case "know":
        case "sources":
          styles.push("-icon");
          styles.push("-secondary");
          break;
        case "remark":
        case "task":
          styles.push("-icon");
          styles.push("-warning");
          break;
        case "tree":
          styles.push("-icon");
          styles.push("-primary");
          styles.push("file-tree");
          break;
      }
      return styles;
    },
  },
  props: {
    info: {
      type: String,
    },
    name: {
      type: String,
      validator(value) {
        const isValid = [
          "adobe",
          "android",
          "apple",
          "bad",
          "blender",
          "definition",
          "file",
          "github",
          "good",
          "info",
          "know",
          "linkedin-learning",
          "linux",
          "microsoft",
          "mouse",
          "person",
          "quote",
          "raspbian",
          "remark",
          "see",
          "sources",
          "task",
          "tip",
          "tree",
          "ubuntu",
          "video",
          "warning",
          "windows",
          "youtube",
        ].includes(value);
        if (!isValid) console.error(value);
        return isValid;
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
$iconSize = 1.5rem;
$iconOffset = 1rem;

.custom-block {
  margin: 1rem 0;
  padding: 0 2rem 1rem ($iconSize + 2 * $iconOffset);
  position: relative;

  p {
    padding: 0;
  }

  .custom-block-title {
    font-weight: 600;
    font-size: 1.25rem;
    padding-top: 0.75rem;
  }
}

.custom-block-icon {
  position: absolute;
  left: $iconOffset;
  top: $iconOffset;

  &.fab {
    // font-weight: normal;
    left: $iconOffset;
    line-height: $iconSize;
  }
}

svg.custom-block-icon {
  height: $iconSize;
  width: $iconSize;
}

.custom-block {
  &.details {
    display: block;
    position: relative;
    border-radius: 2px;
    margin: 1.6em 0;
    padding: 1.6em;
    background-color: #eee;

    h4 {
      margin-top: 0;
    }

    figure, p {
      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
      }
    }

    summary {
      outline: none;
      cursor: pointer;
    }
  }
}

.custom-block {
  &.-primary, &.-secondary, &.-info, &.-tip, &.-danger, &.-warning {
    background-color: var(--color-light, $ahs-black);
    border: 0 solid currentColor;
    border-left-width: $borderWidth;
    color: var(--color);

    .custom-block-title {
      color: inherit;
    }

    a {
      color: var(--color-dark, darken($ahs-black, 20%));
    }
  }

  &.-primary {
    --color: $ahs-black;
    --color-dark: lighten($ahs-black, 60%);
    --color-light: lighten($ahs-black, 90%);
  }

  &.-secondary {
    --color: lighten($ahs-black, 60%);
    --color-dark: lighten($ahs-black, 40%);
    --color-light: lighten($ahs-black, 90%);
  }

  &.-tip {
    --color: $ahs-green;
    --color-dark: darken($ahs-green, 30%);
    --color-light: lighten($ahs-green, 90%);
  }

  &.-warning {
    --color: $ahs-orange;
    --color-dark: darken($ahs-orange, 20%);
    --color-light: lighten($ahs-orange, 90%);
  }

  &.-danger {
    --color: $ahs-red;
    --color-dark: darken($ahs-red, 30%);
    --color-light: lighten($ahs-red, 93%);
  }

  &.-info {
    --color: $ahs-blue;
    --color-dark: darken($ahs-blue, 30%);
    --color-light: lighten($ahs-blue, 90%);
  }

  &.-file {
    background-color: lighten($codeBgColor, 20%);
    border: none;
    border-radius: 6px;
    box-shadow: none;
    margin: 1.25rem 0;
    padding: 0;

    .custom-block-title {
      color: white;
      font-family: $fontFamilyCode;
      font-size: 0.75rem;
      font-weight: normal;
      margin: 0;
      opacity: 0.75;
      padding: 0 0 0 2rem;

      svg.custom-block-icon {
        height: 0.75rem;
        left: 0.75rem;
        margin: auto;
        top: 0.3125rem;
        width: 0.75rem;
      }
    }

    div[class*='language-']::before {
      top: -1.125rem;
    }

    pre {
      margin: 0;
    }
  }
}
</style>