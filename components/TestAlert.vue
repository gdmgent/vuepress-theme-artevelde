<template>
  <div>
    Lorem Impsum
    <button @click="testAlert">{{ displayText }}</button>
  </div>
</template>

<script>
export default {
  props: ["displayText"],
  methods: {
    testAlert() {
      alert("Test Alert");
    },
  },
};
</script>

<style scoped>
button {
  background-color: #4caf50;
}
</style>