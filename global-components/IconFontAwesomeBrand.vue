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
          "font-awesome",
          "github",
          "linkedin",
          "linux",
          "microsoft",
          "raspberry-pi",
          "steam",
          "ubuntu",
          "windows",
          "youtube",
        ].includes(value);
      },
    },
  },
};
</script>

<style lang="stylus"></style>