<script>
export default {
  render() {
    const academicYear = this.$themeConfig.data.academicYear;
    return this._v(this.noWrap ? academicYear : `(${academicYear})`);
  },
  props: {
    noWrap: Boolean,
  },
};
</script>