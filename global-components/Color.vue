<template>
  <span :style="style"><slot /></span>
</template>

<script>
export default {
  created() {
    let color;
    switch (this.value) {
      case "BLAUW":
        color = "#00a5d9";
        break;
      case "GROEN":
        color = "#5ab946";
        break;
      case "ORANJE":
        color = "#f58732";
        break;
      case "PAARS":
        color = "#7e57c5";
        break;
      case "ROOD":
        color = "#ed0034";
        break;
      case "ROZE":
        color = "#d20082";
        break;
      default:
        color = this.value;
    }
    this.style = `color: ${color}`;
  },
  props: {
    value: String,
  },
};
</script>