<template>
  <IconCustom v-if="isCustom" :name="name" />
  <IconFontAwesomeBrand v-else-if="isFontAwesomeBrand" :name="name" />
  <IconBootstrap v-else :name="name" />
</template>

<script>
export default {
  computed: {
    isCustom() {
      let isTrue = false;
      switch (this.name) {
        case "canvas":
          isTrue = true;
          break;
      }
      return isTrue;
    },
    isFontAwesomeBrand() {
      let isTrue = false;
      switch (this.name) {
        case "android":
        case "app-store":
        case "apple":
        case "bitbucket":
        case "font-awesome":
        case "github":
        case "gitlab":
        case "linkedin":
        case "linux":
        case "microsoft":
        case "npm":
        case "raspberry-pi":
        case "pinterest":
        case "steam":
        case "ubuntu":
        case "windows":
        case "yarn":
        case "youtube":
          isTrue = true;
          break;
      }
      return isTrue;
    },
  },
  methods: {
    hasName(name) {
      return name === this.name;
    },
  },
  props: {
    name: String,
  },
};
</script>