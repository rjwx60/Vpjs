<template>
  <div class="border2">
    <h2>G 结点</h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    global.console.log("G mounted")
  },
  updated() {
    global.console.log("G updated")
  },
  destroyed() {
    global.console.log("G destroyed")
  }
};
</script>
