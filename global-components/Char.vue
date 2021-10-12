<template>
  <span class="char" v-html="char" />
</template>

<script>
export default {
  created() {
    let hex = "0";
    switch (this.name) {
      case "AMPERSAND":
      case "amp":
        hex = "26";
        break;
      case "APOSTROPHE":
      case "apos":
        hex = "27";
        break;
      case "ASTERISK":
        hex = "2A";
        break;
      case "BLACK RIGHT-POINTING SMALL TRIANGLE":
      case "next":
        hex = "25B8";
        break;
      case "CIRCUMFLEX ACCENT":
        hex = "5E";
        break;
      case "COLON":
        hex = "3A";
        break;
      case "COMMA":
        hex = "2C";
        break;
      case "DOLLAR SIGN":
        hex = "24";
        break;
      case "DOWNWARDS ARROW WITH CORNER LEFTWARDS":
        hex = "21B5";
        break;
      case "EQUALS SIGN":
        hex = "3D";
        break;
      case "EXCLAMATION MARK":
        hex = "21";
        break;
      case "FULL STOP":
      case "period":
        hex = "2E";
        break;
      case "GRAVE ACCENT":
      case "backtick":
        hex = "60";
        break;
      case "HYPHEN-MINUS":
      case "minus":
        hex = "2D";
        break;
      case "LATIN SMALL LETTER A WITH GRAVE":
      case "agrave":
        hex = "E0";
        break;
      case "LATIN SMALL LETTER C WITH CEDILLA":
      case "ccedil":
        hex = "E7";
        break;
      case "LATIN SMALL LETTER E WITH ACUTE":
      case "eacute":
        hex = "E9";
        break;
      case "LATIN SMALL LETTER E WITH GRAVE":
      case "egrave":
        hex = "E8";
        break;
      case "LATIN SMALL LETTER U WITH GRAVE":
      case "ugrave":
        hex = "F9";
        break;
      case "LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR":
        hex = "21B9";
        break;
      case "LEFT PARENTHESIS":
        hex = "28";
        break;
      case "LEFT SQUARE BRACKET":
        hex = "5B";
        break;
      case "LESS-THAN SIGN":
        hex = "3C";
        break;
      case "LONG LEFTWARDS ARROW":
        hex = "27F5";
        break;
      case "MICRO SIGN":
      case "micro":
        hex = "B5";
        break;
      case "MULTIPLICATION SIGN":
      case "times":
        hex = "D7";
        break;
      case "OPTION KEY":
        hex = "2325";
        break;
      case "PLACE OF INTEREST SIGN":
        hex = "2318";
        break;
      case "PLUS SIGN":
      case "and":
      case "plus":
        hex = "2B";
        break;
      case "QUOTATION MARK":
      case "quot":
        hex = "22";
        break;
      case "REVERSE SOLIDUS":
      case "backslash":
        hex = "5C";
        break;
      case "RIGHT PARENTHESIS":
        hex = "29";
        break;
      case "RIGHT SQUARE BRACKET":
        hex = "5D";
        break;
      case "SECTION SIGN":
      case "section":
        hex = "A7";
        break;
      case "SEMICOLON":
        hex = "3b";
        break;
      case "SOLIDUS":
      case "slash":
        hex = "2F";
        break;
      case "SUPERSCRIPT TWO":
        hex = "B2";
        break;
      case "UPWARDS WHITE ARROW":
        hex = "21E7";
        break;
      case "UPWARDS WHITE ARROW FROM BAR":
        hex = "21EA";
        break;
      case "thrice":
        hex = ["D7", "2462"];
        break;
      case "twice":
        hex = ["D7", "2461"];
        break;
      case "VERTICAL LINE":
      case "or":
        hex = "7C"
        break;
      case "NULL":
      default:
        hex = "0";
    }
    this.char =
      hex instanceof Array
        ? hex
            .map((element) => `&#x${element};`)
            .reduce((result, element) => result + element)
        : `&#x${hex};`;
  },
  props: {
    name: {
      type: String,
      default: "NULL",
      validator(value) {
        return [
          "AMPERSAND",
          "APOSTROPHE",
          "ASTERISK",
          "BLACK RIGHT-POINTING SMALL TRIANGLE",
          "CIRCUMFLEX ACCENT",
          "COLON",
          "COMMA",
          "DOLLAR SIGN",
          "DOWNWARDS ARROW WITH CORNER LEFTWARDS",
          "EQUALS SIGN",
          "EXCLAMATION MARK",
          "FULL STOP",
          "GRAVE ACCENT",
          "HYPHEN-MINUS",
          "LATIN SMALL LETTER A WITH GRAVE",
          "LATIN SMALL LETTER C WITH CEDILLA",
          "LATIN SMALL LETTER E WITH ACUTE",
          "LATIN SMALL LETTER E WITH GRAVE",
          "LATIN SMALL LETTER U WITH GRAVE",
          "LATIN SMALL LETTER U WITH GRAVE",
          "LEFT PARENTHESIS",
          "LEFT SQUARE BRACKET",
          "LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR",
          "LESS-THAN SIGN",
          "LONG LEFTWARDS ARROW",
          "MICRO SIGN",
          "MULTIPLICATION SIGN",
          "NULL",
          "OPTION KEY",
          "PLACE OF INTEREST SIGN",
          "PLUS SIGN",
          "QUOTATION MARK",
          "REVERSE SOLIDUS",
          "RIGHT PARENTHESIS",
          "RIGHT SQUARE BRACKET",
          "SECTION SIGN",
          "SEMICOLON",
          "SOLIDUS",
          "SUPERSCRIPT TWO",
          "UPWARDS WHITE ARROW FROM BAR",
          "UPWARDS WHITE ARROW",
          "VERTICAL LINE",
          "agrave",
          "amp",
          "and",
          "apos",
          "backslash",
          "backtick",
          "ccedil",
          "dollar",
          "eacute",
          "egrave",
          "equals",
          "exclamation",
          "micro",
          "minus",
          "next",
          "or",
          "period",
          "quot",
          "section",
          "slash",
          "thrice",
          "times",
          "twice",
          "ugrave",
        ].includes(value);
      },
    },
  },
};
</script>
