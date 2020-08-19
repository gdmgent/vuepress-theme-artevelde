<template>
  <span class="char" v-html="char" />
</template>

<script>
export default {
  created() {
    switch (this.name) {
      case "BLACK RIGHT-POINTING SMALL TRIANGLE":
      case "next":
        this.char = "&#x25B8;";
        break;
      case "DOWNWARDS ARROW WITH CORNER LEFTWARDS":
        this.char = "&#x21B5;";
        break;
      case "LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR":
        this.char = "&#x21B9;";
        break;
      case "LONG LEFTWARDS ARROW":
        this.char = "&#x27F5;";
        break;
      case "MULTIPLICATION SIGN":
      case "times":
        this.char = "&#xD7;";
        break;
      case "OPTION KEY":
        this.char = "&#x2325;";
        break;
      case "PLACE OF INTEREST SIGN":
        this.char = "&#x2318;";
        break;
      case "PLUS SIGN":
      case "and":
        this.char = "&#x2B;";
        break;
      case "thrice":
        this.char = "&#xD7;&#x2462;";
        break;
      case "twice":
        this.char = "&#xD7;&#x2461;";
        break;
      case "UPWARDS WHITE ARROW":
        this.char = "&#x21E7;";
        break;
      case "UPWARDS WHITE ARROW FROM BAR":
        this.char = "&#x21EA;";
        break;
      case "APL FUNCTIONAL SYMBOL QUAD QUESTION":
      default:
        this.char = "&#x2370;";
    }
  },
  props: {
    name: {
      type: String,
      default: "APL FUNCTIONAL SYMBOL QUAD QUESTION",
      validator(value) {
        return [
          "APL FUNCTIONAL SYMBOL QUAD QUESTION",
          "BLACK RIGHT-POINTING SMALL TRIANGLE",
          "DOWNWARDS ARROW WITH CORNER LEFTWARDS",
          "LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR",
          "LONG LEFTWARDS ARROW",
          "MULTIPLICATION SIGN",
          "OPTION KEY",
          "PLACE OF INTEREST SIGN",
          "PLUS SIGN",
          "UPWARDS WHITE ARROW",
          "UPWARDS WHITE ARROW FROM BAR",
          "and",
          "next",
          "times",
          "thrice",
          "twice",
        ].includes(value);
      },
    },
  },
};
</script>