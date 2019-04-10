<template>
  <div class="border1">
    <h2>D 结点</h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    global.console.log("D mounted");
  },
  updated() {
    global.console.log("D updated");
  },
  destroyed() {
    global.console.log("D destroyed");
  }
};
</script>
