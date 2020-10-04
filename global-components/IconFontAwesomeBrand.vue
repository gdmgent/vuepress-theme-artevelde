<template>
  <i :class="['icon', 'fa-fw', 'fab', `fa-${name}`]" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "font-awesome",
      validator(value) {
        return [
          "adobe",
          "android",
          "app-store",
          "apple",
          "bitbucket",
          "font-awesome",
          "github",
          "gitlab",
          "linkedin",
          "linux",
          "microsoft",
          "npm",
          "raspberry-pi",
          "steam",
          "ubuntu",
          "windows",
          "yarn",
          "youtube",
        ].includes(value);
      },
    },
  },
};
</script>

<style lang="stylus"></style>