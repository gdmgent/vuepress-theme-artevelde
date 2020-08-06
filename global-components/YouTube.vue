<template functional>
  <div class="iframe-container">
    <iframe
      :height="props.height"
      :src="`https://www.youtube.com/embed/${props.video}?start=${props.start}&end=${props.end}&modestbranding=1`"
      :width="props.width"
      allowfullscreen
      frameborder="0"
    ></iframe>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "360",
    },
    start: {
      type: String,
      default: "0",
    },
    end: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "640",
    },
    video: {
      type: String,
    },
  },
};
</script>

<style lang="stylus" scoped></style>
