<template>
  <span :style="style"><slot /></span>
</template>

<script>
export default {
  created() {
    this.style = `color: ${this.value}`;
  },
  props: {
    value: String,
  },
};
</script>