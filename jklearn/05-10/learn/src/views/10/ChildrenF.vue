<template>
  <div class="border2">
    <h3>F 结点</h3>
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    global.console.log("F mounted");
  },
  updated() {
    global.console.log("F updated");
  },
  destroyed() {
    global.console.log("F destroyed");
  }
};
</script>
