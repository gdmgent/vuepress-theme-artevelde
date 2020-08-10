<template>
  <i :class="['fa-fw', 'fab', `fa-${name}`]" />
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
        ].includes(value);
      },
    },
  },
};
</script>
