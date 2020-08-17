<template>
  <kbd :class="['key', {'num': hasPositionNumeric()}, `-${this.color}`]" :title="title">
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
      case "mouse left":
        this.icon = "mouse";
        this.text = '<abbr title="Left Mouse Button">LMB</abbr>';
        this.title = "Left Mouse Button";
        break;
      case "mouse left drag":
        this.icon = "mouse";
        this.text = '<abbr title="Left Mouse Button">LMB</abbr> drag';
        this.title = "Left Mouse Button";
        break;
      case "mouse middle":
        this.icon = "mouse";
        this.text = '<abbr title="Middle Mouse Button">MMB</abbr>';
        this.title = "Middle Mouse Button";
        break;
      case "mouse middle drag":
        this.icon = "mouse";
        this.text = '<abbr title="Middle Mouse Button">MMB</abbr> drag';
        this.title = "Middle Mouse Button";
        break;
      case "mouse right":
        this.icon = "mouse";
        this.text = '<abbr title="Right Mouse Button">RMB</abbr>';
        this.title = "Right Mouse Button";
        break;
      case "mouse right drag":
        this.icon = "mouse";
        this.text = '<abbr title="Right Mouse Button">RMB</abbr> drag';
        this.title = "Right Mouse Button";
        break;
      case "mouse wheel":
        this.icon = "mouse";
        this.text = "Wheel";
        this.title = "Mouse Wheel";
        break;
      case "mouse wheel down":
        this.icon = "mouse";
        this.text = "Wheel down";
        this.title = "Mouse Wheel down";
        break;
      case "mouse wheel up":
        this.icon = "mouse";
        this.text = "Wheel up";
        this.title = "Mouse Wheel up";
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
      default: "default",
      validator(value) {
        return [
          "blue",
          "cyan",
          "default",
          "green",
          "magenta",
          "red",
          "yellow",
        ].includes(value);
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
  background-color: #444;
  border-radius: 0.125rem;
  box-shadow: 0px 1px 0 2px #666;
  color: #ddd;
  display: inline-block;
  font-family: $fontFamilyCode;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0 0.125rem;
  min-width: 0.5rem;
  padding: 0 0.5rem;
  position: relative;
  text-align: center;
  text-transform: capitalize;
  white-space: nowrap;

  &.key-alphanumeric {
    --background: #444;
    --shadow: #ccc;
    --legend: #ddd;
  }

  &.key-control {
  }

  &.key-function {
  }

  &.key-modifier {
  }

  &.key-navigation {
  }

  &.key-numeric {
  }

  &.num {
    background-color: #444;
    border-color: #666;
    border-bottom-color: #333;
    color: #ddd;
  }

  &.-red {
    color: rgb(240, 70, 37);
  }

  &.-yellow {
    color: rgb(250, 199, 16);
  }

  &.-green {
    color: rgb(143, 209, 79);
  }

  &.-cyan {
    color: rgb(18, 205, 212);
  }

  &.-blue {
    color: rgb(45, 155, 240);
  }

  &.-magenta {
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
