<template>
  <svg
    v-if="hasName('canvas')"
    viewBox="0 0 16 16"
    class="icon"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(1.3397129,0,0,1.3397129,-0.0382775,-0.0382775)" id="g36">
      <circle r="0.5" cy="6" cx="3.2" />
      <circle r="0.5" cy="6" cx="8.8000002" />
      <path d="M 2.3,6 C 2.3,5.2 1.7,4.6 1,4.5 0.7,5.5 0.7,6.5 1,7.5 1.7,7.4 2.3,6.8 2.3,6 Z" />
      <path d="m 9.7,6 c 0,0.8 0.6,1.4 1.3,1.5 0.3,-1 0.3,-2 0,-3 C 10.3,4.6 9.7,5.2 9.7,6 Z" />
      <path d="m 6,9.7 c -0.8,0 -1.4,0.6 -1.5,1.3 1,0.3 2,0.3 3,0 C 7.4,10.3 6.8,9.7 6,9.7 Z" />
      <path
        d="M 6,8.4 C 6.3,8.4 6.5,8.6 6.5,8.9 6.5,9.2 6.3,9.4 6,9.4 5.7,9.4 5.5,9.2 5.5,8.9 5.5,8.6 5.7,8.4 6,8.4 Z"
      />
      <path d="M 6,2.3 C 6.8,2.3 7.4,1.7 7.5,1 6.5,0.7 5.5,0.7 4.5,1 4.6,1.7 5.2,2.3 6,2.3 Z" />
      <path
        d="M 6,2.7 C 6.3,2.7 6.5,2.9 6.5,3.2 6.5,3.5 6.3,3.7 6,3.7 5.7,3.7 5.5,3.5 5.5,3.2 5.5,2.9 5.7,2.7 6,2.7 Z"
      />
      <path
        d="M 8.6,8.6 C 8.1,9.2 8,10 8.5,10.6 9.4,10.1 10.1,9.3 10.6,8.5 10,8 9.2,8.1 8.6,8.6 Z"
      />
      <path
        d="M 7.7,7.7 C 7.9,7.5 8.2,7.5 8.4,7.7 8.6,7.9 8.6,8.2 8.4,8.4 8.2,8.6 7.9,8.6 7.7,8.4 7.5,8.2 7.5,7.9 7.7,7.7 Z"
      />
      <path d="M 3.4,3.4 C 3.9,2.8 4,2 3.5,1.4 2.6,1.9 1.9,2.6 1.4,3.5 2,4 2.8,3.9 3.4,3.4 Z" />
      <path
        d="M 3.6,3.6 C 3.8,3.4 4.1,3.4 4.3,3.6 4.5,3.8 4.5,4.1 4.3,4.3 4.1,4.5 3.8,4.5 3.6,4.3 3.5,4.1 3.5,3.8 3.6,3.6 Z"
      />
      <path d="M 8.6,3.4 C 9.1,3.9 10,4 10.6,3.5 10.1,2.6 9.4,1.9 8.5,1.4 8,2 8.1,2.8 8.6,3.4 Z" />
      <path
        d="M 7.7,3.6 C 7.9,3.4 8.2,3.4 8.4,3.6 8.6,3.8 8.6,4.1 8.4,4.3 8.2,4.5 7.9,4.5 7.7,4.3 7.5,4.1 7.5,3.8 7.7,3.6 Z"
      />
      <path d="M 3.4,8.6 C 2.8,8.1 2,8 1.4,8.5 1.9,9.4 2.6,10.1 3.5,10.6 4,10 3.9,9.2 3.4,8.6 Z" />
      <path
        d="M 3.6,7.7 C 3.8,7.5 4.1,7.5 4.3,7.7 4.5,7.9 4.5,8.2 4.3,8.4 4.1,8.6 3.8,8.6 3.6,8.4 3.5,8.1 3.5,7.8 3.6,7.7 Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  methods: {
    hasName(name) {
      return name === this.name;
    },
  },
  created() {},
  props: {
    name: {
      type: String,
      default: "canvas",
      validator(value) {
        return ["canvas"].includes(value);
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.icon {
  height: 1rem;
  width: 1rem;
  vertical-align: middle;
}
</style>