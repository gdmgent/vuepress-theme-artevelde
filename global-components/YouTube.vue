<template>
  <div class="iframe-container">
    <iframe
      :height="height"
      :src="`https://www.youtube.com/embed/${video}?start=${start}&end=${end}&modestbranding=1`"
      :width="width"
      allowfullscreen
      frameborder="0"
    ></iframe>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    end: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "360",
    },
    start: {
      type: String,
      default: "0",
    },
    video: {
      type: String,
    },
    width: {
      type: String,
      default: "640",
    },
  },
};
</script>
