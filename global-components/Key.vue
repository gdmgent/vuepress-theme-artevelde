<template>
  <kbd
    :class="[
      'key',
      { '-lowercase': lowercase },
      getAreaClass(),
      getColorClass(),
    ]"
    :title="title"
  >
    <Icon v-if="icon && !alternateLocation" class="key-icon" :name="icon" />
    <Char v-else-if="char && !alternateLocation" :name="char" />
    <abbr v-if="abbr" :title="title">{{ abbr }}</abbr>
    <span v-else-if="text" v-html="text"></span>
    <Icon v-if="icon && alternateLocation" class="key-icon" :name="icon" />
    <Char v-else-if="char && alternateLocation" :name="char" />
  </kbd>
</template>

<script>
export default {
  created() {
    const { text } = this.$slots.default[0];
    this.alternateLocation = this.isLocatedRight();
    this.text = text;
    if (this.mouse) {
      switch (text.toLowerCase()) {
        case "left":
          this.text = '<abbr title="Left Mouse Button">LMB</abbr>';
          this.title = "Left Mouse Button";
          break;
        case "middle":
          this.text = '<abbr title="Middle Mouse Button">MMB</abbr>';
          this.title = "Middle Mouse Button";
          break;
        case "right":
          this.text = '<abbr title="Right Mouse Button">RMB</abbr>';
          this.title = "Right Mouse Button";
          break;
        case "wheel":
          this.text = "Wheel";
          this.title = "Mouse Wheel";
          break;
      }
      this.areaClass = "mouse";
      this.icon = "mouse";
      this.text =
        this.text +
        (this.action !== "click"
          ? `<span class="action">${this.action}</span>`
          : "");
    } else {
      switch (text.toLowerCase()) {
        case "a grave":
          this.char = "LATIN SMALL LETTER A WITH GRAVE";
          this.lowercase = true;
          this.text = null;
          break;
        case "alternate":
          this.areaClass = "modifier";
          if (this.isMacOS()) {
            this.char = "OPTION KEY";
          }
          if (this.isLocatedRight() && this.isWindows()) {
            this.abbr = "AltGr";
            this.title = "Alternate Graphics";
          } else {
            this.abbr = "Alt";
            this.title = "Alternate";
          }
          break;
        case "ampersand":
          this.char = "AMPERSAND";
          this.text = null;
          this.title = "Ampersand";
          break;
        case "apostrophe":
          this.char = "APOSTROPHE";
          this.text = null;
          this.title = "Apostrophe";
          break;
        case "arrow down":
          this.areaClass = "navigation";
          this.icon = "caret-down-fill";
          this.text = null;
          this.title = "Down Arrow";
          break;
        case "arrow left":
          this.areaClass = "navigation";
          this.icon = "caret-left-fill";
          this.text = null;
          this.title = "Left Arrow";
          break;
        case "arrow right":
          this.areaClass = "navigation";
          this.icon = "caret-right-fill";
          this.text = null;
          this.title = "Right Arrow";
          break;
        case "arrow up":
          this.areaClass = "navigation";
          this.icon = "caret-up-fill";
          this.text = null;
          this.title = "Up Arrow";
          break;
        case "asterisk":
          this.char = "ASTERISK";
          this.text = null;
          this.title = "Asterisk";
          break;
        case "backslash":
          this.char = "REVERSE SOLIDUS";
          this.text = null;
          this.title = "Backslash";
          break;
        case "backspace":
          this.char = "LONG LEFTWARDS ARROW";
          break;
        case "backtick":
          this.char = "GRAVE ACCENT";
          this.text = null;
          this.title = "Backtick";
          break;
        case "c cedilla":
          this.char = "LATIN SMALL LETTER C WITH CEDILLA";
          this.lowercase = true;
          this.text = null;
          break;
        case "caps lock":
        case "shift lock":
          this.areaClass = "modifier";
          this.char = "UPWARDS WHITE ARROW FROM BAR";
          break;
        case "circumflex":
          this.char = "CIRCUMFLEX ACCENT";
          this.text = null;
          this.title = "Cirumflex";
          break;
        case "colon":
          this.char = "COLON";
          this.text = null;
          this.title = "Colon";
          break;
        case "comma":
          this.char = "COMMA";
          this.text = null;
          this.title = "Comma";
          break;
        case "command":
          this.abbr = "Cmd";
          this.areaClass = "modifier";
          this.char = "PLACE OF INTEREST SIGN";
          this.title = "Command";
          this.toggleAlternateLocation();
          break;
        case "control":
          this.abbr = "Ctrl";
          this.areaClass = "modifier";
          this.title = "Control";
          break;
        case "dollar":
          this.char = "DOLLAR SIGN";
          this.text = null;
          this.title = "Dollar Sign";
          break;
        case "e acute":
          this.char = "LATIN SMALL LETTER E WITH ACUTE";
          this.lowercase = true;
          this.text = null;
          break;
        case "e grave":
          this.char = "LATIN SMALL LETTER E WITH GRAVE";
          this.lowercase = true;
          this.text = null;
          break;
        case "end":
          this.areaClass = "navigation";
          break;
        case "enter":
          this.areaClass = "editing";
          this.char = "DOWNWARDS ARROW WITH CORNER LEFTWARDS";
          break;
        case "equals":
          this.char = "EQUALS SIGN";
          this.text = null;
          this.title = "Equals Sign";
          break;
        case "escape":
          this.abbr = "Esc";
          this.areaClass = "system";
          this.title = "Escape";
          break;
        case "exclamation":
          this.char = "EXCLAMATION MARK";
          this.text = null;
          this.title = "Exclamation Mark";
          break;
        case "f1":
        case "f2":
        case "f3":
        case "f4":
        case "f5":
        case "f6":
        case "f7":
        case "f8":
        case "f9":
        case "f10":
        case "f11":
        case "f12":
          this.abbr = text.toLowerCase();
          this.areaClass = "function";
          this.title = `Function Key ${text.substring(1)}`;
          break;
        case "function":
          this.abbr = "Fn";
          this.areaClass = "system";
          this.title = "Function";
          break;
        case "home":
          this.areaClass = "navigation";
          break;
        case "less than":
          this.char = "LESS-THAN SIGN";
          this.text = null;
          this.title = "Less Than";
          break;
        case "menu":
          this.areaClass = "system";
          this.icon = "list";
          this.text = null;
          this.title = "Menu";
          break;
        case "micro":
          this.char = "MICRO SIGN";
          this.lowercase = true;
          this.text = null;
          this.title = "Micro";
          break;
        case "minus":
          this.char = "HYPHEN-MINUS";
          this.text = null;
          this.title = "Minus";
          break;
        case "numeric lock":
          this.abbr = "Num Lock";
          this.areaClass = "numeric";
          this.title = "Numeric Lock";
          break;
        case "page down":
          this.areaClass = "navigation";
          this.abbr = "PgDn";
          this.title = "Page Down";
          break;
        case "page up":
          this.areaClass = "navigation";
          this.abbr = "PgUp";
          this.title = "Page Up";
          break;
        case "parenthesis left":
          this.char = "LEFT PARENTHESIS";
          this.text = null;
          this.title = "Left Parenthesis";
          break;
        case "parenthesis right":
          this.char = "RIGHT PARENTHESIS";
          this.text = null;
          this.title = "Right Parenthesis";
          break;
        case "period":
          this.char = "FULL STOP";
          this.text = null;
          this.title = "Period";
          break;
        case "plus":
          this.char = "PLUS SIGN";
          this.text = null;
          this.title = "Plus";
          break;
        case "print screen":
          this.abbr = "PrtScn";
          this.title = "Print Screen";
          break;
        case "quotation":
          this.char = "QUOTATION MARK";
          this.text = null;
          this.title = "Quotation Mark";
          break;
        case "raspberry pi":
          this.areaClass = "system";
          this.icon = "raspberry-pi";
          this.text = null;
          this.title = "Raspberry Pi";
          break;
        case "section":
          this.char = "SECTION SIGN";
          this.text = null;
          this.title = "Section";
          break;
        case "semicolon":
          this.char = "SEMICOLON";
          this.text = null;
          this.title = "Semicolon";
          break;
        case "shift":
          this.areaClass = "modifier";
          this.char = "UPWARDS WHITE ARROW";
          break;
        case "slash":
          this.char = "SOLIDUS";
          this.text = null;
          this.title = "Slash";
          break;
        case "space bar":
          this.text =
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
          this.title = "Space Bar";
          break;
        case "square bracket left":
          this.char = "LEFT SQUARE BRACKET";
          this.text = null;
          this.title = "Left Square Bracket";
          break;
        case "square bracket right":
          this.char = "RIGHT SQUARE BRACKET";
          this.text = null;
          this.title = "Right Square Bracket";
          break;
        case "superscript two":
          this.char = "SUPERSCRIPT TWO";
          this.text = null;
          this.title = "Superscript Two";
          break;
        case "tabulator":
          this.abbr = "Tab";
          this.char = "LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR";
          this.text = null;
          this.title = "Tabulator";
          break;
        case "u grave":
          this.char = "LATIN SMALL LETTER U WITH GRAVE";
          this.lowercase = true;
          this.text = null;
          break;
        case "windows":
          this.areaClass = "system";
          this.icon = "windows";
          this.text = null;
          this.title = "Windows";
          break;
      }
    }
  },
  data() {
    return {
      abbr: null,
      alternateLocation: false,
      areaClass: null,
      brand: null,
      char: null,
      icon: null,
      lowercase: null,
      text: null,
      title: null,
    };
  },
  methods: {
    getAreaClass() {
      return `-${this.areaClass || this.area}`;
    },
    getColorClass() {
      return this.color === "default" ? null : `-${this.color}`;
    },
    isLocatedRight() {
      return "right" === this.location;
    },
    isLinux() {
      return "Linux" === this.os;
    },
    isMacOS() {
      return "macOS" === this.os;
    },
    isWindows() {
      return "Windows" === this.os;
    },
    onNumericArea() {
      return "numeric" === this.area;
    },
    toggleAlternateLocation() {
      this.alternateLocation = !this.alternateLocation;
    },
  },
  props: {
    area: {
      type: String,
      default: "alphanumeric",
      validator(value) {
        return [
          "alphanumeric",
          "editing",
          "function",
          "modifier",
          "navigation",
          "numeric",
          "system",
        ].includes(value);
      },
    },
    action: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "down", "drag", "up"].includes(value);
      },
    },
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
    mouse: Boolean,
    location: {
      type: String,
      default: null,
      validator(value) {
        return ["left", "right"].includes(value);
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
  $faceColor = lighten($ahs-black, 25%);
  background-color: var(--keycapFace, $faceColor);
  border-radius: 0.125rem;
  box-shadow: 0px 1px 0 2px var(--keycapSides, darken($faceColor, 20%));
  color: var(--keycapLegend, #ddd);
  display: inline-block;
  font-family: $fontFamilyCode;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1.75;
  margin: 0 0.125em;
  min-width: 1em;
  padding: 0 0.4375em;
  position: relative;
  text-align: center;
  text-transform: capitalize;
  white-space: nowrap;

  &.-alphanumeric {
  }

  &.-editing, &.-modifier, &.-system {
    $faceColor = $ahs-purple;
    --keycapLegend: lighten(saturation($faceColor, 100%), 50%);
  }

  &.-function {
  }

  &.-navigation {
  }

  &.-numeric {
  }

  &.-red {
    $faceColor = $ahs-red;
    --keycapFace: $faceColor;
    --keycapLegend: lighten($faceColor, 80%);
    --keycapSides: darken($faceColor, 20%);
  }

  &.-yellow {
    $faceColor = rgb(250, 199, 16);
    --keycapFace: darken($faceColor, 30%);
    --keycapLegend: lighten($faceColor, 80%);
    --keycapSides: darken($faceColor, 60%);
  }

  &.-green {
    $faceColor = $ahs-green;
    --keycapFace: $faceColor;
    --keycapLegend: lighten($faceColor, 80%);
    --keycapSides: darken($faceColor, 20%);
  }

  &.-cyan {
    $faceColor = rgb(18, 205, 212);
    --keycapFace: darken($faceColor, 30%);
    --keycapLegend: lighten($faceColor, 80%);
    --keycapSides: darken($faceColor, 60%);
  }

  &.-blue {
    $faceColor = $ahs-blue;
    --keycapFace: $faceColor;
    --keycapLegend: lighten($faceColor, 80%);
    --keycapSides: darken($faceColor, 20%);
  }

  &.-magenta {
    $faceColor = rgb(218, 0, 99);
    --keycapFace: darken($faceColor, 30%);
    --keycapLegend: lighten($faceColor, 80%);
    --keycapSides: darken($faceColor, 60%);
  }

  &.-lowercase {
    text-transform: lowercase;
  }

  :deep(.action) {
    color: yellow;
    font-weight: normal;
    margin-left: 0.5rem;
  }

  :deep(abbr[title]) {
    color: inherit;
    cursor: help;
    text-decoration-color: #999;
    text-decoration-style: dotted;

    &:hover {
      background: inherit;
    }
  }
}
</style>
