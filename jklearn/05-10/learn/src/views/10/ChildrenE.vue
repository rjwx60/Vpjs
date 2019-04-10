<template>
  <div class="border2">
    <h3>
      E 结点
    </h3>
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    global.console.log("E mounted");
  },
  updated() {
    global.console.log("E updated");
  },
  destroyed() {
    global.console.log("E destroyed");
  }
};
</script>
