<template>
  <div class="border1">
    <h2>C 结点</h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    global.console.log("C mounted");
  },
  updated() {
    global.console.log("C updated");
  },
  destroyed() {
    global.console.log("C destroyed");
  }
};
</script>
