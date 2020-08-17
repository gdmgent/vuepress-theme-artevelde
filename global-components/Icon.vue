<template>
  <i :class="['icon', styles]" />
</template>

<script>
export default {
  created() {
    let icon = this.name.toLowerCase();
    switch (icon) {
      case "caret-down":
      case "caret-left":
      case "caret-right":
      case "caret-up":
        break;
      default:
        this.styles.push("fa-fw");
    }
    switch (icon) {
      case "adobe":
      case "android":
      case "apple":
      case "font-awesome":
      case "github":
      case "linkedin":
      case "linux":
      case "microsoft":
      case "raspberry-pi":
      case "ubuntu":
      case "windows":
      case "youtube":
        this.styles.push("fab");
        break;
      default:
        this.styles.push("fas");
        break;
    }

    this.styles.push(`fa-${icon}`);
  },
  data() {
    return {
      styles: [],
    };
  },
  props: {
    name: {
      type: String,
      default: "font-awesome",
      validator(value) {
        return [
          "adobe",
          "android",
          "apple",
          "atlas",
          "bars",
          "book-reader",
          "caret-down",
          "caret-left",
          "caret-right",
          "caret-up",
          "cube",
          "download",
          "edit",
          "exclamation-circle",
          "exclamation-triangle",
          "female",
          "file-code",
          "film",
          "folder-open",
          "font-awesome",
          "github",
          "info-circle",
          "lightbulb",
          "linkedin",
          "linux",
          "male",
          "microsoft",
          "mouse",
          "question-circle",
          "quote-left",
          "raspberry-pi",
          "star",
          "thumbs-down",
          "thumbs-up",
          "ubuntu",
          "windows",
          "youtube",
        ].includes(value);
      },
    },
  },
};
</script>
