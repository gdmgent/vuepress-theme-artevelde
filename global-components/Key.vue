<template>
  <kbd :class="['key', {'num': hasPositionNumeric()}]" :title="title">
    <Icon v-if="icon && !alternatePosition" class="key-icon" :name="icon" />
    <Char v-else-if="char && !alternatePosition" :name="char" />
    <abbr v-if="abbr" :title="title">{{ abbr }}</abbr>
    <span v-else-if="text" v-html="text"></span>
    <Icon v-if="icon && alternatePosition" class="key-icon" :name="icon" />
    <Char v-else-if="char && alternatePosition" :name="char" />
  </kbd>
</template>

<script>
export default {
  created() {
    const { text } = this.$slots.default[0];
    this.alternatePosition = this.hasPositionRight();
    this.text = text;
    switch (text.toLowerCase()) {
      case "alternate":
        if (this.isMacOS()) {
          this.char = "OPTION KEY";
        }
        if (this.hasPositionRight() && this.isWindows()) {
          this.abbr = "AltGr";
          this.title = "Alternate Graphics";
        } else {
          this.abbr = "Alt";
          this.title = "Alternate";
        }
        break;
      case "backspace":
        this.char = "LONG LEFTWARDS ARROW";
        break;
      case "caps lock":
        this.char = "UPWARDS WHITE ARROW FROM BAR";
        break;
      case "down":
        this.icon = "caret-down";
        this.text = null;
        this.title = "Down Arrow";
        break;
      case "enter":
        this.char = "DOWNWARDS ARROW WITH CORNER LEFTWARDS";
        break;
      case "escape":
        this.abbr = "Esc";
        this.title = "Escape";
        break;
      case "function":
        this.abbr = "Fn";
        this.title = "Function";
        break;
      case "command":
        this.abbr = "Cmd";
        this.char = "PLACE OF INTEREST SIGN";
        this.title = "Command";
        this.toggleAlternatePosition();
        break;
      case "control":
        this.abbr = "Ctrl";
        this.title = "Control";
        break;
      case "left":
        this.icon = "caret-left";
        this.text = null;
        this.title = "Left Arrow";
        break;
      case "menu":
        this.icon = "bars";
        this.text = null;
        this.title = "Menu";
        break;
      case "numeric lock":
        this.abbr = "Num Lock";
        this.title = "Numeric Lock";
        break;
      case "page down":
        this.abbr = "PgDn";
        this.title = "Page Down";
        break;
      case "page up":
        this.abbr = "PgUp";
        this.title = "Page Up";
        break;
      case "print screen":
        this.abbr = "PrtScn";
        this.title = "Print Screen";
        break;
      case "raspberry pi":
        this.icon = "raspberry-pi";
        this.text = null;
        this.title = "Raspberry Pi";
        break;
      case "right":
        this.icon = "caret-right";
        this.text = null;
        this.title = "Right Arrow";
        break;
      case "shift":
        this.char = "UPWARDS WHITE ARROW";
        break;
      case "space bar":
        this.text =
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        this.title = "Space Bar";
        break;
      case "tabulator":
        this.abbr = "Tab";
        this.char = "LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR";
        this.text = null;
        this.title = "Tabulator";
        break;
      case "up":
        this.icon = "caret-up";
        this.text = null;
        this.title = "Up Arrow";
        break;
      case "windows":
        this.icon = "windows";
        this.text = null;
        this.title = "Windows";
        break;
    }
  },
  data() {
    return {
      alternatePosition: false,
      abbr: null,
      char: null,
      icon: null,
      text: null,
      title: null,
    };
  },
  methods: {
    hasPositionNumeric() {
      return "numeric" === this.position;
    },
    hasPositionRight() {
      return "right" === this.position;
    },
    isLinux() {
      return "linux" === this.os;
    },
    isMacOS() {
      return "macOS" === this.os;
    },
    isWindows() {
      return "Windows" === this.os;
    },
    toggleAlternatePosition() {
      this.alternatePosition = !this.alternatePosition;
    },
  },
  props: {
    color: {
      type: String,
      default: "dark",
      validator(value) {
        return ["dark", "light"].includes(value);
      },
    },
    position: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "mouse", "numeric", "right"].includes(value);
      },
    },
    os: {
      type: String,
      default: "generic",
      validator(value) {
        return ["generic", "Linux", "macOS", "Windows"].includes(value);
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
kbd[title] {
  cursor: help;
}

.key {
  background-color: #f7f7f7;
  border-color: #ccc;
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 0.15rem;
  border-bottom-width: 0.25rem;
  color: #333;
  display: inline-block;
  font-family: $fontFamilyCode;
  font-size: 11px;
  font-weight: bold;
  line-height: 1.4;
  margin: 0.1em;
  padding: 0.1em 0.5em;
  position: relative;
  text-transform: capitalize;
  white-space: nowrap;

  &.num {
    background-color: #444;
    border-color: #666;
    border-bottom-color: #333;
    color: #ddd;
  }

  &.-r {
    color: rgb(240, 70, 37);
  }

  &.-y {
    color: rgb(250, 199, 16);
  }

  &.-g {
    color: rgb(143, 209, 79);
  }

  &.-c {
    color: rgb(18, 205, 212);
  }

  &.-b {
    color: rgb(45, 155, 240);
  }

  &.-m {
    color: rgb(218, 0, 99);
  }

  abbr[title] {
    cursor: help;
    text-decoration-style: dotted;
    text-decoration-color: #999;

    &:hover {
      background: inherit;
    }
  }
}
</style>
